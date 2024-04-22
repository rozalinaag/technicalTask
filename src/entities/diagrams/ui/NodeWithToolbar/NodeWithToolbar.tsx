import { Handle, NodeToolbar } from 'reactflow';
import { Position } from '@reactflow/core';
import { Button, Input, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

type Props = {
  data: {
    label: string;
    onChangeEdit: (value: string, id: string) => void;
  };
  isConnectable: boolean;
};

export function NodeWithToolbar({ data, isConnectable }: Props) {
  const refDiv = useRef<HTMLInputElement>(null);
  const [labelNode, setLabelNode] = useState(data.label);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [newLabel, setNewLabel] = useState(labelNode);

  return (
    <div ref={refDiv}>
      <NodeToolbar isVisible={true} position={Position.Bottom}>
        <Button icon={<EditOutlined />} onClick={() => setIsModalEdit(true)} />
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

      <Modal
        title="Изменение узла"
        open={isModalEdit}
        cancelText={'Отмена'}
        centered
        okText={'Ок'}
        onOk={() => {
          setLabelNode('');
          data.onChangeEdit(
            newLabel,
            refDiv
              .current!.getElementsByClassName('react-flow__handle')[0]
              .getAttribute('data-nodeid') || ''
          );
          setIsModalEdit(false);
        }}
        onCancel={() => {
          setIsModalEdit(false);
        }}
      >
        <Input
          value={newLabel}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewLabel(e.target.value)
          }
        />
      </Modal>
    </div>
  );
}
