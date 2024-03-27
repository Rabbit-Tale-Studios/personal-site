import { SolidLogoText } from 'icons/Icons'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

const Footer = () => {
  const [date, setDate] = useState('string' || undefined)

  useEffect(() => {
    setDate(moment().format('dddd, MMMM D'))
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  return (
    <footer
      className="flex w-full items-center justify-center px-6 pb-12 pt-40 text-shark-500 dark:text-white-300 sm:px-10"
      ref={ref}
    >
      <div
        className={cn(
          'flex w-full max-w-lg animate-fade flex-col items-center justify-center',
          {
            'animate-fade': inView && date !== undefined,
          },
        )}
      >
        <SolidLogoText
          size={112}
          className="mt-10 text-shark-950 dark:text-white-50"
        />
        <p>{date}</p>
      </div>
    </footer>
  )
}

export default Footer
