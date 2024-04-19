import { Link } from 'react-router-dom';
import { FormClient } from '../../entities/clients/ui/FormClient/FormClient';
import { BreadCrumbs } from '../../shared/ui';
import css from './ChangeClient.module.css';

export function ChangeClient() {
  return (
    <div className={css.wrapper}>
      <BreadCrumbs
        names={[<Link to="/clients">Клиенты</Link>, 'Изменение данных клиента']}
      />

      <FormClient />
    </div>
  );
}
