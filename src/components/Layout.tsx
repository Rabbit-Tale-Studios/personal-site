import { useEffect, useState } from 'react'

import FontProvider from 'components/FontProvider'
import Footer from 'components/Footer'
import MetaTags from 'components/MetaTags'
import Nav from 'components/Nav'
import { ThemeProvider, useTheme } from 'next-themes'
import CursorComponent from './Cursor'
import BackToTop from './BackToTop'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import ThemeSwitchBubble from './ThemeSwitchBubble'
import React from 'react'

export const BubbleContext = React.createContext({
  showBubble: false,
  toggleBubble: () => {},
})

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

const Layout = (props: {
  children?: React.ReactNode
  metaTagsProps?: React.ComponentProps<typeof MetaTags>
}) => {
  const [showBubble, setShowBubble] = useState(false)

  return (
    <BubbleContext.Provider
      value={{ showBubble, toggleBubble: () => setShowBubble(!showBubble) }}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        <FontProvider>
          <MetaTags {...(props.metaTagsProps ?? {})} />
          <ThemeWatcher />
          <Nav />
          <main className="flex w-full flex-col items-center justify-center px-4 sm:px-10">
            {props.children}
          </main>
          <Footer />
          <BackToTop />
          <CursorComponent children={undefined} />
          {showBubble && <ThemeSwitchBubble />}
          <SpeedInsights />
          <Analytics />
        </FontProvider>
      </ThemeProvider>
    </BubbleContext.Provider>
  )
}

export default Layout
