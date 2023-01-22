import React, { InputHTMLAttributes } from 'react'
import classNames from 'classnames'

const MSwitch = (props: any) => {
   return (
      <label className="inline-flex relative items-center cursor-pointer">
         <input type="checkbox" value="" className="sr-only peer" />
         <div
            className={`
            w-10 h-6
          bg-gray-300
            peer-focus:outline-none
            rounded-full
            peer
            peer-checked:after:translate-x-full
            peer-checked:after:border-none
            after:content-['']
            after:absolute
            after:top-[4px]
            after:left-[4px]
          after:bg-white
          after:border-none
            after:border
            after:rounded-full
            after:h-4 after:w-4
            after:transition-all
          peer-checked:bg-blue-500
          `}
         ></div>
      </label>
   )
}

export default MSwitch
