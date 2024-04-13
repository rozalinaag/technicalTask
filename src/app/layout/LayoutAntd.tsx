import { Layout } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import css from './LayoutAntd.module.css';
import icon from '/public/img/icon.png';

const { Header, Content, Footer } = Layout;

export function LayoutAntd() {
  return (
    <Layout>
      <Header className={css.header}>
        <Link to="/" className={css.linkIcon}>
          <img src={icon} className={css.icon} />
        </Link>
        <div>Тестовое задание</div>
      </Header>

      <Content className={css.content}>
        <Outlet />
      </Content>

      <Footer className={css.footer}>
        Тестовое задание ©{new Date().getFullYear()} Розалина Агишева
      </Footer>
    </Layout>
  );
}
