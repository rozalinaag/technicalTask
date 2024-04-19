import { Link } from 'react-router-dom';
import { BreadCrumbs, FormClient } from '../../shared/ui';
import css from './AddClient.module.css';

export function AddClient() {
  return (
    <div className={css.wrapper}>
      <BreadCrumbs
        names={[<Link to="/clients">Клиенты</Link>, 'Создание клиента']}
      />

      <FormClient />
    </div>
  );
}
