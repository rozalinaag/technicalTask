import {
  createHashRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { LayoutAntd } from './LayoutAntd';

import { Error404 } from '../pages/Error404/Error404';
import { Home } from '../pages/Home/Home';

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <Route
      path="/"
      element={<LayoutAntd />}
      handle={{ crumb: <Link to="/">Home</Link> }}
      errorElement={<Error404 />}
    >
      <Route index element={<Home />} />
    </Route>
  );

  const router = createHashRouter(routers, {});

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
