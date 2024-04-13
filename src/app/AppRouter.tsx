import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { LayoutAntd } from './LayoutAntd';
import { Error404 } from '../pages/Error404/Error404';
import { Home } from '../pages/Home/Home';
import { Diagrams } from '../pages/Diagrams/Diagrams';
import { Clients } from '../pages/Clients/Clients';
import { AddChangeClient } from '../pages/AddChangeClient/AddChangeClient';
import { AddChangeDiagram } from '../pages/AddChangeDiagram/AddChangeDiagram';

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <Route path="" element={<LayoutAntd />} errorElement={<Error404 />}>
      <Route index element={<Home />} />

      <Route path="/diagrams" element={<Diagrams />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/changeClient" element={<AddChangeClient />} />
      <Route path="/changeDiagram" element={<AddChangeDiagram />} />

      <Route path="*" element={<Error404 />} />
    </Route>
  );

  const router = createBrowserRouter(routers);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
