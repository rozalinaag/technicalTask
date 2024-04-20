import { Button } from 'antd';
import css from './DeleteBlock.module.css';

type Props = {
  selected: React.Key[];
  setIsModalOpen: (option: boolean) => void;
};

export function DeleteBlock({ selected, setIsModalOpen }: Props) {
  return (
    <div className={css.deletedBlock}>
      <div>
        Выбранных элементов:{' '}
        <span className={css.count}>{selected.length}</span>
      </div>

      <Button
        type="primary"
        danger
        disabled={!selected.length}
        onClick={() => setIsModalOpen(true)}
      >
        Удалить
      </Button>
    </div>
  );
}
