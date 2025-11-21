import '../styles/globals.css'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Script do Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8672859609478046"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* MENU SUPERIOR */}
      <Header />

      {/* CONTEÚDO PRINCIPAL */}
      <Component {...pageProps} />

      {/* RODAPÉ */}
      <Footer />
    </>
  )
}