import { TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'

export interface MTextareaProps
   extends TextareaHTMLAttributes<HTMLInputElement> {
   placeholder?: string
   label?: string
   helperLine?: string
   isError?: boolean
   fullWidth?: boolean
   icon?: React.ReactElement
   rightButtonIcon?: React.ReactElement
}

const MTextArea = (props: MTextareaProps) => {
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
         <textarea
            className={`resize-y w-full border  border-gray-300 outline-none p-3 rounded-md text-sm`}
            placeholder="Placeholder placeholder text"
         />
         {props.helperLine && (
            <div
               className={classNames(
                  'font-medium',
                  'text-xs',
                  props.isError ? 'text-red-500' : 'text-gray-600',
               )}
            >
               {props.helperLine}
            </div>
         )}
      </div>
   )
}

export default MTextArea
