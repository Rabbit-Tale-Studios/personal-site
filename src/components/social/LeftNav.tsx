import { Avatar, ScrollShadow, User } from '@nextui-org/react'
import Button from 'components/Button'
import {
  OutlineBell,
  OutlineBookmark,
  OutlineChat,
  OutlineCompass,
  OutlineMore,
  OutlineNestAlt,
  OutlineSettings,
  SolidBell,
  SolidBookmark,
  SolidChat,
  SolidChevronRight,
  SolidCompass,
  SolidNestAlt,
  SolidSettings,
  SolidUser,
} from 'icons/Icons'
import React, { use } from 'react'
import NavItem from './Nav/NavItem'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Badge } from 'components/Badges'

const LeftNav = () => {
  const router = useRouter()
  const pathname = router.pathname
  const isAuthenticated = true
  const NavLinkItem = [
    {
      active: pathname === '/social',
      href: '/',
      text: 'Nest',
      icon: 'home',
      notification: { type: 'dot', count: 0 },
      badge: { active: true, content: 'New Hoots' },
    },
    {
      active: pathname === '/explore',
      href: '/explore',
      text: 'Explore',
      icon: 'explore',
    },
    ...(isAuthenticated
      ? [
          {
            active: pathname === '/notifications',
            href: '/notifications',
            text: 'Notifications',
            icon: 'notifications',
          },
          {
            active: pathname === '/messages',
            href: '/messages',
            text: 'Chatter',
            icon: 'messages',
          },
          {
            active: pathname === '/bookmarks',
            href: '/bookmarks',
            text: 'Bookmarks',
            icon: 'bookmarks',
          },
        ]
      : []),
    {
      active: pathname === '/settings',
      href: '/settings',
      text: 'Settings',
      icon: 'settings',
      notification: { type: 'count', count: 3 },
      badge: { active: true, content: 'New' },
    },
  ]

  const activeIcons = {
    home: <SolidNestAlt size={24} />,
    explore: <SolidCompass size={24} />,
    notifications: <SolidBell size={24} />,
    messages: <SolidChat size={24} />,
    bookmarks: <SolidBookmark size={24} />,
    settings: <SolidSettings size={24} />,
  }

  const inactiveIcons = {
    home: <OutlineNestAlt size={24} />,
    explore: <OutlineCompass size={24} />,
    notifications: <OutlineBell size={24} />,
    messages: <OutlineChat size={24} />,
    bookmarks: <OutlineBookmark size={24} />,
    settings: <OutlineSettings size={24} />,
  }

  return (
    <nav className="sticky top-0 ml-5 hidden h-screen max-w-[8rem] flex-1 flex-col items-end justify-between py-[2.5rem] pl-10 pr-8 md:flex lg:ml-0 xl:ml-0 xl:max-w-[14rem] xl:items-start xl:px-0">
      <ScrollShadow className="flex h-full flex-col justify-between overflow-auto lg:w-full lg:px-0">
        <section className="rounded-2x flex w-full flex-col gap-6">
          <ul className="flex flex-col items-end space-y-2">
            {NavLinkItem.map(
              ({ active, href, text, icon, notification, badge }, i) => (
                //  <Button type={'secondary'} className="w-full justify-start">
                //    {text}
                //  </Button>
                <NavItem
                  key={i}
                  badge={typeof badge === 'object' ? badge : undefined}
                  active={active}
                  link={href}
                  //onClick={onClick}
                >
                  {icon &&
                    (active
                      ? activeIcons[icon as keyof typeof activeIcons]
                      : inactiveIcons[icon as keyof typeof activeIcons])}
                  <span className="hidden xl:inline">{text}</span>
                  {/* {icon &&
                    (active
                      ? activeIcons[icon as keyof typeof activeIcons]
                      : inactiveIcons[icon as keyof typeof activeIcons])} */}
                  {/* <span
                    className={`hidden flex-none text-lg xl:inline-flex
								${active ? 'font-bold' : 'font-medium'}
							`}
                  >
                    {text}
                  </span> */}
                </NavItem>
              ),
            )}
          </ul>
          <Button
            type={'accent'}
            className="h-12 max-xl:self-center max-xl:p-3 xl:w-full"
          >
            <span className="hidden xl:inline">Hoot</span>
            <SolidChevronRight className="hidden max-xl:inline" size={24} />
          </Button>
          {/* <Button
            size={windowWidth ? 'lg-icon' : 'lg'}
            className="w-full"
            disabled
          >
            {windowWidth !== null && windowWidth < 1366 ? (
              <OutlineEdit size={24} />
            ) : (
              'Hoot'
            )}
          </Button> */}
        </section>
        <section className="flex overflow-hidden rounded-2xl bg-shark-950/5 p-3">
          {/* <div className="flex space-x-4">
            <Avatar
              className="!size-12 ring-1 ring-shark-950/30"
              showFallback
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              fallback={<SolidUser size={24} />}
            />
            <div>
              <h6>Hasiradoo</h6>
              <Link href="https://twitter.com/jrgarciadev">@Hasiradoo</Link>
            </div>
          </div> */}
          <User
            classNames={{
              base: 'flex-1 justify-start',
              wrapper: 'max-xl:hidden',
              name: 'text-sm font-bold',
              description: 'text-sm',
            }}
            name="Hasira"
            description={
              <Link href="https://twitter.com/hasiradoo">@Hasiradoo</Link>
            }
            avatarProps={{
              name: 'Junior Garcia',
              src: 'https://pbs.twimg.com/profile_images/1777614638261080064/H9iQD24q_400x400.jpg',
              //className: '!size-12',
              showFallback: true,
              fallback: <SolidNestAlt size={24} />,
            }}
          />
          <Button type={'icon'}>
            <OutlineMore size={24} />
          </Button>
        </section>
      </ScrollShadow>
    </nav>
  )
}

export default LeftNav
