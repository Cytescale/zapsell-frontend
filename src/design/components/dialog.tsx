import classNames from 'classnames'
import MButton from './button'

interface MDialogProps {
   children?: React.ReactNode
   header: string
   isdismissable?: boolean
   fullwidth?: boolean
   type?: 'info' | 'warning' | 'danger'
}

const MDialog = ({
   children,
   header,
   isdismissable,
   type = 'info',
   fullwidth,
}: MDialogProps) => {
   return (
      <div
         className={classNames(
            'relative',
            'flex',
            'flex-row',
            fullwidth && 'w-full',
            'bg-blue-50',
            type == 'warning' && 'bg-yellow-100',
            type == 'danger' && 'bg-red-50',
            'first-letter',
            'p-4',
            'rounded-xl',
            'gap-3',
         )}
      >
         <div
            className={classNames(
               'text-blue-600',
               'text-xl flex flex-col justify-start',
               type == 'warning' && 'text-yellow-600',
               type == 'danger' && 'text-red-600',
            )}
         >
            {type == 'info' && <i className="ri-information-line"></i>}
            {type == 'warning' && <i className="ri-alarm-warning-line"></i>}
            {type == 'danger' && <i className="ri-error-warning-line"></i>}
         </div>
         <div className={`flex flex-col justify-center`}>
            <div
               className={classNames(
                  'text-sm ',
                  'text-blue-600',
                  'font-medium',
                  ' tracking-wide',
                  type == 'warning' && 'text-yellow-600',
                  type == 'danger' && 'text-red-600',
               )}
            >
               {header}
            </div>
            {children && (
               <div className={`text-sm text-black font-normal`}>
                  {children}
               </div>
            )}
         </div>
         {isdismissable && (
            <div className={`text-black text-xl `}>
               <i className="ri-close-line"></i>
            </div>
         )}
      </div>
   )
}

export default MDialog
