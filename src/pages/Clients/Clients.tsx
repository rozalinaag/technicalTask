import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { BreadCrumbs } from '../../shared/ui';
import { useStores } from '../../shared/hooks/useStores';
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import css from './Clients.module.css';
import { columns } from './colums';
import { Key } from 'antd/es/table/interface';
import { DeleteClients } from './DeleteClients/DeleteClients';

export const Clients = observer(() => {
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
      <BreadCrumbs names={['Клиенты']} />

      <div className={css.wrapper}>
        <DeleteClients selected={selected} />

        <Link to="addClient" className="button">
          Добавить клиента
        </Link>
      </div>

      <Table
        className={css.table}
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
});
