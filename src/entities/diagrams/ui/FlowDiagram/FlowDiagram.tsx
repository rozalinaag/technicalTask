import { useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
  BackgroundVariant,
  useReactFlow,
} from 'reactflow';
import { NodeWithToolbar } from '../..';
import { PropsDiagram } from './types';

const nodeTypes = {
  'node-with-toolbar': NodeWithToolbar,
};

export function FlowDiagram({
  nodesDiagram,
  edgesDiagram,
  setNodesDiagram,
  setEdgesDiagram,
}: PropsDiagram) {
  const [nodes, setNodes] = useNodesState(nodesDiagram!);
  const [edges, setEdges] = useEdgesState(edgesDiagram!);
  const { screenToFlowPosition } = useReactFlow();

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

  const onAddNewNode = (label: string, id: string) => {
    const newId = Number(id) + 1;

    if (nodes[nodes.length - 1].id === newId.toString()) {
      console.log('fed');
    }

    let newNodes = [];

    for (let i = 0; i < nodes.length; i++) {
      if (Number(nodes[i].id) <= Number(id)) {
        newNodes.push(nodes[i]);
      } else if (Number(nodes[i].id) === newId) {
        newNodes.push({
          id: newId.toString(),
          type: nodes[i - 1].type,
          position: screenToFlowPosition({
            x: nodes[i - 1].position.x,
            y: nodes[i - 1].position.y + 100,
          }),
          data: {
            label: label,
            onChangeEdit: onChangeEdit,
            onAddNewNode: onAddNewNode,
            onDeleteNode: onDeleteNode,
          },
        });

        newNodes.push({
          ...nodes[i],
          id: (Number(nodes[i].id) + 1).toString(),
          position: screenToFlowPosition({
            x: nodes[i].position.x,
            y: nodes[i].position.y + 100,
          }),
        });
      } else {
        newNodes.push({
          ...nodes[i],
          id: (Number(nodes[i].id) + 1).toString(),
          position: {
            x: nodes[i].position.x,
            y: nodes[i].position.y + 100,
          },
        });
      }
    }

    const last = nodes[nodes.length - 1];

    if (newId > Number(last.id)) {
      newNodes.push({
        id: newId.toString(),
        type: last.type,
        position: screenToFlowPosition({
          x: last.position.x,
          y: last.position.y + 100,
        }),
        data: {
          label: label,
          onChangeEdit: onChangeEdit,
          onAddNewNode: onAddNewNode,
        },
      });
    }

    setNodes(
      newNodes.map((item) => ({
        ...item,
        data: {
          label: item.data.label,
          onChangeEdit: onChangeEdit,
          onAddNewNode: onAddNewNode,
          onDeleteNode: onDeleteNode,
        },
      }))
    );

    const endId = Number(last.id) + 1;
    setEdges((edges) => {
      return [
        ...edges,
        {
          id: `e${last.id}-${endId}`,
          source: `${last.id}`,
          target: `${endId}`,
        },
      ];
    });
  };

  const onDeleteNode = (id: string) => {
    setNodes((nds) => {
      return nds.filter((item) => Number(item.id) < Number(id));
    });
  };

  useEffect(() => {
    setEdgesDiagram(edges);
    setNodesDiagram(nodes);
  }, [nodes, edges]);

  useEffect(() => {
    setNodes(
      nodes.map((item) => ({
        ...item,
        data: {
          label: item.data.label,
          onChangeEdit: onChangeEdit,
          onAddNewNode: onAddNewNode,
          onDeleteNode: onDeleteNode,
        },
      }))
    );
  }, []);

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
      onConnect={onConnect}
    >
      <Controls showInteractive={false} />
      <MiniMap />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </ReactFlow>
  );
}
