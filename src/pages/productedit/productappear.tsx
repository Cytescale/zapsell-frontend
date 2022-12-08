import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import PageHeaderPane from '../../design/components/header'
import { Menu } from '@headlessui/react'
import MButton from '../../design/components/button'
import MInput from '../../design/components/input'
import MModal from '../../design/components/modal'
import MListBox from '../../design/components/listbox'
import MDropDown from '../../design/components/dropdown'
import MSwitch from '../../design/components/switch'
import MTextArea from '../../design/components/textarea'
import MBadge from '../../design/components/badge'
import { ContentSkeleton } from './utils'
import { Transition } from '@headlessui/react'
import careBanner from '../../assets/vectors/help-and-care.png'

const themeMap = [
   { id: 0, name: 'Plain' },
   { id: 1, name: 'Rose' },
   { id: 2, name: 'Lavender' },
   { id: 3, name: 'Mecury' },
   { id: 4, name: 'Teel' },
]

const AppearanceEdit = (props: any) => {
   const [show, setShow] = useState(false)
   const [themeIdSelec, setthemeIdSelec] = useState<number>(0)

   useEffect(() => {
      setShow(true)
      return () => {
         setShow(false)
      }
   }, [])
   return (
      <Transition
         show={show}
         enter="transition-opacity duration-190 "
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="transition-opacity duration-150"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
         className="flex flex-row gap-5 w-3/4"
      >
         <div className="flex flex-col gap-5 w-full">
            <ContentSkeleton
               icon={<i className="ri-brush-3-line"></i>}
               title={'Storefront Appearance'}
               desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Pellentesque laoreet fringilla neque, eu efficitur"
            >
               <div className="flex flex-col gap-7 w-full grow h-fit">
                  <div className="flex flex-col gap-3">
                     <div className="text-sm font-medium text-black">
                        Accent Color
                     </div>
                     <div
                        className={classNames(
                           'flex flex-row gap-3 w-full items-center cursor-pointer',
                        )}
                     >
                        <div
                           className={classNames(
                              'w-6 h-6 rounded-full bg-red-500 cursor-pointer  hover:opacity-50',
                           )}
                        />
                        <div
                           className={classNames(
                              'w-6 h-6 rounded-full bg-yellow-500 cursor-pointer  hover:opacity-50',
                              'border-4 border-solid border-blue-500',
                           )}
                        />

                        <div
                           className={classNames(
                              'w-6 h-6 rounded-full bg-indigo-500 cursor-pointer  hover:opacity-50',
                           )}
                        />
                        <div
                           className={classNames(
                              'w-6 h-6 rounded-full bg-blue-500 cursor-pointer  hover:opacity-50',
                           )}
                        />
                        <div
                           className={classNames(
                              'w-6 h-6 rounded-full bg-purple-500 cursor-pointer  hover:opacity-50',
                           )}
                        />
                        <div
                           className={classNames(
                              'w-6 h-6 rounded-full bg-violet-500 cursor-pointer  hover:opacity-50',
                           )}
                        />
                     </div>
                  </div>
                  <div className="flex flex-col gap-3 grow w-full h-fit">
                     <div className="text-sm font-medium text-black">
                        Store theme
                     </div>
                     <div className="grid grid-cols-3 gap-5">
                        {themeMap.map((e: any, i: number) => {
                           return (
                              <div
                                 onClick={(e) => {
                                    setthemeIdSelec(i)
                                 }}
                                 className={classNames(
                                    'relative col-span-1 flex flex-col rounded-xl cursor-pointer hover:opacity-60 border border-solid border-slate-300',
                                    themeIdSelec == i &&
                                       'border-2 border-solid border-violet-600',
                                 )}
                              >
                                 <div className=" h-40  flex flex-row bg-gray-300  bg-gradient-to-b from-gray-200 to-gray-200   rounded-t-xl m-0"></div>
                                 <div className="relative h-auto p-3  gap-2 text-sm text-black font-medium flex flex-row justify-start items-center">
                                    <div>{e.name}</div>
                                    {themeIdSelec == i && (
                                       <i className="ri-checkbox-circle-fill text-xl text-violet-600 font-normal rounded-md absolute top-0 right-0  mx-2 my-1"></i>
                                    )}
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </div>
            </ContentSkeleton>
         </div>
      </Transition>
   )
}

export default AppearanceEdit
