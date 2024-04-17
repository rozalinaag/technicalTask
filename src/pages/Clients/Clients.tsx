import { observer } from 'mobx-react-lite';
import { BreadCrumbs } from '../../shared/BreadCrumbs/BreadCrumbs';
import counterStore from '../../stores/counter-store';
import css from './Clients.module.css';

export const Clients = observer(() => {
  const { counter, getTotal, increment, decrement } = counterStore;

  return (
    <div>
      <button onClick={() => increment(1)} className={css.button}>
        +
      </button>
      <span>{counter}</span>
      <button className={css.button} onClick={() => decrement(1)}>
        -
      </button>
      <span>{getTotal}</span>

      <BreadCrumbs names={['Клиенты']} />
    </div>
  );
});
