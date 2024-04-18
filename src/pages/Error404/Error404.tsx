import pageNotFound from './img/pageNotFound.jpg';
import css from './Error404.module.css';
import { BreadCrumbs } from '../../shared/ui';

export function Error404() {
  return (
    <>
      <BreadCrumbs names={['Страница не найдена']} />
      <div className={css.wrapper}>
        <img className={css.image} src={pageNotFound} />
      </div>
    </>
  );
}
