import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

export interface MBadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: 'success' | 'danger' | 'warning'
   size?: 'sm' | 'md' | 'xl'
}

const MBadge = (props: MBadgeProps) => {
   return (
      <div
         className={classNames(
            'h-fit',
            'w-fit',
            'text-xs',
            'bg-emerald-200',
            'text-black',
            'px-2',
            'py-1',
            'rounded-lg',
            props.size == 'md' && 'text-base px-3',
            props.variant == 'danger' && 'bg-red-200 text-red-800',
            props.variant == 'warning' && 'bg-yellow-100 text-yellow-800',
         )}
      >
         {props.children}
      </div>
   )
}

export default MBadge
