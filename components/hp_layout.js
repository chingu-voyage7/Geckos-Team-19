import Head from 'next/head';
import Navbar from './blocks/navbar';
import Footer from './blocks/footer';
import styles from '../styles/Layouts/pageLayout.scss';

export default ({ children, title }) => (
  <div className="pageWrapper">
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet='utf-8' />
    </Head>

    <style dangerouslySetInnerHTML={{ __html: styles }} />

    <div className="header">
      <Navbar />
    </div>

    <div className="content">
      <h1>{ title }</h1>
      { children }
    </div>

    <Footer />
  </div>
)