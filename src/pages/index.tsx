import { HomeView } from '@/views/home-view';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Restaurantes</title>
      </Head>
      <HomeView />
    </>
  );
}
