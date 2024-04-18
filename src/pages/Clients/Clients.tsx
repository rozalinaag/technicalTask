import { observer } from 'mobx-react-lite';
import { BreadCrumbs } from '../../shared/BreadCrumbs/BreadCrumbs';
import clientsStore from '../../stores/posts-store';
import { useEffect } from 'react';

export const Clients = observer(() => {
  const { clients, getClientsAction } = clientsStore;

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
