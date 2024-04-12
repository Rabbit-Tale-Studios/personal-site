// In your Modal.tsx
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  OutlineChevronLeft,
  OutlineChevronRight,
  OutlineClose,
} from 'icons/Icons'
import { cn } from 'utils/tw'

const Modal = (props: {
  children?: React.ReactNode
  images: string[]
  open: boolean
  setOpen: (arg: boolean) => void
}) => {
  const { images, open, setOpen } = props
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && menuRef.current === event.target) {
        setOpen(false)
        setCurrentImageIndex(0)
      }
    }

    if (open) {
      document.body.style.overscrollBehavior = 'none'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overscrollBehavior = 'auto'
      document.body.style.overflow = 'auto'
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [open])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrev = () => {
    setCurrentImageIndex((oldIndex) =>
      oldIndex > 0 ? oldIndex - 1 : images.length - 1,
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((oldIndex) =>
      oldIndex < images.length - 1 ? oldIndex + 1 : 0,
    )
  }

  return (
    props.open && (
      <section
        className={cn(
          'fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-shark-950/80 backdrop-blur-sm',
          {
            'animate-fadeSm': props.open,
          },
        )}
        ref={menuRef}
      >
        <article
          className={cn(
            'group relative mx-2 my-2 max-h-screen w-full max-w-2xl overflow-hidden rounded-3xl bg-white-50 text-shark-800 shadow-xl shadow-shark-950/30 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-3xl after:border-[6px] after:border-white-50/50',
            {
              'animate-modalReveal': props.open,
            },
          )}
        >
          <button
            className="absolute right-4 top-4 z-20 rounded-full bg-shark-950/30 p-2 text-white-50 backdrop-blur-md transition-all duration-300 ease-bounce active:-rotate-12 active:scale-90 sm:-rotate-12 sm:scale-75 sm:opacity-0 sm:hover:!scale-90 sm:active:!-rotate-12 sm:active:!scale-75 sm:group-hover:rotate-0 sm:group-hover:scale-100 sm:group-hover:opacity-100"
            onClick={() => {
              setTimeout(() => {
                setOpen(false)
              }, 1)
            }}
          >
            <OutlineClose size={24} />
          </button>

          <button
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-shark-950/30 p-2 text-white-50 backdrop-blur-md transition-all duration-300 ease-bounce active:-rotate-12 active:scale-90 sm:-rotate-12 sm:scale-75 sm:opacity-0 sm:hover:!scale-90 sm:active:!-rotate-12 sm:active:!scale-75 sm:group-hover:rotate-0 sm:group-hover:scale-100 sm:group-hover:opacity-100"
            onClick={handlePrev}
          >
            <OutlineChevronLeft size={24} />
          </button>

          <button
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-shark-950/30 p-2 text-white-50 backdrop-blur-md transition-all duration-300 ease-bounce active:-rotate-12 active:scale-90 sm:-rotate-12 sm:scale-75 sm:opacity-0 sm:hover:!scale-90 sm:active:!-rotate-12 sm:active:!scale-75 sm:group-hover:rotate-0 sm:group-hover:scale-100 sm:group-hover:opacity-100"
            onClick={handleNext}
          >
            <OutlineChevronRight size={24} />
          </button>

          <Image
            src={images[currentImageIndex]}
            alt="Post image"
            width={1920}
            height={1080}
          />
        </article>
      </section>
    )
  )
}

export default Modal
