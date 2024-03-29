import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { AppProps } from 'next/app'
import 'styles/globals.css'
import 'overlayscrollbars/overlayscrollbars.css'
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin,
  InitializationTarget,
} from 'overlayscrollbars'

if (typeof document !== 'undefined') {
  document
    .querySelectorAll('[data-overlayscrollbars-initialize]')
    .forEach((elm) => {
      OverlayScrollbars(elm as InitializationTarget, {})
    })
}

OverlayScrollbars.plugin([SizeObserverPlugin, ClickScrollPlugin])

const App = ({ Component, pageProps }: AppProps) => (
  <React.Fragment>
    <Component {...pageProps} />
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ''} />
  </React.Fragment>
)

export default App
