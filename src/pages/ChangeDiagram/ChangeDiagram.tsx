import { Link, useParams } from 'react-router-dom';
import { BreadCrumbs } from '../../shared/ui';
import { useStores } from '../../shared/hooks/useStores';
import { FormDiagram } from '../../entities/diagrams';

export function ChangeDiagram() {
  const {
    diagrams: { diagrams, pushNewDiagramAction },
  } = useStores();
  const { key } = useParams();

  const changedDiagram = diagrams.find((item) => item.key === key);

  return (
    <div>
      <BreadCrumbs
        names={[<Link to="/diagrams">Диаграммы</Link>, 'Изменение диаграммы']}
      />

      <FormDiagram
        diagram={changedDiagram}
        pushNewDiagramAction={pushNewDiagramAction}
      />
    </div>
  );
}
