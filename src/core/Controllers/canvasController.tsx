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
} from 'reactflow'
import MButton from '../../design/components/button'
import MSwitch from '../../design/components/switch'
import MInput from '../../design/components/input'

const initialNodes = [
   { id: '1', position: { x: 400, y: 600 }, data: { label: 'node1' } },
   { id: '2', position: { x: 100, y: 200 }, data: { label: '2' } },
   { id: '3', position: { x: 200, y: 300 }, data: { label: 'node3' } },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const RunnerBottomPannel = (props: any) => {
   return (
      <>
         <Panel position="bottom-center">
            <button className="bg-violet-600 flex flex-row justify-center items-center px-4 text-sm font-medium hover:bg-violet-700 py-2 text-white rounded-full gap-1  m-4">
               Execute Runner
               <i className="ri-play-line"></i>
            </button>
         </Panel>
         <Panel position="bottom-right">
            <button className="bg-gray-50 border border-solid border-gray-600 w-10 h-10 flex flex-row justify-center items-center p-0 text-2xl font-medium hover:bg-gray-200 text-gray-700 rounded-md m-4 mx-0">
               <i className="ri-arrow-left-s-line"></i>
            </button>
         </Panel>
      </>
   )
}

export const NodeAddSide = (props: any) => {
   return (
      <div className="w-full  h-full flex flex-col justify-start items-start ">
         <div className="w-full h-fit flex flex-col gap-2 border-b-2 border-gray-100 p-4 ">
            <div className="text-xl text-gray-700 font-bold tracking-wide px-1">
               Create Node
            </div>
            <div className="flex flex-row w-full border border-gray-300  text-gray-600 rounded-md  gap-0 h-8  justify-center items-center px-2">
               <i className="ri-search-line"></i>
               <input
                  placeholder="Search nodes"
                  className=" w-full px-2 text-xs outline-none bg-transparent h-full placeholder:text-gray-500"
               ></input>
            </div>
         </div>
      </div>
   )
}

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
            <RunnerBottomPannel />
         </ReactFlow>
      </div>
   )
}

export default Editor
