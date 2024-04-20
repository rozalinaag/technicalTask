import { useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  MiniMap,
  NodeChange,
  addEdge,
  useEdgesState,
  useNodesState,
  BackgroundVariant,
} from 'reactflow';
import { NodeWithToolbar, initialEdges, initialNodes } from '../..';
import { PropsDiagram } from './types';

const nodeTypes = {
  'node-with-toolbar': NodeWithToolbar,
};

export function FlowDiagram({ nodesDiagram, edgesDiagram }: PropsDiagram) {
  const [nodes, setNodes] = useNodesState(nodesDiagram || initialNodes);
  const [edges, setEdges] = useEdgesState(edgesDiagram || initialEdges);

  useEffect(() => {
    const onChange = (event: { target: { value: any } }) => {
      setNodes((nds) =>
        nds.map((node) => {
          const color = event.target.value;

          return {
            ...node,
            data: {
              ...node.data,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: '1',
        position: { x: 400, y: 100 },
        type: 'node-with-toolbar',
        data: { label: 'Block 1', onChange: onChange },
      },
      {
        id: '2',
        position: { x: 400, y: 200 },
        type: 'node-with-toolbar',
        data: { label: 'Block 2', onChange: onChange  },
      },
      {
        id: '3',
        position: { x: 400, y: 300 },
        type: 'node-with-toolbar',
        data: { label: 'Block 3', onChange: onChange  },
      },
      {
        id: '4',
        position: { x: 400, y: 400 },
        type: 'node-with-toolbar',
        data: { label: 'Block 4', , onChange: onChange },
      },
    ]);
  }, []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      // setNodes((nds) => applyNodeChanges(changes, nds)),
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      // setEdges((eds) => applyEdgeChanges(changes, eds)),
    },
    [setEdges]
  );

  const onConnect = useCallback(
    (connection: Edge | Connection) =>
      setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Controls showInteractive={false} />
      <MiniMap />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </ReactFlow>
  );
}
