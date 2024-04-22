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

  const onChangeEdit = (value: string, id: string) => {
    setNodes((nds) => {
      return nds.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              label: value,
            },
          };
        } else {
          return {
            ...node,
          };
        }
      });
    });
  };

  useEffect(() => {
    setNodes(
      nodes.map((item) => ({
        ...item,
        data: { label: item.data.label, onChangeEdit: onChangeEdit },
      }))
    );
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
