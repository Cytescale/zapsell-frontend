//@ts-ignore
//@ts-nocheck
import React, { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames'
import ReactFlow, {
   MiniMap,
   Controls,
   Background,
   useNodesState,
   useEdgesState,
   Panel,
   addEdge,
   applyNodeChanges,
   applyEdgeChanges,
   MarkerType,
   useOnSelectionChange,
   ReactFlowProvider,
   useStoreApi,
} from 'reactflow'
import { useTree } from '../Store'
import EdgeBase from '../Nodes/edgeRender'
import NodeBase from '../Nodes/nodeRender'
import ConnectionLine from '../Nodes/connectionLineRender'
import NodeAddSide from '../Menus/nodeAdder'
import { canvasLeftPaneModeEnum } from '../Store'
import NodeEditSide from '../Menus/nodeEdit'
import { initialEdges, initialNodes } from './initialData'

const nodeTypes = { nodebase: NodeBase }
const edgeTypes = { edgeBase: EdgeBase }

const Editor = (props) => {
   const canvasLeftPaneVisi = useTree((s) => s.canvasLeftPaneVisi)
   const [nodes, setNodes] = useState(initialNodes)
   const [edges, setEdges] = useState(initialEdges)

   const onNodesChange = useCallback(
      (changes: any) =>
         setNodes((nds: any) => {
            const a = applyNodeChanges(changes, nds)
            return a
         }),

      [setNodes],
   )
   const onEdgesChange = useCallback(
      (changes: any) =>
         setEdges((eds: any) => {
            const a = applyEdgeChanges(changes, eds)
            return a
         }),
      [setEdges],
   )
   const onConnect = useCallback(
      (params: any) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],
   )

   return (
      <div className=" w-full h-full flex flex-row overflow-hidden">
         <ReactFlowProvider>
            <div className="w-full h-full flex flex-row grow">
               <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  nodeTypes={nodeTypes}
                  connectionLineComponent={ConnectionLine}
                  edgeTypes={edgeTypes}
                  proOptions={{ hideAttribution: true }}
               >
                  <Background
                     size={3}
                     color="#3f3f46"
                     gap={32}
                     style={{
                        background: '#18181b',
                     }}
                  />
                  <RunnerBottomPannel />
               </ReactFlow>
            </div>
            {canvasLeftPaneVisi && (
               <div className="w-96 h-full">
                  <CanvasLeftPaneRender />
               </div>
            )}
         </ReactFlowProvider>
      </div>
   )
}

const RunnerBottomPannel = (props: any) => {
   const canvasLeftPaneVisi = useTree((state: any) => state.canvasLeftPaneVisi)
   const toggCanvasLeftPane = useTree((state: any) => state.toggCanvasLeftPane)
   const setSelectedNode = useTree((state: any) => state.setSelectedNode)
   useOnSelectionChange({
      onChange: ({ nodes, edges }) => setSelectedNode(nodes),
   })
   return (
      <>
         <Panel position="bottom-center">
            <button className="shadow-2xl bg-blue-600 flex flex-row justify-center items-center px-4 text-sm font-medium hover:bg-blue-700 py-2 text-white rounded-full gap-1  m-4">
               Execute Runner
               <i className="ri-play-line"></i>
            </button>
         </Panel>
         <Panel position="bottom-right">
            <button
               className="shadow-2xl bg-zinc-800 text-zinc-300 border border-solid border-gray-800 w-10 h-10 flex flex-row justify-center items-center p-0 text-2xl font-bold hover:bg-zinc-700  rounded-md m-4 mx-0"
               onClick={toggCanvasLeftPane}
            >
               {!canvasLeftPaneVisi ? (
                  <i className="ri-arrow-left-s-line"></i>
               ) : (
                  <i className="ri-arrow-right-s-line"></i>
               )}
            </button>
         </Panel>
      </>
   )
}

export const CanvasLeftPaneRender = (props: any) => {
   const canvasLeftPaneMode = useTree((state: any) => state.canvasLeftPaneMode)
   const selectedNode = useTree((state: any) => state.selectedNode)
   const setCanvasLeftPaneMode = useTree(
      (state: any) => state.setCanvasLeftPaneMode,
   )
   useEffect(() => {
      if (selectedNode) {
         if (selectedNode.length == 1) {
            setCanvasLeftPaneMode(canvasLeftPaneModeEnum.edit)
         } else {
            setCanvasLeftPaneMode(canvasLeftPaneModeEnum.add)
         }
      }
   }, [selectedNode])
   return (
      <>
         {canvasLeftPaneMode === canvasLeftPaneModeEnum.add ? (
            <NodeAddSide />
         ) : (
            <NodeEditSide selectedNode={selectedNode} />
         )}
      </>
   )
}

export default Editor
