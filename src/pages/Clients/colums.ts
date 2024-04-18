import { TableColumnsType } from "antd";
import { Client } from "../../entities/clients";

export const columns: TableColumnsType<Client> = [
  {
    title: 'Имя',
    dataIndex: 'name',
  },
  {
    title: 'Фамилия',
    dataIndex: 'lastName',
  },
  {
    title: 'Отчество',
    dataIndex: 'middleName',
  },
];