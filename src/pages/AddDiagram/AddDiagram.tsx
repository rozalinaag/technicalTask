import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../shared/ui';
import { FormDiagram } from '../../entities/diagrams';
import { useStores } from '../../shared/hooks/useStores';

export function AddDiagram() {
  const {
    diagrams: { pushNewDiagramAction },
  } = useStores();

  return (
    <div>
      <BreadCrumbs
        names={[<Link to="/diagrams">Диаграммы</Link>, 'Создание диаграммы']}
      />

      <FormDiagram pushNewDiagramAction={pushNewDiagramAction} />
    </div>
  );
}
