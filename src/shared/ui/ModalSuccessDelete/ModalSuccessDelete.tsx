import { Modal } from 'antd';
import arrow from './arrow.png';
import css from './ModalSuccessDelete.module.css';

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
      <div className={css.modal}>
        <img className={css.picture} src={arrow} alt="arrow" />
      </div>
    </Modal>
  );
}
