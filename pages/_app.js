import '../styles/globals.scss';
import Layout from '../components/layout';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content='width=widthDevice initial-scale=1.0'/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp;
