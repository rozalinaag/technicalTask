import { Modal } from 'antd';

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
      Вы уверены, что хотите удалить?
    </Modal>
  );
}
