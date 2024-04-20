import { TableColumnsType } from "antd";
import { Diagram } from "../../entities/diagrams";

export const columns: TableColumnsType<Diagram> = [
  {
    title: 'Наименование диаграммы',
    dataIndex: 'name',
  },
];