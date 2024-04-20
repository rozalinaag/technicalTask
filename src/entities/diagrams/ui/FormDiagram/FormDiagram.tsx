import classNames from 'classnames';
import css from './FormDiagram.module.css';
import { Diagram, zDiagrams } from '../../model/types';
import { useNavigate } from 'react-router-dom';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { v4 as uuIdv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from 'antd';

type Props = {
  diagram?: Diagram;
  pushNewDiagramAction: (newData: Diagram) => void;
};

export function FormDiagram({ diagram, pushNewDiagramAction }: Props) {
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

  const submit: SubmitHandler<Diagram> = (data) => {
    pushNewDiagramAction(data);
    reset();
    navigate('/diagrams');
  };

  const error: SubmitErrorHandler<Diagram> = (data) => {
    console.log(data);
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit(submit, error)}>
        <div className={css.field}>
          <div className={classNames(css.subTitle, css.required)}>
            Название диаграммы:
          </div>

          <Controller
            control={control}
            rules={{ required: true }}
            name="name"
            render={({ field }) => (
              <Input
                type="text"
                {...field}
                status={errors.name ? 'error' : ''}
              />
            )}
          />
        </div>
        <div className={css.error}>{errors.name?.message}</div>

        <div className={css.edit}>Reductor</div>

        <div className={css.buttons}>
          <button type="submit" className="button">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
