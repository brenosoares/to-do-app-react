import  { DefaultTheme }  from "styled-components";

export const defaultTheme: DefaultTheme  = {
    palette: {
        primary: {
          main: '#3A77FF',
          contrastText: '#D8DFE0'
        },
        secondary: {
          main: '#23E5DB',
          contrastText: '#002F34'
        },
        danger: {
          main: '#FF5636',
          contrastText: '#D8DFE0'
        },
        warning: {
          main: '#FFCE32',
          contrastText: '#002F34'
        }
    },
    fontColor: {
      dark: '#002F34',
      light: '#F2F4F5'
    }
}