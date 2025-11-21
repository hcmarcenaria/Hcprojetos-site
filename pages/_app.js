import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Código do Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8672859609478046"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <Component {...pageProps} />
    </>
  )
}