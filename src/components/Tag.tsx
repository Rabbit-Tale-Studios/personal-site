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
        'reveal bg-white-50 dark:bg-shark-950 text-shark-500 sticky top-5 z-10 mx-auto rounded-full px-3 py-1 text-xs first-of-type:mt-10 dark:text-zinc-300',
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
