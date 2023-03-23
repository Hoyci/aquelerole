import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      gray: {
        100: string;
        300: string;
        500: string;
      };
    };
  }
}

const defaultTheme: DefaultTheme = {
  colors: {
    text: '#0f172a',
    background: '#FFF',
    gray: {
      100: '#F3F4F6',
      300: '#D1D5DB',
      500: '#6B7280',
    },
  },
};

export default defaultTheme;
