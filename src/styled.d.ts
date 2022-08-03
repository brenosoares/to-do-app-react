import 'styled-components';

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: IPalette
      secondary: IPalette
      danger: IPalette
      warning: IPalette
   },
   fontColor: {
    dark: string,
    light: string
  }
  }
}