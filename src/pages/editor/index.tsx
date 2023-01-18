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
import Editor, { NodeAddSide } from '../../core/Controllers/canvasController'

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
            <div className="w-72 flex h-full bg-gray-59 border border-solid">
               <NodeAddSide />
            </div>
         </div>
      </div>
   )
}
export default EditorScreen
