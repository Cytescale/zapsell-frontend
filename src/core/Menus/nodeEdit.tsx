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
} from 'reactflow'
import { useTree } from '../Store'
import NodeDirec from '../Nodes/node.directory.json'
import LogoDirec from '../Controllers/logoController'
import MDropDown from '../../design/components/dropdown'
import MButton from '../../design/components/button'
import MListBox from '../../design/components/listbox'
import MInput from '../../design/components/input'
import MSwitch from '../../design/components/switch'

const ProductCatMap = [
   { id: 0, name: 'Design' },
   { id: 1, name: 'Artwork' },
   { id: 2, name: 'Course' },
   { id: 3, name: 'Template' },
   { id: 3, name: 'Misc' },
]

const NodeEditSide = (props: any) => {
   return (
      <div className="w-full h-full">
         <div className="w-full  h-full flex flex-col justify-start items-start bg-zinc-900 border border-solid border-zinc-800 overflow-y-hidden">
            <div className="w-full h-fit flex flex-col gap-2 border-b-2 border-zinc-800 p-4 ">
               <div className="text-xl text-zinc-50 font-bold tracking-wide px-0 flex flex-row justify-between items-center gap-1">
                  Node
                  <div className="flex flex-row gap-2">
                     <button className="w-8 h-8 text-xl flex flex-row  justify-center items-center text-white bg-blue-600 rounded-full hover:bg-blue-700">
                        <i className="ri-play-fill"></i>
                     </button>
                     <button className="w-8 h-8 font-thin text-lg flex flex-row  justify-center items-center text-white bg-red-600 rounded-full hover:bg-red-700">
                        <i className="ri-delete-bin-line"></i>
                     </button>
                  </div>
               </div>
            </div>
            <div className="flex flex-col w-full h-full overflow-y-scroll">
               <div className="flex flex-col w-full h-fit gap-4 p-6 py-6 border-b-2 border-zinc-800">
                  <div className="text-zinc-200 text-sm font-medium">
                     Node Setup
                  </div>
                  <div className="flex flex-row gap-2 w-full h-fit">
                     <div className="w-12 h-12 flex flex-col justify-center items-center">
                        <div className="w-full h-full bg-zinc-700 rounded-md"></div>
                     </div>
                     <div className="flex flex-col gap-0 justify-start items-center">
                        <div className="text-sm text-zinc-300 font-semibold w-full">
                           Node Name
                        </div>
                        <div className="text-xs text-zinc-400 font-medium">
                           Node description
                        </div>
                     </div>
                  </div>

                  <MListBox
                     searchable={true}
                     label="Event"
                     variant="outline"
                     listmap={ProductCatMap}
                     fullwidth={true}
                  ></MListBox>
                  <MListBox
                     searchable={true}
                     label="Authentication"
                     variant="outline"
                     listmap={ProductCatMap}
                     fullwidth={true}
                  ></MListBox>
               </div>
               <div className="flex flex-col w-full h-fit gap-4 p-6 py-6 border-b-2 border-zinc-800">
                  <div className="text-zinc-200 text-sm font-medium">
                     Parameters
                  </div>
                  <MInput
                     label="Resource"
                     fullwidth={true}
                     placeholder="Resource here"
                     helperline="Write here"
                  />
                  <MInput
                     label="Resource"
                     fullwidth={true}
                     helperLine="This is the helperline for the resource used here"
                     placeholder="Resource here"
                     iserror={true}
                  />
                  <MListBox
                     searchable={true}
                     label="Event"
                     variant="outline"
                     helperLine="This is the helperline for the resource used here"
                     listmap={ProductCatMap}
                     fullwidth={true}
                     iserror={true}
                  ></MListBox>
                  <MListBox
                     searchable={true}
                     label="Authentication"
                     variant="outline"
                     listmap={ProductCatMap}
                     fullwidth={true}
                  ></MListBox>
                  <div className="flex flex-row gap-2 justify-start items-center text-zinc-200 text-sm font-medium">
                     <MSwitch></MSwitch>
                     Can verify
                  </div>
               </div>
               <div className="flex flex-col w-full h-fit gap-4 p-6 py-6 border-b-2 border-zinc-800">
                  <MButton modifier="danger" variant="dark" fullWidth>
                     Delete Node
                  </MButton>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NodeEditSide
