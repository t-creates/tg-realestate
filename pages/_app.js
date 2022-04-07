import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { Chakra, ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
