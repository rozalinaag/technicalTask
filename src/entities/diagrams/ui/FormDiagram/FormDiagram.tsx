import classNames from 'classnames';
import css from './FormDiagram.module.css';
import { Diagram, zDiagrams } from '../../model/types';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuIdv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from 'antd';

type Props = {
  diagram?: Diagram;
};

export function FormDiagram({ diagram }: Props) {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<Diagram>({
    defaultValues: {
      key: diagram?.key || uuIdv4(),
      name: diagram?.name || 'Новая диаграмма',
    },
    resolver: zodResolver(zDiagrams),
  });

  return (
    <div className={css.wrapper}>
      <div className={css.field}>
        <div className={classNames(css.subTitle, css.required)}>
          Название диаграммы:
        </div>

        <Controller
          control={control}
          rules={{ required: true }}
          name="name"
          render={({ field }) => (
            <Input type="text" {...field} status={errors.name ? 'error' : ''} />
          )}
        />
      </div>
      <div className={css.error}>{errors.name?.message}</div>
    </div>
  );
}
