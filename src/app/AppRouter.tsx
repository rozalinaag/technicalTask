import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { LayoutAntd } from './layout/LayoutAntd';
import { Error404 } from '../pages/Error404/Error404';
import { Home } from '../pages/Home/Home';
import { Diagrams } from '../pages/Diagrams/Diagrams';
import { Clients } from '../pages/Clients/Clients';
import { AddDiagram } from '../pages/AddDiagram/AddDiagram';
import { AddClient } from '../pages/AddClient/AddClient';
import { ChangeDiagram } from '../pages/ChangeDiagram/ChangeDiagram';
import { ChangeClient } from '../pages/ChangeClient/ChangeClient';

export const AppRouter = () => {
  const routers = createRoutesFromElements(
    <Route path="/" element={<LayoutAntd />} errorElement={<Error404 />}>
      <Route index element={<Home />} />

      <Route path="diagrams" element={<Diagrams />}>
        <Route path="addDiagram" element={<AddDiagram />} />
        <Route path="changeDiagram" element={<ChangeDiagram />} />
      </Route>

      <Route path="clients" element={<Clients />}>
        <Route path="changeClient" element={<ChangeClient />} />
        <Route path="addClient" element={<AddClient />} />
      </Route>

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
