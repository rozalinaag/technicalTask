import classNames from 'classnames';
import css from './Field.module.css';

type Props = {
  children: React.ReactNode;
  title: string;
  required?: boolean;
};

export function Field({ children, title, required = true }: Props) {
  return (
    <div className={css.field}>
      <div className={classNames(css.subTitle, required && css.required)}>
        {title}:
      </div>
      {children}
    </div>
  );
}
