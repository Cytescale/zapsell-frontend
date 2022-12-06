import React, { useState } from 'react'
import classNames from 'classnames'
import PageHeaderPane from '../../design/components/header'
import { Menu } from '@headlessui/react'
import MButton from '../../design/components/button'
import MInput from '../../design/components/input'
import MModal from '../../design/components/modal'
import MListBox from '../../design/components/listbox'
import MDropDown from '../../design/components/dropdown'
import MSwitch from '../../design/components/switch'
import ProductEarningTable from './productEarningTable'

const ShowByListMap = [
   { id: 0, name: '1 Week' },
   { id: 1, name: '2 Week' },
   { id: 3, name: 'A Month' },
]

const EarningDownloadModal = (props: any) => {
   const [isOpen, setisOpen] = useState(false)

   return (
      <>
         <MButton
            onClick={() => setisOpen(true)}
            icon={<i className="ri-download-line"></i>}
         >
            Download CSV
         </MButton>
         <MModal isOpen={isOpen} setIsOpen={setisOpen}>
            <div className="flex flex-col bg-white shadow-xl rounded-md w-96 p-8">
               <div className="flex flex-row w-full justify-center items-center ">
                  <div className="flex flex-col w-12 h-12 bg-blue-100 justify-center items-center text-blue-500 rounded-full text-lg">
                     <i className="ri-download-line"></i>
                  </div>
               </div>
               <div className="flex flex-row grow justify-center items-center text-black font-medium text-md pt-3">
                  Download CSV
               </div>
               <div className="flex flex-row grow text-center justify-center items-center text-gray-700 font-normal text-sm pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam id libero vulputate.
               </div>
               <div className="flex flex-row grow justify-center items-center pt-5 gap-2">
                  <MButton
                     icon={<i className="ri-close-line"></i>}
                     onClick={() => {
                        setisOpen(false)
                     }}
                     fullWidth
                  >
                     Cancel
                  </MButton>
                  <MButton
                     variant="outline"
                     modifier="plain"
                     icon={<i className="ri-download-line"></i>}
                     fullWidth
                  >
                     Download
                  </MButton>
               </div>
            </div>
         </MModal>
      </>
   )
}

const EarningCard = (orops: any) => {
   return (
      <div className="p-7 px-6 flex flex-row grow gap-4 w-fit border border-solid border-gray-200 border-t-0 border-b-0 border-l-0">
         <div className="h-full p-0 flex justify-center items-center">
            <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-500 text-xl justify-center items-center flex">
               <i className="ri-coin-line"></i>
            </div>
         </div>
         <div className=" flex flex-col gap-1 justify-center">
            <div className="text-sm font-medium text-gray-700">
               Total Revenue
            </div>
            <div className="text-xl font-semibold text-black flex grow w-full flex-row justify-between gap-8">
               10,000 INR{' '}
               <div className="text-green-700 font-medium text-xs flex justify-center items-center h-fit bg-green-100 w-fit px-2 py-1 rounded-full">
                  <i className="ri-arrow-up-line"></i>100%
               </div>
            </div>
         </div>
      </div>
   )
}

const EarningProgress = (props: any) => {
   return (
      <div className="p-6  flex flex-col gap-2 grow bg-purple-50 justify-center rounded-t-md">
         <div className="flex flex-row gap-1 justify-between items-end">
            <div className="text-sm font-medium text-gray-700">
               Cumulative Earnings
            </div>
            <div className="text-sm font-medium text-purple-600">50%</div>
         </div>
         <div className="relative flex flex-row bg-purple-200 h-3 rounded-full">
            <div className="absolute top-0 left-0 bottom-0 h-full w-1/2 bg-purple-400 rounded-full" />
         </div>
         <div className="flex flex-row text-gray-500 text-xs font-medium justify-start items-center gap-1">
            5,000 INR out of 10,000 INR
         </div>
      </div>
   )
}

const EarningReading = (props: any) => {
   return (
      <div className="h-auto flex flex-row justify-between">
         <EarningCard />
         <EarningCard />
         <EarningCard />
         <EarningCard />
         {/* <EarningProgress /> */}
      </div>
   )
}

const ProductEarning = (props: any) => (
   <div className={classNames('overflow-y-scroll')}>
      <div className="p-32 pb-44  pt-20 bg-violet-700 bg-gradient-to-b from-violet-700 to-violet-800  w-screen h-fit flex flex-row grow justify-between items-center">
         <div className="flex flex-col w-fit justify-start items-start">
            <div className="text-white text-3xl font-medium tracking-wide">
               Earnings
            </div>
            <div className="text-violet-200 text-md ">
               You can details of all the created products
            </div>
         </div>
         <div className="flex flex-row justify-end items-center w-fit gap-4">
            {/* <ProductExportModal /> */}
            <div className="w-52 flex flex-row">
               <MListBox
                  icon={<i className="ri-calendar-line"></i>}
                  fullWidth
                  listMap={ShowByListMap}
                  textAlign="left"
               />{' '}
            </div>
            <EarningDownloadModal />
         </div>
      </div>
      <div className="relative p-32 pt-0 -mt-28 flex flex-col w-screen h-auto justify-center items-center">
         <div className="w-full  flex flex-col grow  bg-white rounded-md shadow-xl">
            <EarningReading />

            <ProductEarningTable />
         </div>
         <div className="text-sm text-gray-600 p-9 font-medium">
            Learn more about{' '}
            <a className="text-blue-500 underline underline-offset-4" href="#">
               Product Earnings <i className="ri-external-link-line"></i>
            </a>
         </div>
      </div>
   </div>
)

export default ProductEarning
