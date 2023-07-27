import type { AppProps } from 'next/app'

import { GlobalStyles } from '~/assets/styles'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </>
  )
}

export default MyApp
