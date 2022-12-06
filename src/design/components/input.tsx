import {
   ChangeEventHandler,
   InputHTMLAttributes,
   useEffect,
   useState,
} from 'react'
import classNames from 'classnames'
import MPill from './pill'

export interface MInputProps extends InputHTMLAttributes<HTMLInputElement> {
   placeholder?: string
   label?: string
   helperLine?: string
   iserror?: boolean
   fullWidth?: boolean
   icon?: React.ReactElement | string
   tagable?: boolean
   rightButtonIcon?: React.ReactElement
   value?: string
}

const MInput = (props: MInputProps) => {
   const [value, setValue] = useState<string>('')
   const [tags, setTags] = useState<string[]>([])
   useEffect(() => {
      props.value && setValue(props.value)
   }, [])

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let vale = e.currentTarget.value
      const valArr = vale.split(' ')
      if (valArr.length > 1 && props.tagable) {
         let ci = 0
         for (let fi = 0; fi <= vale.length - 1; fi++) {
            if (vale[fi] == ' ') {
               ci = fi
            }
         }

         valArr.forEach((e) => {
            if (e.trim().length > 0) {
               tags.push(e)
            }
         })

         console.log(valArr)
         const newStr = vale.substring(ci, ci + vale.length)
         setValue(newStr.trim())
         // setTags(tags)
      } else {
         setValue(vale)
      }
   }

   return (
      <div
         className={classNames(
            'flex',
            'flex-col',
            'gap-1.5',
            props.fullWidth ? 'w-full' : 'w-fit',
         )}
      >
         {props.label && (
            <div
               className={classNames(
                  'font-semibold',
                  'tracking-normal',
                  'text-sm',
                  'text-gray-700',
               )}
            >
               {props.label}
            </div>
         )}

         <div
            className={classNames(
               'h-9',
               'flex',
               'flex-row',
               // 'gap-1',
               'border',
               'rounded-md',

               'border-gray-300',
               props.iserror ? 'border-red-400' : 'border-gray-300',
               'px-3',
               'pr-0',
            )}
         >
            {props.icon && (
               <div
                  className={classNames(
                     'flex',
                     'justify-center',
                     'pr-2',
                     'items-center',
                     'h-full',
                     'text-gray-400',
                  )}
               >
                  {props.icon}
               </div>
            )}

            <input
               className={classNames(
                  'font-medium',
                  'text-sm',
                  'w-full',
                  'h-full',
                  'bg-transparent',

                  'outline-none',
                  'border-none',
               )}
               placeholder="Input placeholder"
               value={value}
               onChange={handleChange}
            />
            {props.rightButtonIcon && (
               <div
                  className={classNames(
                     'flex',
                     'flex-col',
                     'justify-center',
                     'items-center',
                     'h-full',
                     'text-xl',
                     'w-fit',
                     'pr-3',
                     'text-black',
                  )}
               >
                  <button>{props.rightButtonIcon}</button>
               </div>
            )}
         </div>
         {props.helperLine && (
            <div
               className={classNames(
                  'font-medium',
                  'text-xs',
                  props.iserror ? 'text-red-500' : 'text-gray-600',
               )}
            >
               {props.helperLine}
            </div>
         )}
         {props.tagable && tags && tags.length > 0 && (
            // <div className="w-fit">
            <div className="flex flex-row gap-1.5 flex-wrap	">
               {tags.map((e, i) => {
                  return <MPill>{e}</MPill>
               })}
            </div>
            // </div>
         )}
      </div>
   )
}
export default MInput
