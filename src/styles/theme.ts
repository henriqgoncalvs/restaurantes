import { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#DD4F50',
  dark: '#666666',
  darkdown: '#333333',
  darkup: '#808080',
  white: '#FFFFFF',
  lightdown: '#aaaaaa',
  light: '#cccccc',
  lightup: '#aaaaaa',
  lightmedium: '#E6E6E6',
};

const rounded = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

const font = {
  // family: { heading: "Roboto" },
  size: {
    heading: {
      1: '3.2rem',
      2: '2.4rem',
      3: '2rem',
      4: '1.7rem',
      5: '1.5rem',
      6: '1.6rem',
    },
    lead: '1.7rem',
    p: '1.4rem',
    sm: '1.2rem',
  },
};

export const theme: DefaultTheme = {
  colors,
  rounded,
  font,
};

export type Colors = typeof colors;
export type Rounded = typeof rounded;
export type Font = typeof font;
