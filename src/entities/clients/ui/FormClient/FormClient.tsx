import { Input } from 'antd';
import css from './FormClient.module.css';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import classNames from 'classnames';
import { Field } from '../../../../shared/ui';
import type { Client } from '../..';

export function FormClient() {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<Client>({
    defaultValues: {
      middleName: '',
    },
  });

  const submit: SubmitHandler<Client> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<Client> = (data) => {
    console.log(data);
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit(submit, error)}>
        <div className={css.title}>Добавление клиента</div>

        <Field title="Фамилия">
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => <Input type="text" {...field} />}
          />
        </Field>

        <Field title="Имя">
          <Controller
            control={control}
            name="name"
            render={({ field }) => <Input type="text" {...field} />}
          />
        </Field>

        <Field title="Отчество">
          <Controller
            control={control}
            name="middleName"
            render={({ field }) => <Input type="text" {...field} />}
          />
        </Field>

        <Field title="Телефон">
          <Controller
            control={control}
            name="phone"
            render={({ field }) => <Input type="text" {...field} />}
          />
        </Field>

        <Field title="Эл. почта">
          <Controller
            control={control}
            name="email"
            render={({ field }) => <Input type="text" {...field} />}
          />
        </Field>

        <Field title="Адрес" required={false}>
          <Controller
            control={control}
            name="adress"
            render={({ field }) => <Input type="text" {...field} />}
          />
        </Field>

        <div className={css.buttons}>
          <button type="submit" className="button">
            Отправить
          </button>
          <button
            type="reset"
            className={classNames('button', css.reset)}
            onClick={() => reset()}
          >
            Сбросить
          </button>
        </div>
      </form>
    </div>
  );
}
