import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../shared/ui';
import css from './AddClient.module.css';

export function AddClient() {
  return (
    <div className={css.wrapper}>
      <BreadCrumbs
        names={[<Link to="/clients">Клиенты</Link>, 'Добавить клиента']}
      />
    </div>
  );
}
