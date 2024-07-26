import Button from 'components/Button'
import useClickOutside from 'hooks/useClickOutside'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { cn } from 'utils/tw'
import Splt from 'react-spltjs'
//import { BubbleContext } from './Layout'

type MenuItemProps = {
	aria?: string
	external?: boolean
	href?: string
	text: string
	onClick?: () => void
}

export const MenuItem = ({
	aria,
	external,
	href,
	text,
	onClick,
}: MenuItemProps) => {
	if (onClick) {
		return (
			<li>
				<button
					type='button' // Add explicit type prop
					className={
						'block w-full rounded-xl px-4 py-2 text-start font-medium text-shark-500 transition-colors dark:text-shark-300 dark:hover:text-shark-50 sm:hover:bg-shark-950/5 sm:hover:text-shark-950 dark:sm:hover:bg-shark-50/5'
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
					'block w-full rounded-xl px-4 py-2 text-start font-medium text-shark-500 transition-colors dark:text-shark-300 dark:hover:text-shark-50 sm:hover:bg-shark-950/5 sm:hover:text-shark-950 dark:sm:hover:bg-shark-50/5'
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
	const [open, setOpen] = useState(false)
	// let [openTheme, setOpenTheme] = useState(false)
	// const { toggleBubble } = useContext(BubbleContext)

	const menuRef = useClickOutside(() => {
		setOpen(false)
	})
	// const menuThemeRef = useClickOutside(() => {
	//   setOpenTheme(false)
	// })

	// const { setTheme } = useTheme()

	return (
		<header className='relative z-20 mt-6 flex w-full items-center justify-center px-4 sm:mt-16 sm:px-10'>
			<nav className='flex w-full max-w-lg items-center justify-between'>
				<Link className='text-xl' href={'/'}>
					<Splt
						// array={myArray}
						text='Kris German'
						className='inline-block animate-revealSm'
						speed={0.05}
						offset={0.1}
						ease='bounce'
					/>
					{/* <SolidLogoText size={96} className="text-shark-950 dark:text-white-50" /> */}
				</Link>
				<nav className='flex space-x-2'>
					<Button text='Blog' variant='ghost' as='a' href={'/blog'} />
					<div
						className='relative z-50'
						ref={menuRef as React.RefObject<HTMLDivElement>}
					>
						<Button
							onClick={() => {
								setOpen(!open)
							}}
							onKeyUp={(e) => {
								if (e.key === 'Enter') setOpen(!open)
							}}
							state={open}
							text='Contact'
							variant='ghost'
						/>
						<ul
							className={cn(
								'invisible absolute right-0 top-14 block w-36 min-w-max origin-top-right scale-75 rounded-2xl bg-white-50 p-1 opacity-0 shadow-lg duration-150 ease-in-out dark:bg-[#2b2b2b]',
								{ 'visible scale-100 opacity-100': open }
							)}
							onClick={() => setOpen(!open)}
							onKeyUp={(e) => {
								if (e.key === 'Enter') setOpen(!open)
							}}
						>
							<MenuItem text='Twitter' href='https://twitter.com/Hasiradoo' />
							<MenuItem
								text='Bsky'
								href='https://bsky.app/profile/starowl.social'
							/>
							<MenuItem text='Telegram' href='https://t.me/hasiradoo' />
							<MenuItem
								text='Discord'
								href='https://discord.com/users/569975072417251378'
							/>
						</ul>
					</div>
					{/* 
        <div className={'relative z-50'} ref={menuThemeRef}>
          <Button
            aria="Change theme"
            dataHover
            onClick={() => { setOpenTheme(!openTheme); setOpenContact(false); }}
            onKeyUp={(e) => { if (e.key === 'Enter') { setOpenTheme(!openTheme); setOpenContact(false); } }}
            state={openTheme}
            variant={'icon'}
            as={'button'}
          >
            <OutlineClearNight size={24} />
          </Button>
          <ul
            className={cn(
              'invisible absolute right-0 top-14 block w-36 min-w-max origin-top-right scale-75 rounded-2xl bg-white-50 p-1 opacity-0 shadow-lg duration-150 ease-in-out dark:bg-[#2b2b2b]',
              { 'visible scale-100 opacity-100': openTheme }
            )}
            onClick={() => setOpenTheme(!openTheme)}
            onKeyUp={(e) => { if (e.key === 'Enter') setOpenTheme(!openTheme) }}
          >
            <MenuItem text={'Light'} onClick={() => { setTheme('light') }} href={'#'} />
            <MenuItem text={'Dark (WIP)'} onClick={() => { setTheme('dark') }} href={'#'} />
            <MenuItem text={'System'} onClick={() => setTheme('system')} href={'#'} />
          </ul>
        </div>
        */}
				</nav>
			</nav>
		</header>
	)
}

export default Nav
