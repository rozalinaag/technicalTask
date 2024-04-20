import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../shared/ui';
import { FormDiagram } from '../../entities/diagrams';

export function AddDiagram() {
  return (
    <div>
      <BreadCrumbs
        names={[<Link to="/diagrams">Диаграммы</Link>, 'Создание диаграммы']}
      />

      <FormDiagram />
    </div>
  );
}
