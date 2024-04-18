import React, { useEffect } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { AppProps } from 'next/app'
import 'styles/globals.css'
import twemoji from 'twemoji'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    twemoji.parse(document.body, {
      base: 'https://abs-0.twimg.com/emoji/v2/',
      folder: 'svg',
      ext: '.svg',
    })
  }, [])

  return (
    <React.Fragment>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ''} />
    </React.Fragment>
  )
}

export default App
