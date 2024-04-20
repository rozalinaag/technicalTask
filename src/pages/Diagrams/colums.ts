import { TableColumnsType } from "antd";
import { Client } from "../../entities/clients";

export const columns: TableColumnsType<Client> = [
  {
    title: 'Наименование диаграммы',
    dataIndex: 'name',
  },
];