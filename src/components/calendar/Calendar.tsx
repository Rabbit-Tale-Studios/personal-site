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
import { ThemeProvider } from 'next-themes'

const Calendar = (props: { data: MonthDataType[] }) => {
  const [calBgColor, setCalBgColor] = useState('none')
  const [takeover, setTakeover] = useState(false)
  const [clip, setClip] = useState(false)
  const [loadIn, setLoadIn] = useState(true)
  const [modal, setModal] = useState(false)

  const [modalImage, setModalImage] = useState<string | StaticImageData>(
    placeholder,
  )

  const currentYear = moment().year(props.data[0].year)
  const currentMonth = moment(currentYear).month(props.data[0].month)
  const monthStartDay = moment(currentMonth).startOf('month').isoWeekday()
  const blankTiles = Array.from({ length: monthStartDay - 1 })

  const monthDays = moment().month(props.data[0].month).daysInMonth()
  const tiles = Array.from({ length: monthDays })

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
      'bg-teal-400 dark:bg-teal-600': arg === 'Life',
      'bg-sky-400 dark:bg-sky-600': arg === 'Work',
      'bg-blue-400 dark:bg-blue-600': arg === 'Blog',
      'bg-violet-400 dark:bg-violet-600': arg === 'Side Project',
      'bg-fuchsia-400 dark:bg-fuchsia-600': arg === 'Feature',
      'bg-shark-950 dark:bg-shark-700': arg === undefined,
    })
  }

  return (
    <section ref={ref} className="w-full">
      <Modal open={modal} setOpen={setModal}>
        <Image src={modalImage} alt="image" quality={100} />
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
          {blankTiles.map((_, index) => (
            <div
              className={cn(
                'h-8 w-full rounded-lg bg-shark-700/15 transition-all duration-300 dark:bg-white-300/15 min-[400px]:h-10',
                {
                  'invisible opacity-0 delay-0 duration-0': takeover,
                },
              )}
              key={index}
            />
          ))}

          {/* Map days of current month */}
          {tiles.map((_, index) => {
            const dayData = props.data[0].days.find(
              (data) => data.day === index + 1,
            )
            const [active, setActive] = useState(false)

            useEffect(() => {
              if (takeover === false) {
                setActive(false)
              }
            }, [takeover])

            return (
              <div
                key={index}
                className={cn({
                  'scaleFade animate-scaleFade': loadIn,
                })}
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
                        className="z-50 block w-max rounded-full bg-white-50 px-3 py-1.5 font-bold tracking-wide text-shark-950 shadow-md transition-transform active:scale-90 dark:bg-shark-950 dark:text-white-50 dark:ring-1 dark:ring-shark-800 sm:hover:scale-90 sm:active:scale-75"
                        onClick={() => {
                          setTakeover(false)
                          setActive(false)
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
                              <TextBlock data={contentItem.text} />
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
                        setTimeout(() => {
                          setCalBgColor(dayData.type)
                        }, 400)
                      }}
                      className={cn(
                        'block h-8 w-full rounded-[10px] transition-all duration-150 hover:scale-90 active:scale-75 min-[400px]:h-10',
                        bgColors(dayData.type),
                        {
                          'scale-[20] cursor-default duration-300 hover:scale-[20] active:scale-[20]':
                            active && takeover,
                        },
                      )}
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'h-8 w-full rounded-[10px] bg-shark-900/50 transition-all delay-100 duration-300 dark:bg-white-300/50 min-[400px]:h-10',
                      {
                        'invisible opacity-0 delay-0 duration-0': takeover,
                      },
                    )}
                  />
                )}
              </div>
            )
          })}
        </div>
      </section>
    </section>
  )
}

export default Calendar
