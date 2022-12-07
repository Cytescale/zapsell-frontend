import React, { InputHTMLAttributes } from 'react'
import classNames from 'classnames'

const MSwitch = (props: any) => {
   return (
      <label className="inline-flex relative items-center cursor-pointer">
         <input type="checkbox" value="" className="sr-only peer" />
         <div
            className={`
            w-11 h-6
          bg-gray-300
            peer-focus:outline-none
            rounded-full
            peer
            peer-checked:after:translate-x-full
            peer-checked:after:border-none
            after:content-['']
            after:absolute
            after:top-[2px]
            after:left-[2px]
          after:bg-white
          after:border-none
            after:border
            after:rounded-full
            after:h-5 after:w-5
            after:transition-all
          peer-checked:bg-violet-500
          `}
         ></div>
      </label>
   )
}

export default MSwitch
