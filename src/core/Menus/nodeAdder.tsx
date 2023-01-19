//@ts-ignore
//@ts-nocheck
import React, { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames'
import ReactFlow, { useStore, useStoreApi } from 'reactflow'
import { useTree } from '../Store'
import NodeDirec from '../Nodes/node.directory.json'
import LogoDirec from '../Controllers/logoController'

const LogoComp = (e: any) => {
   const [file, setFile] = useState<string>('')
   useEffect(() => {
      LogoDirec.forEach((d: any) => {
         if (d.name == e.e.name && d.company == e.e.company) {
            setFile(d.file)
         }
      })
   }, [])
   return <img src={file} className="w-8 h-8" />
}

//   const AppendNode = useCallback(() => {
//       setNodes((n) => {
//          console.log(n)
//          return [
//             ...n,
//             {
//                id: Math.random(),
//                position: { x: 100, y: 300 },
//                data: { label: 'yo' },
//             },
//          ]
//       })
//    }, [])

function addNode(nodeArray) {}

const NodeAddSide = (props: any) => {
   const tstat = useStoreApi().getState()
   const sstat = useStoreApi().getState()
   const nodeInt = Array.from(tstat.nodeInternals.values())

   console.log(nodeInt)
   return (
      <div className="w-full  h-full flex flex-col justify-start items-start bg-zinc-900 border border-solid border-zinc-800">
         <div className="w-full h-fit flex flex-col gap-2 border-b-2 border-zinc-800 p-4 ">
            <div className="text-xl text-zinc-50 font-bold tracking-wide px-0 flex flex-row items-center gap-1">
               Create Node
            </div>
            <div className="flex flex-row w-full  text-zinc-400 rounded-md  gap-0 h-8  justify-center items-center px-1s">
               <i className="ri-search-line"></i>
               <input
                  placeholder="Search nodes"
                  className=" w-full px-2 text-sm outline-none bg-transparent h-full placeholder:text-zinc-300"
               ></input>
            </div>
         </div>
         <div className="bg-zinc-800 w-full flex flex-row h-12 gap-0 p-0 ">
            <button className="border-b-4 border-blue-700 h-full w-1/2 flex flex-row bg-zinc-800 text-white justify-center items-center text-sm font-medium hover:bg-zinc-700">
               Nodes
            </button>
            <button className="h-full w-1/2 flex flex-row bg-zinc-800 text-white justify-center items-center text-sm font-medium hover:bg-zinc-700">
               Trigger
            </button>
         </div>
         <div className="flex flex-col grow w-full h-full mt-2">
            {NodeDirec.map((e, i) => {
               return (
                  <div
                     key={e.id}
                     className="flex flex-row w-full h-fit text-zinc-50 p-5 py-4 gap-3 justify-start items-center hover:bg-zinc-800 cursor-pointer"
                  >
                     <div className="h-fit w-fit bg-zinc-800 rounded-md flex flex-row  justify-center items-center">
                        <div className="h-12 w-12 flex flex-row justify-center items-center">
                           <LogoComp e={e} />
                        </div>
                     </div>
                     <div className="flex flex-col gap-0 w-fit h-full">
                        <div className="text-sm text-zinc-100 tracking-wide font-medium">
                           {e.displayName}
                        </div>
                        <div className="text-xs text-zinc-400 tracking-wide">
                           {e.description}
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default NodeAddSide
