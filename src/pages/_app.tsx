import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MediaQueryProvider } from '@/contexts/MediaQueryContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MediaQueryProvider>
      <Component {...pageProps} />
    </MediaQueryProvider>
  )
}

export default MyApp
