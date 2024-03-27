import { OutlineArrowLeft } from 'icons/Icons'
import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'

const BackButton = () => {
  return (
    <div className="mb-4 animate-fade">
      <Link
        aria-description="return to blog"
        className="group flex w-max items-center gap-1.5 text-shark-500 no-underline duration-300 ease-bounce hover:translate-x-0 dark:text-white-300 lg:-translate-x-5"
        href={'/blog'}
      >
        <OutlineArrowLeft
          size={16}
          className="duration-300 ease-bounce lg:-translate-x-4 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100"
        />
        Back to blog
      </Link>
    </div>
  )
}

export default BackButton
