import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { BreadCrumbs } from '../../shared/ui';
import { useStores } from '../../shared/hooks/useStores';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';
import css from './Clients.module.css';
import { columns } from './colums';
import { Key } from 'antd/es/table/interface';

export const Clients = observer(() => {
  const {
    clients: { clients, deleteClientsAction },
  } = useStores();
  const [countSelected, setCountSelected] = useState<Key[]>([]);

  const onChangeTable = (selectedRowKeys: React.Key[]) => {
    setCountSelected(selectedRowKeys);
  };

  const handleDeleteClients = () => {
    deleteClientsAction(countSelected);
  };

  return (
    <div>
      <BreadCrumbs names={['Клиенты']} />

      <div className={css.wrapper}>
        <div className={css.deletedBlock}>
          <div>
            Выбранных элементов:{' '}
            <span className={css.count}>{countSelected.length}</span>
          </div>

          <Button
            type="primary"
            danger
            disabled={!countSelected.length}
            onClick={handleDeleteClients}
          >
            Удалить
          </Button>
        </div>

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
        columns={columns}
        dataSource={clients}
      />
    </div>
  );
});
