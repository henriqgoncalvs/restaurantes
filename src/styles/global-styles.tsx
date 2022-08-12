import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

body {
    font-family: 'Poppins', sans-serif;
    // Used for usability. Lets the browser shows the content first before the font is loaded.
    font-display: swap;
    // Use 1rem as 10px
    font-size: 62.5%;

    color: ${({ theme }) => theme.colors.darkdown};
    background-color: ${({ theme }) => theme.colors.white};
}

// h1 { font-size: 2.5rem; } ...
${({ theme }) =>
  Object.entries(theme.font.size.heading).map(
    ([level, size]) => `
    h${level} {
      font-size: ${size}rem;
      line-height: ${size};
      font-weight: bold;
    }
`,
  )}

p {
    font-size: ${({ theme }) => theme.font.size.p};
}
`;

export default GlobalStyle;
