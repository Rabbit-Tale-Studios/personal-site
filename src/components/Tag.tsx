import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/tw'

const Tag = (props: { year: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div
      className={cn(
        'reveal sticky top-5 z-10 mx-auto rounded-full bg-shark-50 px-3 py-1 text-xs font-semibold text-shark-800 first-of-type:mt-10 dark:bg-[#2b2b2b] dark:text-shark-300',
        {
          'animate-revealSm': inView,
        },
      )}
      ref={ref}
    >
      {props.year}
    </div>
  )
}

export default Tag
