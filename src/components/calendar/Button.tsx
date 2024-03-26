import { OutlineArrowRight } from 'icons/Icons'
import Link from 'next/link'
//FIXME: dark theme colors

const Button = (props: { data: any }) => {
  return (
    <li className="mx-2">
      <Link
        // className="bg-white-50 text-shark-950 sm:hover:bg-white-50 group flex w-full items-center justify-between rounded-[14px] px-4 py-1 text-base font-bold tracking-wide transition-[letter-spacing,transform] duration-200 ease-bounce sm:hover:tracking-widest sm:active:scale-x-95"
        className="bg-white-50 text-shark-950 sm:hover:bg-white-50 group flex w-full items-center justify-between rounded-2xl bg-white py-2 pl-6 pr-1 text-base font-bold tracking-wide transition-[letter-spacing,transform] duration-200 ease-bounce sm:hover:bg-white sm:hover:tracking-widest sm:active:scale-x-95"
        href={props.data.href || ''}
        aria-label={props.data.text}
        rel={props.data.external ? 'no-opener no-referrer' : ''}
        target={props.data.external ? '_blank' : '_self'}
      >
        {props.data.text}
        <div className="relative flex size-10 items-center justify-center overflow-hidden text-inherit">
          <OutlineArrowRight
            size={24}
            className="absolute -translate-x-8 transition-transform duration-300 ease-bounce group-active:-translate-x-8 sm:group-hover:translate-x-0"
          />
          <OutlineArrowRight
            size={24}
            className="transition-transform duration-300 ease-bounce group-active:translate-x-0 sm:group-hover:translate-x-8"
          />
        </div>
      </Link>
    </li>
  )
}

export default Button
