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

const ProductTabArr = [
   ['Description', '##', <i className="ri-information-line"></i>],
   ['Content', '#', <i className="ri-file-line"></i>],
   ['Payment', '#', <i className="ri-bank-card-line"></i>],
   ['Settings', '#', <i className="ri-settings-3-line"></i>],
]

const ProductEditTabs = (props: any) => {
   return (
      <div className="flex flex-row gap-8 shrink w-fit">
         {ProductTabArr.map((e: any) => {
            return (
               <a
                  className={classNames(
                     'py-2 pt-3',
                     'text-sm font-medium ',
                     'flex flex-row gap-1 items-center justify-center',
                     e[1].length > 1
                        ? 'text-black border-b-2 border-solid border-black py-3'
                        : 'text-gray-400',
                  )}
                  href={e[1]}
               >
                  {e[2]}
                  {e[0]}
               </a>
            )
         })}
      </div>
   )
}

const CurrenListMap = [
   { id: 0, name: 'Ruppes (INR)' },
   { id: 1, name: 'Ruppes (INR)' },
   { id: 2, name: 'Ruppes (INR)' },
   { id: 3, name: 'Ruppes (INR)' },
]

const DescriptionEdit = (props: any) => {
   return (
      <div className="flex flex-row gap-5 w-3/4 ">
         <div className="flex flex-col gap-5  w-fit">
            <div className="bg-white   rounded-md border border-solid border-gray-200 shadow-sm   ">
               <div className="flex flex-row gap-4 w-full p-8 pb-0 ">
                  <div className="flex flex-col justify-center items-center">
                     <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full text-xl bg-blue-100 text-blue-500">
                        <i className="ri-file-line"></i>
                     </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-gray-700 text-sm font-medium">
                        Product Description
                     </div>
                     <div className="text-gray-400 text-xs font-medium w-3/4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque laoreet fringilla neque, eu efficitur
                     </div>
                  </div>
               </div>
               <div className="p-8 flex flex-col items-center gap-6">
                  <div className="h-full w-full flex flex-row gap-4 justify-start">
                     <div className="text-black tracking-wide flex grow flex-row w-full">
                        <MInput label="Display Name" fullWidth />
                     </div>
                     <div className="text-black text-sm tracking-wide flex grow flex-row w-full">
                        <MInput
                           icon={'URL'}
                           label="Store URL"
                           fullWidth
                           rightButtonIcon={
                              <i className="ri-file-copy-line"></i>
                           }
                        />
                     </div>
                  </div>
                  <MTextArea fullWidth label="Description"></MTextArea>
               </div>
            </div>
            <div className="bg-white rounded-md border border-solid border-gray-200 shadow-sm">
               <div className="flex flex-row gap-4 w-full p-8 pb-0 ">
                  <div className="flex flex-col justify-center items-center">
                     <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full text-xl bg-red-100 text-red-500">
                        <i className="ri-file-line"></i>
                     </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-gray-700 text-sm font-medium">
                        Media
                     </div>
                     <div className="text-gray-400 text-xs font-medium w-3/4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque laoreet fringilla neque, eu efficitur
                     </div>
                  </div>
               </div>
               <div className="p-8 flex flex-col items-center gap-5"></div>
            </div>
            <div className="bg-white rounded-md  border border-solid border-gray-200 shadow-sm">
               <div className="flex flex-row gap-4 w-full p-8 pb-0 ">
                  <div className="flex flex-col justify-center items-center">
                     <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full text-xl bg-yellow-100 text-yellow-500">
                        <i className="ri-file-line"></i>
                     </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-gray-700 text-sm font-medium">
                        Inventory
                     </div>
                     <div className="text-gray-400 text-xs font-medium w-3/4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque laoreet fringilla neque, eu efficitur
                     </div>
                  </div>
               </div>
               <div className="p-8 flex flex-col items-center gap-6">
                  <div className="flex flex-row justify-between items-center h-fit w-full">
                     <div className="flex flex-col w-fit gap-0.5">
                        <div className="text-sm text-black font-medium">
                           Inventory tracking
                        </div>
                        <div className="text-xs text-gray-500 font-medium w-fit">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit.
                        </div>
                     </div>
                     <div className="flex flex-row justify-center h-full w-fit items-center">
                        <MSwitch type="switch" />
                     </div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-fit w-full">
                     <div className="flex flex-col w-fit gap-0.5">
                        <div className="text-sm text-black font-medium">
                           Limit Sales
                        </div>
                        <div className="text-xs text-gray-500 font-medium w-fit">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit.
                        </div>
                     </div>
                     <div className="flex flex-row justify-center h-full w-fit items-center">
                        <MSwitch type="switch" />
                     </div>
                  </div>
                  <div className="flex flex-row justify-between items-center h-fit w-full">
                     <div className="flex flex-col w-fit gap-0.5">
                        <div className="text-sm text-black font-medium">
                           Quantity
                        </div>
                        <div className="text-xs text-gray-500 font-medium w-fit">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit.
                        </div>
                     </div>
                     <div className="flex flex-row justify-center h-full w-fit items-center">
                        <input
                           className="w-20 h-8 outline-none border border-solid border-gray-300 pl-3"
                           placeholder="INF"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-col  gap-5">
            <div className="bg-white rounded-md w-80 border border-solid border-gray-200">
               <div className="text-gray-700 text-base p-8 pb-0 font-medium">
                  Pricing
               </div>
               <div className="flex flex-col p-8 pt-4 gap-5 justify-between items-center h-fit w-full">
                  <MInput label="Price" fullWidth />
                  <MInput label="Compare Price" fullWidth />
                  <MListBox
                     listMap={CurrenListMap}
                     label="Currency"
                     fullWidth
                  />
               </div>
            </div>
            <div className="bg-white rounded-md w-58 border border-solid border-gray-200">
               <div className="text-gray-700 text-base p-8  pb-0 font-medium">
                  Summary
               </div>
               <div className="flex flex-col p-8 pt-4 gap-5 justify-between items-center h-fit w-full">
                  <MTextArea label="Summary" fullWidth />
               </div>
            </div>
         </div>
      </div>
   )
}

const ProductEdit = (props: any) => {
   return (
      <div
         className={classNames(
            'overflow-y-scroll  w-screen overflow-x-hidden relative',
         )}
      >
         <div className=" relative flex flex-row bg-gray-50 justify-between items-center h-fit w-screen pt-8 pb-0 px-64 border-b-2 border-solid border-gray-200 ">
            <div className="flex flex-col w-fit gap-1  pb-0">
               {/* <MBreadcrumbs /> */}
               <div className="text-black font-semibold text-2xl tracking-tight flex flex-row items-start gap-2">
                  Product Edit
                  <div className="flex flex-col text-xs text-gray-600">
                     #digital
                  </div>
               </div>
               <ProductEditTabs />
            </div>
            <div className="flex flex-row gap-4 ">
               <MButton
                  variant="outline"
                  modifier="plain"
                  icon={<i className="ri-save-line"></i>}
               >
                  Save Changes
               </MButton>
               <MButton
                  variant="outline"
                  modifier="plain"
                  icon={<i className="ri-external-link-line"></i>}
               >
                  Preview Page
               </MButton>
            </div>
         </div>
         <div className="p-20 pt-12 bg-gray-50 flex justify-center">
            <DescriptionEdit />
         </div>
      </div>
   )
}

export default ProductEdit
