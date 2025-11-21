import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Código do Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8678259064478046"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}