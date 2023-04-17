import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from './navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='overflow-x-hidden'>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
