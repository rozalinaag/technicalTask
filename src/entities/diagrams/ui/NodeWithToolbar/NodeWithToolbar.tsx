import { NodeToolbar } from 'reactflow';
import { Position } from '@reactflow/core';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

type Props = {
  data: {
    label: string;
  };
};

export function NodeWithToolbar({ data }: Props) {
  return (
    <>
      <NodeToolbar isVisible={true} position={Position.Left}>
        <Button icon={<EditOutlined />} />
        <Button icon={<PlusOutlined />} />
        <Button icon={<DeleteOutlined />} />
      </NodeToolbar>

      <div className="react-flow__node-default">{data?.label}</div>
    </>
  );
}
