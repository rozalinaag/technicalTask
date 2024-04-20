import { Modal } from 'antd';

type Props = {
  isSuccessModalOpen: boolean;
  setIsSuccessModalOpen: (option: boolean) => void;
};

export function ModalSuccessDelete({
  isSuccessModalOpen,
  setIsSuccessModalOpen,
}: Props) {
  return (
    <Modal
      title="Успешно удалено!"
      open={isSuccessModalOpen}
      cancelButtonProps={{ style: { display: 'none' } }}
      centered
      okText={'Ок'}
      onOk={() => {
        setIsSuccessModalOpen(false);
      }}
    >
      Успешно удалено!
    </Modal>
  );
}
