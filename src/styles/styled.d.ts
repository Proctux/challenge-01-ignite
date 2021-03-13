import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string,
    secondary: string,
    terciary: string,
    background: string,
    shapes: string,
    text_title: string,
    text: string,
    text_light: string,
    body: string;
  }
}