import { Link } from 'react-router-dom';
import { FormClient } from '../../entities/clients/ui/FormClient/FormClient';
import { BreadCrumbs } from '../../shared/ui';
import css from './ChangeClient.module.css';
import { useStores } from '../../shared/hooks/useStores';

export function ChangeClient() {
  const {
    clients: { clients, pushNewClientAction },
  } = useStores();

  console.log('re');

  return (
    <div className={css.wrapper}>
      <BreadCrumbs
        names={[<Link to="/clients">Клиенты</Link>, 'Изменение данных клиента']}
      />

      <FormClient pushNewClientAction={pushNewClientAction} />
    </div>
  );
}
