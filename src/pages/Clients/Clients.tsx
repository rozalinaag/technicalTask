import { observer } from 'mobx-react-lite';
import { BreadCrumbs } from '../../shared/ui/BreadCrumbs/BreadCrumbs';
import { useEffect } from 'react';
import { useStores } from '../../shared/hooks/useStores';

export const Clients = observer(() => {
  const {
    clients: { clients, getClientsAction },
  } = useStores();

  useEffect(() => {
    if (!clients?.length) {
      getClientsAction();
    }
  }, []);

  console.log(clients);

  return (
    <div>
      <BreadCrumbs names={['Клиенты']} />

      {clients?.map((item) => (
        <div>
          {item.name} {item.lastName}
        </div>
      ))}
    </div>
  );
});
