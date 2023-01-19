import React from 'react'

interface connectionLineInterface {
   fromX: number
   fromY: number
   fromPosition: number
   toX: number
   toY: number
   toPosition: number
   connectionLineType: any
   connectionLineStyle: any
}

export default ({
   fromX,
   fromY,
   fromPosition,
   toX,
   toY,
   toPosition,
   connectionLineType,
   connectionLineStyle,
}: connectionLineInterface) => {
   return (
      <g>
         <path
            fill="none"
            stroke="#959595"
            strokeWidth={4}
            className="animated"
            d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
         />
      </g>
   )
}
