import '@/styles/globals.css'
import Layout from '../components/layout/layout';
import Head from 'next/head';
import { NotificationContextProvider } from '@/store/notification-context';

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>NextJS Test</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <meta name="description" content="A test project made for learning NextJS" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
