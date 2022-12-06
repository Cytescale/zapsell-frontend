const MSlidSwitch = (props: any) => {
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

const MCheckbox = (props: any) => {
   return (
      <div>
         <input
            className={`
                    form-check-input
                    appearance-none
                    h-4 w-4
                    border
                    border-gray-500
                    rounded-md
                    bg-white
                    checked:bg-emerald-200
                    checked:border-none
                    focus:outline-none
                    
                    transition
                    duration-200
                    mt-1
                    align-top
                    bg-no-repeat
                    bg-center
                    bg-contain
                    float-left
                    
                    cursor-pointer
            `}
            type="checkbox"
            value=""
         />
      </div>
   )
}

const MSwitch = (props: any) => {
   return props.type == 'switch' ? <MSlidSwitch /> : <MCheckbox />
}

export default MSwitch
