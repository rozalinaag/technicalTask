import { Link, useNavigate } from 'react-router-dom';
import { BreadCrumbs } from '../../shared/ui';
import css from './Diagrams.module.css';
import { Table } from 'antd';
import { useStores } from '../../shared/hooks/useStores';
import { Key, useEffect, useState } from 'react';
import { DeleteDiagrams } from './DeleteDiagrams/DeleteDiagrams';
import { columns } from './colums';
import { observer } from 'mobx-react-lite';

export const Diagrams = observer(() => {
  const navigate = useNavigate();
  const {
    diagrams: { diagrams },
  } = useStores();
  const [selected, setSelected] = useState<Key[]>([]);

  useEffect(() => {
    setSelected([]);
  }, [diagrams]);

  const onChangeTable = (selectedRowKeys: React.Key[]) => {
    setSelected(selectedRowKeys);
  };

  return (
    <div>
      <BreadCrumbs names={['Диаграммы']} />

      <div className={css.wrapper}>
        <DeleteDiagrams selected={selected} />

        <Link to="addDiagram" className="button">
          Добавить диаграмму
        </Link>
      </div>

      <Table
        className="table"
        rowSelection={{
          type: 'checkbox',
          onChange: onChangeTable,
        }}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`changeDiagram/${record.key}`);
            },
          };
        }}
        columns={columns}
        dataSource={diagrams}
      />
    </div>
  );
});
