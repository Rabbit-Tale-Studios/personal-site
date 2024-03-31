import Tooltip from 'components/Tooltip'
import Button from 'components/calendar/Button'
import Gallery from 'components/calendar/Gallery'
import Modal from 'components/calendar/Modal'
import TextBlock from 'components/calendar/TextBlock'
import useClickOutside from 'hooks/useClickOutside'
import { MonthDataType } from 'lib/activity/activityTypes'
import moment from 'moment'
import Image, { StaticImageData } from 'next/image'
import placeholder from 'public/images/placeholder.jpg'
import { Fragment, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

const Calendar = (props: { data: MonthDataType[] }) => {
  const [calBgColor, setCalBgColor] = useState('none')
  const [takeover, setTakeover] = useState(false)
  const [clip, setClip] = useState(false)
  const [loadIn, setLoadIn] = useState(true)
  const [modal, setModal] = useState(false)
  const [isTileActive, setIsTileActive] = useState(false)

  const [modalImage, setModalImage] = useState<string | StaticImageData>(
    placeholder,
  )

  const currentYear = moment().year(props.data[0].year)
  const currentMonth = moment(currentYear).month(props.data[0].month)
  const monthStartDay = moment(currentMonth).startOf('month').isoWeekday()
  const blankTiles = Array.from({ length: monthStartDay - 1 })

  const monthDays = moment().month(props.data[0].month).daysInMonth()
  const tiles = Array.from({ length: monthDays })

  const nextMonthStartDay = moment(currentMonth)
    .add(1, 'months')
    .startOf('month')
    .isoWeekday()
  const nextMonthBlankTiles = Array.from({ length: 8 - nextMonthStartDay })

  const clickOutsideRef = useClickOutside(() => {
    if (modal) {
    } else {
      setTakeover(false)
      setClip(false)
      setCalBgColor('none')
    }
  })

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const handleClip = () => {
    setTimeout(() => {
      setClip(true)
    }, 500)
  }
  const handleLoadIn = () => {
    setTimeout(() => {
      setLoadIn(false)
    }, 1200)
  }

  handleLoadIn()

  const bgColors = (arg: string | undefined) => {
    return cn({
      'bg-emerald-400 dark:bg-emerald-600': arg === 'Misc',
      'bg-yellow-400 dark:bg-yellow-600': arg === 'Life',
      'bg-orange-400 dark:bg-orange-600': arg === 'Work',
      'bg-blue-400 dark:bg-blue-600': arg === 'Blog',
      'bg-violet-400 dark:bg-violet-600': arg === 'Side Project',
      'bg-rose-400 dark:bg-rose-600': arg === 'Feature',
      'bg-shark-950 dark:bg-shark-700': arg === undefined,
    })
  }

  const textColor = (arg: string | undefined) => {
    return cn({
      'text-emerald-900 dark:text-emerald-100': arg === 'Misc',
      'text-yellow-900 dark:text-yellow-100': arg === 'Life',
      'text-orange-900 dark:text-orange-100': arg === 'Work',
      'text-blue-100 dark:text-blue-950': arg === 'Blog',
      'text-violet-100 dark:text-violet-950': arg === 'Side Project',
      'text-rose-100 dark:text-rose-950': arg === 'Feature',
      'text-shark-100 dark:text-shark-950': arg === undefined,
    })
  }

  return (
    <section ref={ref} className="w-full">
      <Modal open={modal} setOpen={setModal}>
        <Image src={modalImage} alt="image" />
      </Modal>
      <section
        className={cn(
          'reveal mx-auto my-10 flex w-full max-w-sm flex-col gap-4 overflow-y-scroll rounded-3xl bg-shark-950 p-7 shadow-xl dark:bg-white-50',
          bgColors(calBgColor),
          {
            'animate-rotate': props.data[0].month % 2 !== 0 && inView,
            'animate-rotateAlt': props.data[0].month % 2 === 0 && inView,
          },
        )}
        ref={clickOutsideRef}
      >
        <h2 className="reveal animate-revealSm text-sm font-bold tracking-wider text-white-200 dark:text-shark-800">
          {moment().month(props.data[0].month).format('MMMM')}
        </h2>
        <div className="grid w-full grid-cols-7 gap-2">
          {/* Map days of previous month */}
          {blankTiles.map((_, index) => {
            const displayedMonth = moment(currentMonth, 'MMMM')
            const lastMonth = displayedMonth.subtract(1, 'months')
            const lastMonthDays = lastMonth.daysInMonth()
            const day = lastMonthDays - blankTiles.length + index + 1

            return (
              <div
                className={cn(
                  'relative h-8 w-8 rounded-lg bg-shark-700/15 transition-all duration-300 dark:bg-white-300/15 min-[400px]:h-10 min-[400px]:w-full min-[400px]:rounded-[10px]',
                  {
                    'invisible opacity-0 delay-0 duration-0': takeover,
                  },
                )}
                key={index}
              >
                <span
                  className={`pointer-events-none absolute left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 justify-center text-shark-100 opacity-50 dark:text-shark-950 ${isTileActive ? 'hidden' : ''}`}
                >
                  {day}
                </span>
              </div>
            )
          })}

          {/* Map days of current month */}
          {tiles.map((_, index) => {
            interface DayData {
              type: string
              day: number
              // Add other properties of DayData here
            }
            const dayData = props.data[0].days.find(
              (data: DayData) => data.day === index + 1,
            )
            const [active, setActive] = useState(false)

            useEffect(() => {
              if (takeover === false) {
                setActive(false)
                setIsTileActive(false)
              }
            }, [takeover])

            return (
              <div
                key={index}
                className={cn(
                  {
                    'scaleFade animate-scaleFade': loadIn,
                  },
                  'group/tile',
                )}
                style={{
                  animationDelay: `${index / 50 + 0.04}s`,
                }}
              >
                {takeover && active && (
                  <div
                    className={cn(
                      'absolute left-0 top-0 z-50 flex h-max min-h-full w-full animate-fadeSm flex-col',
                      bgColors(dayData?.type),
                    )}
                  >
                    <div className="sticky -top-7 z-10 animate-revealSm pl-2 pt-2">
                      <button
                        className={`z-50 block w-max rounded-full bg-white-50 px-3 py-1.5 font-bold tracking-wide text-shark-950 shadow-md transition-transform active:scale-90 dark:bg-shark-950 dark:text-white-50  sm:hover:scale-90 sm:active:scale-75 ${['Work', 'Life', 'Misc'].includes(dayData?.type ?? '') ? '!bg-shark-950 !text-white-50   ring-1 !ring-shark-800 dark:!bg-white-50 dark:!text-shark-950 dark:ring-0' : '!ring-shark-800 dark:ring-1'}`}
                        onClick={() => {
                          setTakeover(false)
                          setActive(false)
                          setIsTileActive(false)
                          setClip(false)
                          setCalBgColor('none')
                        }}
                      >
                        back
                      </button>
                    </div>
                    <ul className="relative my-2 flex w-full flex-col gap-2 odd:*:animate-rotateAlt even:*:animate-rotate">
                      {/* Map day content */}
                      {dayData?.content.map(
                        (contentItem, contentIndex: number) => (
                          <Fragment key={contentIndex}>
                            {contentItem.type === 'TextBlock' && (
                              <TextBlock
                                data={contentItem.text}
                                themeData={dayData?.type}
                              />
                            )}
                            {contentItem.type === 'Image' && (
                              <Gallery
                                image={contentItem.image || placeholder}
                                onClick={() => {
                                  setModal(true)
                                  setModalImage(
                                    contentItem.image || placeholder,
                                  )
                                }}
                              />
                            )}
                            {contentItem.type === 'LinkButton' && (
                              <Button data={contentItem.link} />
                            )}
                          </Fragment>
                        ),
                      )}
                    </ul>
                  </div>
                )}
                {dayData ? (
                  <div
                    className={cn('group/tooltip relative delay-100', {
                      'invisible opacity-0 delay-0': takeover && !active,
                      'overflow-clip': clip,
                    })}
                  >
                    <Tooltip text={dayData.type} state={takeover} />
                    <button
                      onClick={() => {
                        setTakeover(true)
                        handleClip()
                        setActive(true)
                        setIsTileActive(true)
                        setTimeout(() => {
                          setCalBgColor(dayData.type)
                        }, 400)
                      }}
                      className={cn(
                        'block h-8 w-8 rounded-lg transition-all duration-150 group-hover/tile:scale-90 group-active/tile:scale-75 min-[400px]:h-10 min-[400px]:w-full min-[400px]:rounded-[10px]',
                        bgColors(dayData.type),
                        {
                          'scale-[20] cursor-default duration-300 hover:scale-[20] active:scale-[20]':
                            active && takeover,
                        },
                      )}
                    />
                    <span
                      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center transition-all duration-150 group-hover/tile:scale-90 group-active/tile:scale-75 ${isTileActive && 'hidden'} ${textColor(dayData?.type)}`}
                    >
                      {dayData?.day || index + 1}
                    </span>
                  </div>
                ) : (
                  <div className="relative">
                    <span
                      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center ${isTileActive && 'hidden'} ${textColor(dayData)}`}
                    >
                      {dayData || index + 1}
                    </span>
                    <div
                      className={cn(
                        'h-8 w-8 rounded-lg bg-shark-800/50 transition-all delay-100 duration-300 dark:bg-white-200/50 min-[400px]:h-10 min-[400px]:w-full min-[400px]:rounded-[10px]',
                        {
                          'invisible opacity-0 delay-0 duration-0': takeover,
                        },
                      )}
                    />
                  </div>
                )}
              </div>
            )
          })}
          {(blankTiles.length === 0 && monthDays === 31) ||
          (blankTiles.length > 0 && monthDays !== 31)
            ? nextMonthBlankTiles.map((_, index) => {
                const day = index + 1

                return (
                  <div
                    key={index}
                    className={cn({
                      'scaleFade animate-scaleFade': loadIn,
                    })}
                    style={{
                      animationDelay: `${index / 50 + 0.04}s`,
                      position: 'relative',
                    }}
                  >
                    <span
                      className={`pointer-events-none absolute left-1/2 top-1/2 z-50 -translate-x-1/2  -translate-y-1/2 justify-center text-shark-100 opacity-50 dark:text-shark-950 ${isTileActive ? 'hidden' : ''}`}
                    >
                      {day}
                    </span>
                    <div
                      className={cn(
                        'h-8 w-8 rounded-lg bg-shark-700/15 transition-all delay-100 duration-300 dark:bg-white-300/15 min-[400px]:h-10 min-[400px]:w-full min-[400px]:rounded-[10px]',
                        {
                          'invisible opacity-0 delay-0 duration-0': takeover,
                        },
                      )}
                    />
                  </div>
                )
              })
            : null}
        </div>
      </section>
    </section>
  )
}

export default Calendar
