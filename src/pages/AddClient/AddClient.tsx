import { Link } from 'react-router-dom';
import { BreadCrumbs } from '../../shared/ui';
import { FormClient } from '../../entities/clients/ui/FormClient/FormClient';
import css from './AddClient.module.css';
import { useStores } from '../../shared/hooks/useStores';

export function AddClient() {
  const {
    clients: { pushNewClientAction },
  } = useStores();

  return (
    <div className={css.wrapper}>
      <BreadCrumbs
        names={[<Link to="/clients">Клиенты</Link>, 'Создание клиента']}
      />

      <FormClient pushNewClientAction={pushNewClientAction} />
    </div>
  );
}
