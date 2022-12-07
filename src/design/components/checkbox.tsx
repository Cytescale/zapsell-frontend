import React, { InputHTMLAttributes } from 'react'
import classNames from 'classnames'

interface MCheckboxProps
   extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
   size?: 'md' | 'lg' | 'sm'
   checked?: boolean
   defaultChecked?: boolean
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const defaultProps: MCheckboxProps = {
   size: 'sm',
}

const MCheckbox = (props: MCheckboxProps & typeof defaultProps) => {
   return (
      <div>
         <input
            checked={props.checked}
            id="m-checkbox"
            type="checkbox"
            onChange={props.onChange}
            value=""
            className={classNames(
               'form-check-input',
               'appearance-none',
               props.size == 'sm' && 'h-4 w-4',
               props.size == 'md' && 'h-5 w-5',
               props.size == 'lg' && 'h-6 w-6',
               'border',
               'border-gray-500 text-white',
               'rounded',
               'bg-white hover:bg-violet-100',
               `checked:bg-violet-500 checked:hover:bg-violet-800 checked:border-none `,
               'focus:outline-none',
               'transition duration-200',
               'mt-1',
               'align-top',
               'bg-no-repeat',
               'bg-center',
               'bg-contain',
               'float-left',
               'cursor-pointer',
            )}
         />
      </div>
   )
}
MCheckbox.defaultProps = defaultProps

export default MCheckbox
