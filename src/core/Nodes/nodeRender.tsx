//@ts-ignore
//@ts-nocheck
import { useCallback } from 'react'
import { Handle, Panel, Position } from 'reactflow'
import classNames from 'classnames'

function NodeBase(props: any) {
   const variant: 'success' | 'error' = 'error'

   const onChange = useCallback((evt: any) => {
      //   console.log(evt.target.value)
   }, [])

   return (
      <>
         <div
            className={classNames(
               'node_main_base',
               'relative w-32 h-32 bg-zinc-700 rounded-xl  border-solid border-2 border-zinc-700 text-white flex flex-row justify-center items-center shadow-xl outline-8 outline-none',
               props.selected && 'outline outline-blue-500/50 ',
               variant == 'success'
                  ? 'border-green-500/80 '
                  : 'border-red-500/80 ',
            )}
         >
            <div className="w-16 h-16 rounded-full text-zinc-400 text-6xl flex flex-row justify-center items-center">
               <i className="ri-remixicon-fill"></i>
            </div>

            <Handle
               type="target"
               position={Position.Left}
               style={{
                  width: '12px',
                  height: '22px',
                  borderRadius: '0px',
                  borderStyle: 'none',
                  background: '#656565',
               }}
            />
            <Handle
               type="source"
               position={Position.Right}
               style={{
                  right: '-6px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '100px',
                  borderStyle: 'none',
                  background: '#656565',
               }}
            />
         </div>
         <div className="mt-3 font-medium text-white text-base flex flex-row justify-center items-center">
            Node Name
         </div>
         <div className="mt-0 font-medium text-zinc-400 text-sm flex flex-row justify-center items-center">
            :action()
         </div>
      </>
   )
}

export default NodeBase
