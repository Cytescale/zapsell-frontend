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
   ['General', '##', <i className="ri-settings-3-line"></i>],
   ['Profile', '#', <i className="ri-user-line"></i>],
   ['Payout', '#', <i className="ri-bank-card-line"></i>],
   ['Password', '#', <i className="ri-key-line"></i>],
   ['Advanced', '#', <i className="ri-star-line"></i>],
]

const SettingsTabs = (props: any) => {
   return (
      <div className="flex flex-col w-56 gap-1">
         {ProductTabArr.map((e: any) => {
            return (
               <a
                  className={classNames(
                     'py-2 pt-3 px-3',
                     'text-sm font-medium ',
                     'flex flex-row gap-2 items-center justify-start rounded-md',
                     e[1].length > 1
                        ? 'text-blue-500 bg-blue-50'
                        : 'text-gray-500',
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

const GeneralSettings = (props: any) => {
   return (
      <div className="flex flex-row gap-5 w-3/4 ">
         <div className="flex flex-col gap-7  w-fit">
            <div className="bg-white   rounded-md border border-solid border-gray-200">
               <div className="flex flex-row gap-5 w-full p-8 pb-0 ">
                  <div className="flex flex-col justify-center items-center">
                     <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full text-xl bg-blue-100 text-blue-500">
                        <i className="ri-file-line"></i>
                     </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-gray-700 text-sm font-medium">
                        Profile Overview
                     </div>
                     <div className="text-gray-400 text-xs font-medium w-3/4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque laoreet fringilla neque, eu efficitur
                     </div>
                  </div>
               </div>
               <div className="p-8 flex flex-col grow items-center gap-6">
                  <div className="h-full w-full flex flex-col gap-4 justify-start">
                     <MInput
                        label="Username"
                        fullWidth
                        helperLine="set display name for your profile"
                     />
                  </div>
                  <div className="text-black text-sm tracking-wide flex grow flex-row w-full">
                     <MInput label="Email Address" fullWidth />
                  </div>
               </div>
            </div>
            <div className="bg-white   rounded-md border border-solid border-gray-200">
               <div className="flex flex-row gap-4 w-full p-8 pb-0 ">
                  <div className="flex flex-col justify-center items-center">
                     <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full text-xl bg-green-100 text-green-500">
                        <i className="ri-file-line"></i>
                     </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-gray-700 text-sm font-medium">
                        Notificatons
                     </div>
                     <div className="text-gray-400 text-xs font-medium w-3/4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque laoreet fringilla neque, eu efficitur
                     </div>
                  </div>
               </div>
               <div className="p-8 flex flex-col grow items-center gap-6">
                  <div className="flex flex-row justify-between items-center h-fit w-full">
                     <div className="flex flex-col w-fit gap-0.5">
                        <div className="text-sm text-black font-medium">
                           Purchase
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
                           Free Downloads
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
                           Refunds
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
               </div>
            </div>
            <div className="bg-white   rounded-md border border-solid border-gray-200">
               <div className="flex flex-row gap-4 w-full p-8 pb-0 ">
                  <div className="flex flex-col justify-center items-center">
                     <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full text-xl bg-yellow-100 text-yellow-500">
                        <i className="ri-file-line"></i>
                     </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <div className="text-gray-700 text-sm font-medium">
                        Support
                     </div>
                     <div className="text-gray-400 text-xs font-medium w-3/4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque laoreet fringilla neque, eu efficitur
                     </div>
                  </div>
               </div>
               <div className="p-8 flex flex-col grow items-center gap-6">
                  <div className="flex flex-row justify-between items-center h-fit w-full">
                     <div className="flex flex-col w-fit gap-0.5">
                        <div className="text-sm text-black font-medium">
                           Email Address
                        </div>
                        <div className="text-xs text-gray-500 font-medium w-fit">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit.
                        </div>
                     </div>
                     <div className="flex flex-row justify-center h-full w-fit items-center">
                        <MInput fullWidth />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

const MBreadcrumbs = (props: any) => {
   const location = useLocation()
   const [mapArr, setmapArr] = useState<string[]>([])
   useEffect(() => {
      const path = location.pathname
         .substring(1, location.pathname.length)
         .split('/')
      setmapArr(path)
   }, [])
   return (
      <div className="flex flex-row text-sm  gap-3 text-gray-400 items-center">
         {mapArr.map((e, i) => {
            return (
               <>
                  <a
                     href={'#'}
                     className={classNames(
                        i == mapArr.length - 1 && 'text-black',
                     )}
                  >
                     {e}
                  </a>
                  {i != mapArr.length - 1 && (
                     <div className="text-md h-full flex shrink justify-center items-center">
                        {/* <i className="ri-arrow-right-s-line"></i> */}/
                     </div>
                  )}
               </>
            )
         })}
      </div>
   )
}

const Settings = (props: any) => {
   return (
      <div
         className={classNames(
            'overflow-y-scroll  w-screen overflow-x-hidden relative',
         )}
      >
         <div className=" relative flex flex-row bg-gray-50 justify-between items-center h-fit w-screen pt-8 pb-8 px-36 border-b-2 border-solid border-gray-200 ">
            <div className="flex flex-col w-fit gap-1 ">
               {/* <MBreadcrumbs /> */}
               <div className="text-black font-semibold text-2xl tracking-tight flex flex-row items-start gap-2">
                  Personal Settings
                  <div className="flex flex-col text-xs text-gray-600">
                     #26419130
                  </div>
               </div>
               {/* <ProductEditTabs /> */}
            </div>
            <div className="flex flex-row h-full gap-">
               <MButton
                  variant="outline"
                  modifier="plain"
                  icon={<i className="ri-save-line"></i>}
               >
                  Save Changes
               </MButton>
            </div>
         </div>
         <div className="p-20 pt-12 bg-gray-50 flex justify-center flex-row gap-6">
            <SettingsTabs />
            <GeneralSettings />
         </div>
      </div>
   )
}

export default Settings
