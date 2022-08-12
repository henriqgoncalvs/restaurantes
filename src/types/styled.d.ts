import { Colors, Font, Rounded, Breakpoints } from '@/styles/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    rounded: Rounded;
    font: Font;
    breakpoints: Breakpoints;
  }
}
