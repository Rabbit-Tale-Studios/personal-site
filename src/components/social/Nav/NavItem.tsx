import { ReactNode } from 'react'

type Props = {
  active?: boolean
  link?: string
  children: ReactNode
  onClick?: () => void
  isDisabled?: boolean
  badge?: {
    active: boolean
    content: React.ReactNode
  }
}

import React from 'react'
//import { InfoBadge } from './Notification'
import { cn } from 'utils/tw'
import Link from 'next/link'
import Button from 'components/Button'

const NavItem = ({ active = false, link, children, onClick, badge }: Props) => {
  return (
    <Link
      onClick={onClick}
      className={
        'group flex w-1/5 flex-1 cursor-pointer items-center justify-center md:w-auto md:justify-center lg:w-full xl:justify-between'
      }
      href={link || '#'}
    >
      <li>
        <Button
          hasIcon
          //  rounded={'xl'}
          iconPosition={'left'}
          type={`${active ? 'primary' : 'ghost'}`}
          className={`h-12 max-xl:p-3 ${active ? 'group-hover:bg-shark-900' : 'group-hover:bg-shark-950/5'}`}
        >
          {children}
        </Button>
      </li>

      {/* {badge && badge.active && <InfoBadge children={badge.content} />} */}
    </Link>
  )
}

export default NavItem
