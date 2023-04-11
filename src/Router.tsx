import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Root from './pages/Root';
import Event from './pages/Event';
import ErrorPage from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/:city" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="" element={<Main />} />
        <Route path=":eventType" element={<Event />} />
      </Route>
    </>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
