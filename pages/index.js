import Layout from "../components/hp_layout";

import styles from '../styles/Base/resets.scss';

const Index = () => (
  <Layout title="Home">
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <p>Home page</p>
  </Layout>
);

export default Index;