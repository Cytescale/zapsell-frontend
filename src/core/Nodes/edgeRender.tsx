//@ts-ignore
//@ts-nocheck
import React from 'react'
import { getBezierPath, getMarkerEnd, MarkerType } from 'reactflow'
import arrowSVG from './arrow.svg'

const foreignObjectSize = 36

interface EdgeInterface {
   id: string
   sourceX: number
   sourceY: number
   targetX: number
   targetY: number
   sourcePosition: any
   targetPosition: any
   markerEnd: any
   style?: any
}

function EdgeBase({
   id,
   sourceX,
   sourceY,
   targetX,
   targetY,
   style = {},
   sourcePosition,
   targetPosition,
   markerEnd,
}: EdgeInterface) {
   const [edgePath, labelX, labelY] = getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
   })

   const onEdgeClick = (evt, id) => {
      evt.stopPropagation()
   }

   return (
      <>
         <path
            id={id}
            style={{
               strokeWidth: 4,
               stroke: '#FF0072',
            }}
            className="react-flow__edge-path "
            d={edgePath}
            markerEnd={markerEnd}
         />
         <foreignObject
            width={foreignObjectSize}
            height={foreignObjectSize}
            x={labelX - foreignObjectSize / 2}
            y={labelY - foreignObjectSize / 2}
            className="w-9 h-9 flex justify-center items-center "
         >
            <div>
               <button
                  className="w-9 h-9 text-zinc-300 text-2xl bg-zinc-700 rounded-full flex flex-row justify-center items-center hover:bg-zinc-800"
                  onClick={(event) => onEdgeClick(event, id)}
               >
                  <i className="ri-close-fill"></i>
               </button>
            </div>
         </foreignObject>
      </>
   )
}

export default EdgeBase
