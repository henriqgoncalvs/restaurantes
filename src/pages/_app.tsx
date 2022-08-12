import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
import GlobalStyle from '@/styles/global-styles';
import { theme } from '@/styles/theme';

import 'antd/dist/antd.css';

const { Footer } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer>Feito por @hqng</Footer>
      </ThemeProvider>
    </>
  );
}
