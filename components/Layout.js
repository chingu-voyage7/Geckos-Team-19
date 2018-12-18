import Head from 'next/head'
import Navbar from './navbar'

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet='utf-8' />
    </Head>

    <header>
      <Navbar />
    </header>

    <h1>{ title }</h1>
    { children }

    <footer>Footer</footer>
  </div>
)