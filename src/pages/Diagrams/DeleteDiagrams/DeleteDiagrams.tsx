import { useEffect, useState } from 'react';
import { useStores } from '../../../shared/hooks/useStores';
import css from './DeleteDiagrams.module.css';
import {
  DeleteBlock,
  ModalSuccessDelete,
  ModalYouSureDelete,
} from '../../../shared/ui';

type Props = {
  selected: React.Key[];
};

export function DeleteDiagrams({ selected }: Props) {
  const {
    diagrams: { deleteDiagramsAction },
  } = useStores();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteItems, setDeleteItems] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (deleteItems) {
      deleteDiagramsAction(selected);
      setDeleteItems(false);
      setIsSuccessModalOpen(true);
    }
  }, [deleteItems]);

  return (
    <div className={css.wrapper}>
      <DeleteBlock selected={selected} setIsModalOpen={setIsModalOpen} />

      <ModalYouSureDelete
        isModalOpen={isModalOpen}
        setDeleteItems={setDeleteItems}
        setIsModalOpen={setIsModalOpen}
      />

      <ModalSuccessDelete
        isSuccessModalOpen={isSuccessModalOpen}
        setIsSuccessModalOpen={setIsSuccessModalOpen}
      />
    </div>
  );
}
