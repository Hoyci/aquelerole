import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      background: string;
    };
  }
}

const defaultTheme: DefaultTheme = {
  colors: {
    background: '#FFF',
  },
};

export default defaultTheme;
