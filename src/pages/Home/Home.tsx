import { Card } from 'antd';
import { BreadCrumbs } from '../../shared/ui';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <BreadCrumbs />
      <div className={css.menu}>
        <Link to="/clients">
          <Card title="Клиенты" bordered={false} className={css.card}>
            Таблица клиентов
          </Card>
        </Link>

        <Link to="/diagrams">
          <Card title="Диаграммы" bordered={false} className={css.card}>
            Таблица диаграмм
          </Card>
        </Link>
      </div>
    </div>
  );
}
