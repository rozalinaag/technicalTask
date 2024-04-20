import { Handle, NodeToolbar } from 'reactflow';
import { Position } from '@reactflow/core';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

type Props = {
  data: {
    label: string;
    onChange: () => void;
  };
  isConnectable: boolean;
};

export function NodeWithToolbar({ data, isConnectable }: Props) {
  return (
    <>
      <NodeToolbar isVisible={true} position={Position.Bottom}>
        <Button icon={<EditOutlined />} />
        <Button icon={<PlusOutlined />} />
        <Button icon={<DeleteOutlined />} />
      </NodeToolbar>

      <div className="react-flow__node-default">{data?.label}</div>
      <Handle
        type="target"
        id="a"
        position={Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </>
  );
}
