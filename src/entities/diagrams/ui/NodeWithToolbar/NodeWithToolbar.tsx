import { Handle, NodeToolbar } from 'reactflow';
import { Position } from '@reactflow/core';
import { Button, Input, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

type Props = {
  data: {
    label: string;
    onChangeEdit: (value: string, id: string) => void;
    onAddNewNode: (label: string, id: string) => void;
    onDeleteNode: (id: string) => void;
  };
  isConnectable: boolean;
};

export function NodeWithToolbar({ data, isConnectable }: Props) {
  const refDiv = useRef<HTMLInputElement>(null);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalPlus, setIsModalPlus] = useState(false);
  const [newLabel, setNewLabel] = useState(data.label);

  return (
    <div ref={refDiv}>
      <NodeToolbar isVisible={true} position={Position.Bottom}>
        <Button icon={<EditOutlined />} onClick={() => setIsModalEdit(true)} />
        <Button icon={<PlusOutlined />} onClick={() => setIsModalPlus(true)} />
        <Button
          icon={
            <DeleteOutlined
              onClick={() =>
                data.onDeleteNode(
                  refDiv
                    .current!.getElementsByClassName('react-flow__handle')[0]
                    .getAttribute('data-nodeid') || ''
                )
              }
            />
          }
        />
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
        title="Наименование блока"
        open={isModalEdit}
        cancelText={'Отмена'}
        centered
        okText={'Ок'}
        onOk={() => {
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

      <Modal
        title="Добавление блока"
        open={isModalPlus}
        cancelText={'Отмена'}
        centered
        okText={'Ок'}
        onOk={() => {
          data.onAddNewNode(
            newLabel,
            refDiv
              .current!.getElementsByClassName('react-flow__handle')[0]
              .getAttribute('data-nodeid') || ''
          );
          setIsModalPlus(false);
        }}
        onCancel={() => {
          setIsModalPlus(false);
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
