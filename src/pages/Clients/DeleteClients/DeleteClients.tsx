import { Button, Modal } from 'antd';
import css from './DeleteClients.module.css';
import { useStores } from '../../../shared/hooks/useStores';
import { useEffect, useState } from 'react';

type Props = {
  selected: React.Key[];
};

export function DeleteClients({ selected }: Props) {
  const {
    clients: { deleteClientsAction },
  } = useStores();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteClients, setDeleteClients] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (deleteClients) {
      deleteClientsAction(selected);
      setDeleteClients(false);
    }
  }, [deleteClients]);

  return (
    <div className={css.wrapper}>
      <div className={css.deletedBlock}>
        <div>
          Выбранных элементов:{' '}
          <span className={css.count}>{selected.length}</span>
        </div>

        <Button
          type="primary"
          danger
          disabled={!selected.length}
          loading={deleteClients}
          onClick={() => setIsModalOpen(true)}
        >
          Удалить
        </Button>
      </div>

      <Modal
        title="Удаление клиентов"
        open={isModalOpen}
        cancelText={'Отмена'}
        okText={'Ок'}
        onOk={() => {
          setIsModalOpen(false);
          setDeleteClients(true);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        Вы уверены, что хотите удалить?
      </Modal>

      <Modal
        title="Успешно удалено!"
        open={isSuccessModalOpen}
        okText={'Ок'}
        onOk={() => {
          setIsSuccessModalOpen(false);
        }}
      >
        Успешно удалено!
      </Modal>
    </div>
  );
}
