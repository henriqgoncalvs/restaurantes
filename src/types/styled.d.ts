import { Colors, Font, Rounded } from '@/styles/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    rounded: Rounded;
    font: Font;
  }
}
