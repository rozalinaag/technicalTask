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
import { zClient, type Client } from '../..';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuIdv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

type Props = {
  client?: Client;
  pushNewClientAction: (newClient: Client) => void;
};

export function FormClient({ client, pushNewClientAction }: Props) {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<Client>({
    defaultValues: {
      key: client?.key || uuIdv4(),
    },
    resolver: zodResolver(zClient),
  });

  const submit: SubmitHandler<Client> = (data) => {
    pushNewClientAction(data);
    reset();
    navigate('/clients');
  };

  const error: SubmitErrorHandler<Client> = (data) => {
    console.log(data);
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit(submit, error)}>
        <div className={css.title}>Добавление клиента</div>

        <Field title="Фамилия" error={errors.lastName?.message}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="lastName"
            render={({ field }) => (
              <Input
                type="text"
                {...field}
                status={errors.lastName ? 'error' : ''}
              />
            )}
          />
        </Field>

        <Field title="Имя" error={errors.name?.message}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="name"
            render={({ field }) => (
              <Input
                status={errors.name ? 'error' : ''}
                type="text"
                {...field}
              />
            )}
          />
        </Field>

        <Field title="Отчество" error={errors.middleName?.message}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="middleName"
            render={({ field }) => (
              <Input
                status={errors.middleName ? 'error' : ''}
                type="text"
                {...field}
              />
            )}
          />
        </Field>

        <Field title="Телефон" error={errors.phone?.message}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="phone"
            render={({ field }) => (
              <Input
                status={errors.phone ? 'error' : ''}
                type="text"
                {...field}
              />
            )}
          />
        </Field>

        <Field title="Эл. почта" error={errors.email?.message}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="email"
            render={({ field }) => (
              <Input
                status={errors.email ? 'error' : ''}
                type="text"
                {...field}
              />
            )}
          />
        </Field>

        <Field title="Адрес" required={false} error={errors.adress?.message}>
          <Controller
            control={control}
            name="adress"
            render={({ field }) => (
              <Input
                status={errors.adress ? 'error' : ''}
                type="text"
                {...field}
              />
            )}
          />
        </Field>

        <div className={css.buttons}>
          <button type="submit" className="button">
            Отправить
          </button>

          <button
            type="reset"
            className={classNames('button', css.reset)}
            onClick={() => {
              reset();
            }}
          >
            Сбросить
          </button>
        </div>
      </form>
    </div>
  );
}
