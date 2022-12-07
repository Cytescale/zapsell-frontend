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
import MDropzone from '../../design/components/dropzone'
import brainstormBanner from '../../assets/vectors/abstract-brainstorm.png'
import moneyBanner from '../../assets/vectors/abstract-easy-money.png'
import logoutBanner from '../../assets/vectors/abstract-logged-out.png'
import uploadBanner from '../../assets/vectors/abstract-upload.png'
// import SiennaEditor from '../../editor'

const CurrenListMap = [
   { id: 0, name: 'Ruppes (INR)' },
   { id: 1, name: 'Ruppes (INR)' },
   { id: 2, name: 'Ruppes (INR)' },
   { id: 3, name: 'Ruppes (INR)' },
]

const DescriptionEdit = (props: any) => {
   const [show, setShow] = useState(false)
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
         className="flex flex-row gap-5 w-3/4 "
      >
         <div className="flex flex-col gap-5   w-2/3">
            {/* <MDropzone /> */}
            <ContentSkeleton
               banner={logoutBanner}
               icon={<i className="ri-file-line"></i>}
               title={'Product Description'}
               desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
               <div className="h-full w-full flex flex-row gap-4 justify-start">
                  <div className="text-black tracking-wide flex grow flex-row w-full">
                     <MInput
                        iserror
                        label="Display Name"
                        helperLine="Enter valid name"
                        fullWidth
                     />
                  </div>
                  <div className="text-black text-sm tracking-wide flex grow flex-row w-full">
                     <MInput
                        icon={'URL'}
                        label="Store URL"
                        fullWidth
                        rightButtonIcon={<i className="ri-file-copy-line"></i>}
                     />
                  </div>
               </div>
               {/* <SiennaEditor /> */}
               <MTextArea fullWidth label="Description"></MTextArea>
            </ContentSkeleton>
            <ContentSkeleton
               // banner={uploadBanner}
               icon={<i className="ri-file-line"></i>}
               title={'Media'}
               desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
               <MDropzone />
            </ContentSkeleton>
            <ContentSkeleton
               icon={<i className="ri-file-line"></i>}
               title={'Inventory'}
               desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
               <div className="flex flex-row justify-between items-center h-fit w-full">
                  <div className="flex flex-col w-fit gap-0.5">
                     <div className="text-sm text-black font-medium">
                        Inventory tracking
                     </div>
                     <div className="text-xs text-gray-500 font-medium w-fit">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </div>
                  </div>
                  <div className="flex flex-row justify-center h-full w-fit items-center">
                     <MSwitch type="switch" />
                  </div>
               </div>
               <div className="flex flex-row justify-between items-center h-fit w-full">
                  <div className="flex flex-col w-fit gap-0.5">
                     <div className="text-sm text-black font-medium ">
                        Limit Sales
                     </div>
                     <div className="text-xs text-gray-500 font-medium w-fit">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     </div>
                  </div>
                  <div className="flex flex-row justify-center h-full w-fit items-center">
                     <input
                        className="w-20 h-8 outline-none border border-solid border-gray-300 pl-3"
                        placeholder="INF"
                     />
                  </div>
               </div>
            </ContentSkeleton>
            <ContentSkeleton
               icon={<i className="ri-file-line"></i>}
               title={'General Settigs'}
               desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
               <div className="flex flex-row justify-between items-center h-fit w-full">
                  <div className="flex flex-col w-fit gap-0.5">
                     <div className="text-sm text-black font-medium">
                        Allow customers to choose a quantity
                     </div>
                  </div>
                  <div className="flex flex-row justify-center h-full w-fit items-center">
                     <MSwitch type="switch" />
                  </div>
               </div>
               <div className="flex flex-row justify-between items-center h-fit w-full">
                  <div className="flex flex-col w-fit gap-0.5">
                     <div className="text-sm text-black font-medium">
                        Publicly show the number of sales on your product page
                     </div>
                  </div>
                  <div className="flex flex-row justify-center h-full w-fit items-center">
                     <MSwitch type="switch" />
                  </div>
               </div>
               <div className="flex flex-row justify-between items-center h-fit w-full">
                  <div className="flex flex-col w-fit gap-0.5">
                     <div className="text-sm text-black font-medium">
                        Generate a unique license key per sale
                     </div>
                  </div>
                  <div className="flex flex-row justify-center h-full w-fit items-center">
                     <MSwitch type="switch" />
                  </div>
               </div>
               <div className="flex flex-row justify-between items-center h-fit w-full">
                  <div className="flex flex-col w-fit gap-0.5">
                     <div className="text-sm text-black font-medium">
                        Mark product as e-publication for VAT purposes
                     </div>
                  </div>
                  <div className="flex flex-row justify-center h-full w-fit items-center">
                     <MSwitch type="switch" />
                  </div>
               </div>
            </ContentSkeleton>
         </div>
         <div className="flex flex-col  gap-5 w-1/3">
            <ContentSkeleton
               icon={<i className="ri-file-line"></i>}
               title="Pricing"
               desc="Mark product as e-publication for VAT purposes"
            >
               <MInput label="Price" fullWidth />
               <MInput label="Compare Price" fullWidth />
               <MListBox listMap={CurrenListMap} label="Currency" fullWidth />
            </ContentSkeleton>
            <ContentSkeleton
               // banner={moneyBanner}
               icon={<i className="ri-file-line"></i>}
               title="Summary"
               desc="Mark product as e-publication for VAT purposes"
            >
               <MTextArea label="Summary" fullWidth />
            </ContentSkeleton>
         </div>
      </Transition>
   )
}

export default DescriptionEdit
