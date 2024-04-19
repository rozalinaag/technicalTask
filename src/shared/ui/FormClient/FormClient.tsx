import { Button, Input } from 'antd';
import css from './FormClient.module.css';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import classNames from 'classnames';

type FieldForm = {
  name: string;
  lastName: string;
  middleName: string;
};

export function FormClient() {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FieldForm>({
    defaultValues: {
      middleName: '',
    },
  });

  const submit: SubmitHandler<FieldForm> = (data) => {
    console.log('object');
    console.log(data);
  };

  const error: SubmitErrorHandler<FieldForm> = (data) => {
    console.log('object');
    console.log(data);
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit(submit, error)}>
        <div className={css.title}>Добавление клиента</div>

        <Controller
          control={control}
          name="name"
          render={({ field }) => <Input type="text" {...field} />}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field }) => <Input type="text" {...field} />}
        />

        <Controller
          control={control}
          name="middleName"
          render={({ field }) => <Input type="text" {...field} />}
        />

        <div className={css.buttons}>
          <button type="submit">Отправить</button>
          <button
            type="reset"
            className={classNames(css.reset)}
            onClick={() => reset()}
          >
            Сбросить
          </button>
        </div>
      </form>
    </div>
  );
}
