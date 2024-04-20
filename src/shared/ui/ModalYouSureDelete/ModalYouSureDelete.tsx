import { Modal } from 'antd';
import cat from './cat.png';
import css from './ModalYouSureDelete.module.css';

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (option: boolean) => void;
  setDeleteClients: (option: boolean) => void;
};

export function ModalYouSureDelete({
  isModalOpen,
  setIsModalOpen,
  setDeleteClients,
}: Props) {
  return (
    <Modal
      title="Удаление"
      open={isModalOpen}
      cancelText={'Отмена'}
      centered
      okText={'Ок'}
      onOk={() => {
        setIsModalOpen(false);
        setDeleteClients(true);
      }}
      onCancel={() => {
        setIsModalOpen(false);
      }}
    >
      <div className={css.content}>
        Вы уверены, что хотите удалить?
        <img className={css.pic} src={cat} alt="cat" />
      </div>
    </Modal>
  );
}
