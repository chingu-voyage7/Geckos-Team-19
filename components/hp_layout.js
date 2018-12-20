import Head from 'next/head';
import Navbar from './blocks/navbar';
import Footer from './blocks/footer';
import Header from './blocks/header';

import styles from '../styles/Layouts/pageLayout.scss';

export default function HP_layout() {
  return (
    <div className="pageWrapper">
      <Head>
        <title>{ process.env.PROJECT_NAME }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet='utf-8' />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </Head>

      <Navbar />
      <Header />

      <div className="content">
        <span>Intro</span>
        <span>Roadmap</span>
        <span>Register</span>
      </div>

      <Footer />
    </div>
  )
}