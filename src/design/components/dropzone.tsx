import React, { useState, useEffect } from 'react'

interface MDropdownProps {
   buttonlabel?: string
   fileAcceptLabel?: string
}

const MDropzone = (props: MDropdownProps) => {
   return (
      <div className="cursor-pointer hover:bg-gray-100 flex flex-col w-full rounded-md font-medium grow p-4 py-7 gap-2 border-2 border-dashed border-spacing-2 border-gray-300 bg-white justify-center items-center">
         {/* <input type="file" onChange={() => {}} /> */}
         <div className="bg-blue-50 px-2 py-1 text-sm rounded-md text-blue-700">
            {props.buttonlabel ? props.buttonlabel : 'Add Files'}
         </div>
         <div className="text-xs rounded-md text-gray-500">
            {props.fileAcceptLabel
               ? props.fileAcceptLabel
               : 'Accepts .gif .jpg and .png'}
         </div>
      </div>
   )
}

export default MDropzone
