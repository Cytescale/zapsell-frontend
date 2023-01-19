import { Transition } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import MButton from './button'
import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

export interface MDropdownProps
   extends ButtonHTMLAttributes<HTMLButtonElement> {
   placeholder?: string
   label?: string
   helperLine?: string
   isError?: boolean
   fullWidth?: boolean
   dropButtom: React.ReactElement
}

const menu = ['Details', 'Edit', 'Print', 'Cancel']

const MDropDown = (props: MDropdownProps) => {
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
                  'font-medium',
                  'tracking-wide',
                  'text-sm',
                  'text-zinc-300',
                  'px-1',
               )}
            >
               {props.label}
            </div>
         )}
         <Menu>
            {({ open }) => (
               <div className="relative flex flex-col">
                  <Menu.Button>{props.dropButtom}</Menu.Button>
                  <Transition
                     className={``}
                     show={open}
                     enter="transition-opacity duration-95"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="transition-opacity duration-95"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <Menu.Items className="absolute origin-top-right right-0 mt-2 w-fit divide-y pb-2 pt-2 divide-gray-100 rounded-xl bg-white shadow-xl border border-solid border-gray-200  z-50 ">
                        <div className="flex flex-col">{props.children}</div>
                     </Menu.Items>
                  </Transition>
               </div>
            )}
         </Menu>

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
export default MDropDown
