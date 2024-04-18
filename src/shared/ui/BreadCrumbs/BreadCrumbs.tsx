import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import css from './BreadCrumbs.module.css';

type Props = {
  names?: React.ReactNode[];
};

export function BreadCrumbs({ names }: Props) {
  const titles = names?.map((item) => ({ title: item })) || [];

  return (
    <Breadcrumb
      className={css.wrapper}
      items={[
        {
          title: <Link to="/">Главная</Link>,
        },
        ...titles,
      ]}
    />
  );
}
