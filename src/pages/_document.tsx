/* eslint-disable @next/next/no-title-in-document-head */
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { theme } from '@/styles/theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>Get In - Descubra novos restaurantes, entre na fila e faça reservas online</title>
          <meta
            name="description"
            content="No Get In você encontra as melhores 
          seleções de restaurantes e bares por todo o Brasil 
          e pode aproveitar para fazer sua reserva online ou 
          entrar na fila de um estabelecimento sem sair de casa. Fácil, prático e super conveniente!"
          />
          <meta name="theme-color" content={theme.colors.primary} />
          <meta name="viewport" content="initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
