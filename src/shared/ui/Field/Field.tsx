import classNames from 'classnames';
import css from './Field.module.css';

type Props = {
  children: React.ReactNode;
  title: string;
  required?: boolean;
  error?: string;
};

export function Field({ children, title, error, required = true }: Props) {
  return (
    <div>
      <div className={css.field}>
        <div className={classNames(css.subTitle, required && css.required)}>
          {title}:
        </div>
        {children}
      </div>

      <div className={css.error}>{error}</div>
    </div>
  );
}
