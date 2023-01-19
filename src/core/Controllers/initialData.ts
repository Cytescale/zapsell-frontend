import { MarkerType } from "reactflow";

interface NodeInterface {
   id: string
   type?: string | undefined
   position: { x: number; y: number }
   data: any
}

export const initialNodes: Array<NodeInterface> = [
   {
      id: '1',
      type: 'nodebase',
      position: { x: 100, y: 400 },
      data: { label: 'node1' },
   },
   {
      id: '2',
      type: 'nodebase',
      position: { x: 600, y: 400 },
      data: { label: '2' },
   },
   {
      id: '3',
      type: 'nodebase',
      position: { x: 900, y: 300 },
      data: { label: 'node3' },
   },
]

export const initialEdges = [
   {
      id: 'e1-2',
      source: '1',
      target: '2',
      markerEnd: {
         type: MarkerType.ArrowClosed,
         width: 20,
         height: 20,
         color: '#FF0072',
      },
      type: 'edgeBase',
   },
   {
      id: 'e1-3',
      source: '2',
      target: '3',
      markerEnd: {
         type: MarkerType.ArrowClosed,
         width: 20,
         height: 20,
         color: '#FF0072',
      },
      type: 'edgeBase',
   },
]
