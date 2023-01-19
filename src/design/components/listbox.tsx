//@ts-nocheck
//@ts-ignore
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
   helperline?: string
   iserror?: boolean
   fullwidth?: boolean
   buttonVariant?: 'normal' | 'filled' | 'plain' | 'outline'
   listmap?: Object[]
   searchable?: Boolean
}

const MListBox = (props: any) => {
   const [selectedItem, setselectedItem] = useState(props.listmap[0])
   return (
      <div
         className={classNames(
            'flex',
            'flex-col',
            'gap-1.5',
            props.fullwidth ? 'w-full' : 'w-fit',
         )}
      >
         {props.label && (
            <div
               className={classNames(
                  'font-medium',
                  'tracking-wide',
                  'text-xs',
                  'text-zinc-200',
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
                     textAlign="left"
                     variant="dark"
                     fullwidth={props.fullwidth}
                     iserror={props.iserror}
                     rightIcon={<i className="ri-arrow-down-s-line"></i>}
                  >
                     {selectedItem.name}
                  </MButton>
               </Listbox.Button>
               <Listbox.Options
                  className={`
               z-40 absolute origin-top-right right-0 mt-2 w-full pb-2 pt-2 divide-zinc-600 rounded-lg bg-zinc-800 shadow-xl border border-solid border-zinc-800   
         `}
               >
                  {props.searchable && (
                     <div className="px-3 py-2">
                        <MInput
                           fullwidth
                           icon={<i className="ri-search-2-line"></i>}
                           // rightButtonIcon={<i className="ri-close-line"></i>}
                        />
                     </div>
                  )}

                  {props.listmap &&
                     props.listmap.map((person: any) => (
                        <Listbox.Option
                           key={person.id}
                           value={person}
                           className={`w-full p-2 pl-4 text-md  text-white hover:bg-zinc-900`}
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
         {props.helperline && (
            <div
               className={classNames('font-medium', 'text-xs', 'text-zinc-400')}
            >
               {props.helperline}
            </div>
         )}
      </div>
   )
}

export default MListBox
