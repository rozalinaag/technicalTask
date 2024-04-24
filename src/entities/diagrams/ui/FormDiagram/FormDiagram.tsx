import classNames from 'classnames';
import css from './FormDiagram.module.css';
import { Diagram } from '../../model/types';
import { useNavigate } from 'react-router-dom';
import { v4 as uuIdv4 } from 'uuid';
import { Input } from 'antd';
import { FlowDiagram } from '../FlowDiagram/FlowDiagram';
import { useEffect, useState } from 'react';
import { initialEdges, initialNodes } from '../..';

type Props = {
  diagram?: Diagram;
  pushNewDiagramAction: (newData: Diagram) => void;
};

export function FormDiagram({ diagram, pushNewDiagramAction }: Props) {
  const defaultName = 'Новая диаграмма';
  const navigate = useNavigate();
  const [nodesDiagram, setNodesDiagram] = useState(
    diagram?.nodes || initialNodes
  );
  const [edgesDiagram, setEdgesDiagram] = useState(
    diagram?.edges || initialEdges
  );
  const [name, setName] = useState(diagram?.name || defaultName);

  const submit = () => {
    pushNewDiagramAction({
      key: diagram?.key || uuIdv4(),
      name: name || 'Новая диаграмма',
      nodes: nodesDiagram,
      edges: edgesDiagram,
    });
    navigate('/diagrams');
  };

  return (
    <div className={css.wrapper}>
      <div className={css.form}>
        <div className={css.field}>
          <div className={classNames(css.subTitle, css.required)}>
            Название диаграммы:
          </div>
          <Input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>

        <div className={css.edit}>
          <FlowDiagram
            nodesDiagram={nodesDiagram}
            edgesDiagram={edgesDiagram}
            setNodesDiagram={(value) => setNodesDiagram(value)}
            setEdgesDiagram={(value) => setEdgesDiagram(value)}
          />
        </div>

        <div className={css.buttons}>
          <button className="button" onClick={() => submit()}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}
