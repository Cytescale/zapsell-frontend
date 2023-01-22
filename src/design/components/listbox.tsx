import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import MButton from './button'
import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import { MButtonProps } from './button'
import MInput from './input'

export interface MListboxProps
   extends ButtonHTMLAttributes<HTMLButtonElement>,
      MButtonProps {
   label?: string
   helperLine?: string
   iserror?: boolean
   fullWidth?: boolean
   buttonVariant?: 'normal' | 'filled' | 'plain' | 'outline'
   listMap?: Object[]
   searchable?: boolean
}

const MListBox = (props: any) => {
   const [selectedItem, setselectedItem] = useState(props.listMap[0])
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
                  'text-gray-900',
                  'px-1',
               )}
            >
               {props.label}
            </div>
         )}
         <div className="relative w-full ">
            <Listbox value={selectedItem} onChange={setselectedItem}>
               <Listbox.Button className={'flex flex-col grow w-full'}>
                  <MButton
                     {...props}
                     fullWidth={props.fullWidth}
                     iserror={props.iserror}
                     rightIcon={<i className="ri-arrow-down-s-line"></i>}
                  >
                     {selectedItem.name}
                  </MButton>
               </Listbox.Button>
               <Listbox.Options
                  className={`
              z-40 absolute origin-top-right right-0 mt-2 w-full pb-2 pt-2 divide-gray-100 rounded-lg bg-white shadow-lg border border-solid border-gray-100   
         `}
               >
                  {props.searchable && (
                     <div className="px-3 py-2">
                        <MInput
                           fullWidth
                           icon={<i className="ri-search-2-line"></i>}
                           rightButtonIcon={<i className="ri-close-line"></i>}
                        />
                     </div>
                  )}

                  {props.listMap &&
                     props.listMap.map((person: any) => (
                        <Listbox.Option
                           key={person.id}
                           value={person}
                           className={`w-full p-2 pl-4 text-md text-black hover:bg-slate-100`}
                        >
                           {({ active, selected }) => (
                              <div className="relative flex flex-row items-center gap-2 text-sm ">
                                 {person.name}
                                 <div
                                    className={`w-5 h-5 flex font-bold justify-center items-center absolute right-0 mr-2`}
                                 >
                                    {selected ? (
                                       <i className="ri-check-line"></i>
                                    ) : null}
                                 </div>
                              </div>
                           )}
                        </Listbox.Option>
                     ))}
               </Listbox.Options>
            </Listbox>
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
      </div>
   )
}

export default MListBox
