import Button from 'components/Button'
import useClickOutside from 'hooks/useClickOutside'
import { OutlineClearNight, SolidLogoText } from 'icons/Icons'
import { useTheme } from 'next-themes'
import Link, { LinkProps } from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { cn } from 'utils/tw'
import gsap from 'gsap'
import Splt from 'react-spltjs'

const myArray = [['text-blue-500'], ['text-indigo-500'], ['text-violet-500']]

type MenuItemProps = {
  aria?: string
  external?: boolean
  href?: string
  text: string
  onClick?: () => void
}

const MenuItem = ({ aria, external, href, text, onClick }: MenuItemProps) => {
  if (onClick) {
    return (
      <li>
        <button
          className={
            'block w-full rounded-xl px-4 py-2 text-start font-medium text-shark-500 transition-colors dark:text-shark-300 dark:hover:text-shark-50 sm:hover:bg-shark-50 sm:hover:text-shark-950 dark:sm:hover:bg-shark-900'
          }
          onClick={onClick}
          aria-label={aria}
        >
          {text}
        </button>
      </li>
    )
  }

  return (
    <li>
      <Link
        href={href || '#'}
        className={
          'block w-full rounded-xl px-4 py-2 text-start font-medium text-shark-500 transition-colors dark:text-shark-300 dark:hover:text-shark-50 sm:hover:bg-shark-50 sm:hover:text-shark-950 dark:sm:hover:bg-shark-900'
        }
        rel={external ? 'noopener noreferrer' : undefined}
        target={!external ? '_self' : '_blank'}
      >
        {text}
      </Link>
    </li>
  )
}

const Nav = () => {
  let [openContact, setOpenContact] = useState(false)
  let [openTheme, setOpenTheme] = useState(false)

  const menuContactRef = useClickOutside(() => {
    setOpenContact(false)
  })
  const menuThemeRef = useClickOutside(() => {
    setOpenTheme(false)
  })

  const { setTheme } = useTheme()

  // const SplitLink = () => {
  //   const text = 'Kris German'
  //   const characters = text.split('')
  //   const refs = characters.map(() => useRef<HTMLElement>(null))

  //   useEffect(() => {
  //     refs.forEach((ref) => {
  //       if (ref.current) {
  //         ref.current.addEventListener('mouseenter', () => {
  //           gsap.to(ref.current, {
  //             y: -6,
  //             duration: 0.3,
  //             //ease: 'bounce.out',
  //             //ease: 'sine.out',
  //           })
  //         })

  //         ref.current.addEventListener('mouseleave', () => {
  //           gsap.to(ref.current, {
  //             y: 0,
  //             duration: 0.3,
  //             //ease: 'sine.in',
  //           })
  //         })
  //       }
  //     })
  //   }, [refs])

  //   return (
  //     <Link className="text-xl" href="/">
  //       {characters.map((char, index) => (
  //         <span
  //           className="bouncy-little inline-block"
  //           ref={refs[index]}
  //           key={index}
  //         >
  //           {char === ' ' ? '\u00A0' : char}
  //         </span>
  //       ))}
  //     </Link>
  //   )
  // }

  return (
    <header className="relative z-20 mt-6 flex w-full items-center justify-center px-4 sm:mt-16 sm:px-10">
      <nav className="flex w-full max-w-lg items-center justify-between">
        {/* <SplitLink /> */}
        <Link className="text-xl" href={'/'}>
          <Splt
            //array={myArray}
            text="Kris German"
            className="inline-block animate-revealSm"
            speed={0.05}
            offset={0.1}
            ease="bounce"
          />
          {/* <SolidLogoText
            size={96}
            className="text-shark-950 dark:text-white-50"
          /> */}
        </Link>
        <nav className="flex space-x-2">
          <Button text="Blog" type="secondary" as="a" href={'/blog'} />
          <div className="relative z-50" ref={menuContactRef}>
            <Button
              onClick={() => {
                setOpenContact(!openContact)
              }}
              state={openContact}
              text="Contact"
              type="secondary"
            />
            <ul
              className={cn(
                'invisible absolute right-0 top-14 block w-36 min-w-max origin-top-right scale-75 rounded-2xl bg-white-50 p-1 opacity-0 duration-150 ease-in-out dark:bg-shark-950',
                {
                  'visible scale-100 opacity-100': openContact,
                },
              )}
              onClick={() => setOpenContact(!openContact)}
            >
              <MenuItem text="Twitter" href="https://twitter.com/Hasiradoo" />
              <MenuItem
                text="Bsky"
                href="https://bsky.app/profile/starowl.social"
              />
              <MenuItem text="Telegram" href="https://t.me/hasiradoo" />
            </ul>
          </div>
          <div className={'relative z-50'} ref={menuThemeRef}>
            <Button
              dataHover
              onClick={() => {
                setOpenTheme(!openTheme)
                setOpenContact(false)
              }}
              state={openTheme}
              type={'icon'}
              as={'button'}
            >
              <OutlineClearNight size={24} />
            </Button>
            <ul
              className={cn(
                'invisible absolute right-0 top-14 block w-36 min-w-max origin-top-right scale-75 rounded-2xl bg-white-50 p-1 opacity-0 duration-150 ease-in-out dark:bg-shark-950',
                {
                  'visible scale-100 opacity-100': openTheme,
                },
              )}
              onClick={() => setOpenTheme(!openTheme)}
            >
              <MenuItem
                text={'Light'}
                onClick={() => {
                  setTheme('light')
                }}
                href={'#'}
              />
              <MenuItem
                text={'Dark (WIP)'}
                onClick={() => {
                  setTheme('dark')
                }}
                href={'#'}
              />
              <MenuItem
                text={'System'}
                onClick={() => setTheme('system')}
                href={'#'}
              />
            </ul>
          </div>
        </nav>
      </nav>
    </header>
  )
}

export default Nav
