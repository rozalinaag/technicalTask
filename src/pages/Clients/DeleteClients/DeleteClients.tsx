import css from './DeleteClients.module.css';
import { useStores } from '../../../shared/hooks/useStores';
import { useEffect, useState } from 'react';
import {
  DeleteBlock,
  ModalSuccessDelete,
  ModalYouSureDelete,
} from '../../../shared/ui';

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
      setIsSuccessModalOpen(true);
    }
  }, [deleteClients]);

  return (
    <div className={css.wrapper}>
      <DeleteBlock selected={selected} setIsModalOpen={setIsModalOpen} />

      <ModalYouSureDelete
        isModalOpen={isModalOpen}
        setDeleteItems={setDeleteClients}
        setIsModalOpen={setIsModalOpen}
      />

      <ModalSuccessDelete
        isSuccessModalOpen={isSuccessModalOpen}
        setIsSuccessModalOpen={setIsSuccessModalOpen}
      />
    </div>
  );
}
