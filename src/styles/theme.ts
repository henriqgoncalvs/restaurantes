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
      1: 1.9,
      2: 1.5,
      3: 1.3,
      4: 1,
      5: 0.8,
      6: 0.6,
    },
    lead: '1.5rem',
    p: '1.1rem',
    sm: '1rem',
  },
};

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const theme: DefaultTheme = {
  colors,
  rounded,
  font,
  breakpoints,
};

export type Colors = typeof colors;
export type Rounded = typeof rounded;
export type Font = typeof font;
export type Breakpoints = typeof breakpoints;
