import { Link, useParams } from 'react-router-dom';
import { FormClient } from '../../entities/clients';
import { BreadCrumbs } from '../../shared/ui';
import css from './ChangeClient.module.css';
import { useStores } from '../../shared/hooks/useStores';

export function ChangeClient() {
  const {
    clients: { clients, pushNewClientAction },
  } = useStores();
  const { key } = useParams();

  return (
    <div className={css.wrapper}>
      <BreadCrumbs
        names={[<Link to="/clients">Клиенты</Link>, 'Изменение данных клиента']}
      />

      <FormClient
        client={clients.find((item) => item.key === key)}
        pushNewClientAction={pushNewClientAction}
      />
    </div>
  );
}
