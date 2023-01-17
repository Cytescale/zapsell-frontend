import React, { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames'

import ReactFlow, {
   MiniMap,
   Controls,
   Background,
   useNodesState,
   useEdgesState,
   addEdge,
   applyNodeChanges,
   applyEdgeChanges,
} from 'reactflow'
import MButton from '../../design/components/button'
import MSwitch from '../../design/components/switch'

const initialNodes = [
   { id: '1', position: { x: 400, y: 600 }, data: { label: 'node1' } },
   { id: '2', position: { x: 100, y: 200 }, data: { label: '2' } },
   { id: '3', position: { x: 200, y: 300 }, data: { label: 'node3' } },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const Editor = (props: any) => {
   const [nodes, setNodes] = useState(initialNodes)
   const [edges, setEdges] = useState(initialEdges)

   const onNodesChange = useCallback(
      (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
      [setNodes],
   )
   const onEdgesChange = useCallback(
      (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
      [setEdges],
   )
   const onConnect = useCallback(
      (params: any) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],
   )

   return (
      <div className=" w-full h-full ">
         <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
         >
            <Controls />
            <Background />
         </ReactFlow>
      </div>
   )
}

const EditorScreen = (props: any) => {
   const [selecProdList, setselecProdList] = useState<Array<any>>([])

   return (
      <div
         className={classNames(
            'overflow-y-scroll',
            'overflow-x-hidden ',
            'w-full',
         )}
      >
         <div className="w-full h-full flex flex-row justify-center items-center">
            <div className="flex grow h-full flex-col">
               <div className=" w-full flex grow h-16 z-20  items-center bg-gray-50 justify-between px-6">
                  <div className="flex flex-row gap-2 w-fit h-full justify-center items-center">
                     <button className="text-xl font-medium w-6 h-6 bg-transparent flex flex-row justify-center items-center rounded-md hover:bg-gray-100">
                        <i className="ri-arrow-left-line"></i>
                     </button>
                     Untitled Runner
                  </div>
                  <div className="flex flex-row gap-4 w-fit h-full justify-center items-center">
                     <MSwitch />
                     <button className="text-xs rounded-3xl tracking-wide font-semibold text-white w-fit h-8 px-5 bg-blue-600 flex flex-row justify-center items-center hover:bg-blue-900">
                        Publish
                     </button>
                  </div>
               </div>
               <Editor />
            </div>
            {/* <div className="w-60 flex h-full bg-gray-59 border border-solid"></div> */}
         </div>
      </div>
   )
}
export default EditorScreen
