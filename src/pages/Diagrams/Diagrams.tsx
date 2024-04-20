import { Link, useNavigate } from 'react-router-dom';
import { BreadCrumbs } from '../../shared/ui';
import css from './Diagrams.module.css';
import { Table } from 'antd';
import { useStores } from '../../shared/hooks/useStores';
import { Key, useEffect, useState } from 'react';
import { DeleteDiagrams } from './DeleteDiagrams/DeleteDiagrams';
import { columns } from './colums';

export function Diagrams() {
  const navigate = useNavigate();
  const {
    clients: { clients },
  } = useStores();
  const [selected, setSelected] = useState<Key[]>([]);

  useEffect(() => {
    setSelected([]);
  }, [clients]);

  const onChangeTable = (selectedRowKeys: React.Key[]) => {
    console.log('fpfpf');
    setSelected(selectedRowKeys);
  };

  return (
    <div>
      <BreadCrumbs names={['Диаграммы']} />

      <div className={css.wrapper}>
        <DeleteDiagrams selected={selected} />

        <Link to="addClient" className="button">
          Добавить клиента
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
              navigate(`changeClient/${record.key}`);
            },
          };
        }}
        columns={columns}
        dataSource={clients}
      />
    </div>
  );
}
