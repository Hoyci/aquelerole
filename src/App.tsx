import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Home from './pages/Home';
import Main from './pages/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:city',
    element: <Main />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {/* <Home /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
