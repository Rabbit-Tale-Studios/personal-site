import Button from 'components/Button'
import useClickOutside from 'hooks/useClickOutside'
import { OutlineClearNight } from 'icons/Icons'
import { useTheme } from 'next-themes'
import Link, { LinkProps } from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { cn } from 'utils/tw'
import gsap from 'gsap'

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
            'text-shark-500 sm:hover:bg-shark-50 sm:hover:text-shark-950 dark:text-shark-300 dark:sm:hover:bg-shark-900 dark:hover:text-shark-50 block w-full rounded-xl px-4 py-2 text-start font-medium transition-colors'
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
          'text-shark-500 sm:hover:bg-shark-50 sm:hover:text-shark-950 dark:text-shark-300 dark:sm:hover:bg-shark-900 dark:hover:text-shark-50 block w-full rounded-xl px-4 py-2 text-start font-medium transition-colors'
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
          Kris German
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
                'bg-white-50 dark:bg-shark-950 invisible absolute right-0 top-14 block w-36 min-w-max origin-top-right scale-75 rounded-2xl p-1 opacity-0 duration-150 ease-in-out',
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
                'bg-white-50 dark:bg-shark-950 invisible absolute right-0 top-14 block w-36 min-w-max origin-top-right scale-75 rounded-2xl p-1 opacity-0 duration-150 ease-in-out',
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
