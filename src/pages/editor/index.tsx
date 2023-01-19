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
import Editor from '../../core/Controllers/canvasController'
import NodeAddSide from '../../core/Menus/nodeAdder'
import { useTree } from '../../core/Store'
import { CanvasLeftPaneRender } from '../../core/Controllers/canvasController'

const EditorScreen = (props: any) => {
   
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
               <div className=" w-full flex grow h-16 z-20  items-center  border border-solid border-zinc-800 bg-zinc-900 justify-between px-6">
                  <div className="text-white flex flex-row gap-2 w-fit h-full justify-center items-center">
                     <button className=" text-xl font-medium w-6 h-6 bg-transparent flex flex-row justify-center items-center rounded-md hover:bg-zinc-500">
                        <i className="ri-arrow-left-line"></i>
                     </button>
                     Untitled Runner
                  </div>
                  <div className=" bg-zinc-800 p-1 rounded-md h-fit w-fit flex flex-row gap-2">
                     <button className="shadow-lg bg-blue-600 px-2 rounded-md py-1 text-sm text-white font-medium">
                        Editor
                     </button>
                     <button className="px-2 rounded-md py-1 text-sm text-zinc-200 font-medium">
                        Output
                     </button>
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
         </div>
      </div>
   )
}
export default EditorScreen
