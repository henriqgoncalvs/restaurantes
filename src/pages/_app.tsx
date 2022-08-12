import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';

import GlobalStyle from '@/styles/global-styles';
import { theme } from '@/styles/theme';

import 'antd/dist/antd.css';

const { Footer } = Layout;

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
          <Footer>
            Feito por <a href="https://github.com/hnqg">@hqng</a>
          </Footer>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
