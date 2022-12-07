import React, { useState } from 'react'
import classNames from 'classnames'
import PageHeaderPane from '../../design/components/header'
import { Menu } from '@headlessui/react'
import MButton from '../../design/components/button'
import MInput from '../../design/components/input'
import ProductListingTable from './productListingTable'
import MModal from '../../design/components/modal'
import MListBox from '../../design/components/listbox'
import MDropDown from '../../design/components/dropdown'
import MSwitch from '../../design/components/switch'
import MCheckbox from '../../design/components/checkbox'

const ProductAddModal = (props: any) => {
   const [isOpen, setisOpen] = useState(false)

   const ProductCatMap = [
      { id: 0, name: 'Design' },
      { id: 1, name: 'Artwork' },
      { id: 2, name: 'Course' },
      { id: 3, name: 'Template' },
      { id: 3, name: 'Misc' },
   ]

   return (
      <>
         <MButton
            onClick={() => setisOpen(true)}
            icon={<i className="ri-add-line"></i>}
            size={'md'}
         >
            Add Product
         </MButton>
         <MModal isOpen={isOpen} setIsOpen={setisOpen}>
            <div className="flex flex-col bg-white shadow-xl rounded-md w-96 p-8">
               <div className="flex flex-row w-full justify-start items-center ">
                  <div className="flex flex-col w-12 h-12 bg-violet-100 justify-center items-center text-violet-500 rounded-full text-lg">
                     <i className="ri-shopping-bag-line"></i>
                  </div>
               </div>
               <div className="flex flex-row grow justify-start items-center text-black font-medium text-lg pt-3">
                  Add Product
               </div>
               <div className="flex flex-row grow text-left justify-start items-center text-gray-700 font-normal text-xs pt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam id libero vulputate.
               </div>
               <div className="flex flex-col pt-5 gap-3">
                  <MInput fullWidth label="Name"></MInput>
                  <MInput
                     iserror
                     helperLine="Enter price for the product"
                     fullWidth
                     icon={<i className="ri-money-dollar-circle-fill"></i>}
                     label="Price"
                  ></MInput>
                  <MListBox
                     label="Category"
                     variant="outline"
                     listMap={ProductCatMap}
                     fullWidth
                  ></MListBox>
               </div>
               <div className="flex flex-row grow justify-center items-center pt-5 gap-2">
                  <MButton
                     modifier="plain"
                     icon={<i className="ri-add-line"></i>}
                     fullWidth
                  >
                     Add Product
                  </MButton>
               </div>
            </div>
         </MModal>
      </>
   )
}

const ProductExportModal = (props: any) => {
   const [isOpen, setisOpen] = useState(false)

   return (
      <>
         <MButton
            // variant="outline"
            onClick={() => setisOpen(true)}
            icon={<i className="ri-file-chart-line"></i>}
         >
            Export
         </MButton>
         <MModal isOpen={isOpen} setIsOpen={setisOpen}>
            <div className="flex flex-col bg-white shadow-xl rounded-md w-96 p-8">
               <div className="flex flex-row w-full justify-center items-center ">
                  <div className="flex flex-col w-12 h-12 bg-blue-100 justify-center items-center text-blue-500 rounded-full text-lg">
                     <i className="ri-file-chart-line"></i>
                  </div>
               </div>
               <div className="flex flex-row grow justify-center items-center text-black font-medium text-md pt-3">
                  Export Product Data
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

const ProductSortDropdown = (props: any) => {
   const SortArr = [
      'a-z',
      'z-a',
      'Newest Product',
      'Oldest Product',
      'Most Sold Product',
      'Least Sold Product',
      'Least Sold Product',
      'Newest Updated',
      'Oldest Updated',
   ]

   return (
      <MDropDown
         dropButtom={
            <MButton icon={<i className="ri-sort-asc"></i>}>
               Sort by (a-z)
            </MButton>
         }
      >
         {SortArr.map((e) => {
            return (
               <Menu.Item>
                  <button
                     className={`w-56 p-1.5 pl-4 h-9 text-sm text-black hover:bg-slate-100`}
                  >
                     <div className="flex flex-row gap-3 text-sm items-center p-0 tracking-wide ">
                        <MCheckbox />
                        {e}
                     </div>
                  </button>
               </Menu.Item>
            )
         })}
      </MDropDown>
   )
}

const ProductToolbar = (prosp: any) => {
   return (
      <div className="flex flex-row p-6 justify-between items-center  border-b-solid border-b-2 border-gray-100">
         <div className="flex flex-row gap-3 w-fit h-fit ">
            <MInput
               icon={<i className="ri-search-2-line"></i>}
               rightButtonIcon={<i className="ri-close-line"></i>}
            />
            <MButton
               // variant="outline"
               icon={<i className="ri-restart-line text-base"></i>}
            />
            <ProductSortDropdown />

            <ProductExportModal />
         </div>
         <div></div>
      </div>
   )
}

const ProductMultiSelectToolbar = (props: any) => {
   return (
      <div className="flex flex-row p-6 justify-between items-center bg-violet-100 rounded-t-xl  border-b-solid border-b-2 border-gray-100">
         <div className="flex flex-row gap-3 w-fit h-fit px-2 text-violet-700 font-medium items-center">
            <span className="w-9 h-9 flex justify-center items-center rounded-full bg-violet-200">
               2
            </span>{' '}
            Product Selected
         </div>
         <div className="flex flex-row gap-3">
            <MButton
               icon={<i className="ri-close-line"></i>}
               modifier="monochrome"
               variant="white"
            >
               Delist
            </MButton>
            <MButton
               icon={<i className="ri-delete-bin-2-line"></i>}
               modifier="danger"
               variant="white"
            >
               Delete
            </MButton>
         </div>
      </div>
   )
}

const ProductListing = (props: any) => {
   return (
      <div className={classNames('overflow-y-scroll')}>
         <div className="p-32 pb-44  pt-20 bg-violet-700 bg-gradient-to-b from-violet-700 to-violet-800  w-screen h-fit flex flex-row grow justify-between items-center">
            <div className="flex flex-col w-fit justify-start items-start">
               <div className="text-white text-3xl font-medium tracking-normal flex flex-row gap-1">
                  Products<span>🎉</span>
               </div>
               <div className="text-violet-200 text-md ">
                  You can details of all the created products
               </div>
            </div>
            <div className="flex flex-row justify-end items-center w-fit gap-4">
               <ProductAddModal />
            </div>
         </div>
         <div className="relative p-32 pt-0 -mt-28 flex flex-col w-screen h-auto justify-center items-center">
            <div className="w-full bg-white rounded-xl shadow-lg flex flex-col grow ">
               <ProductToolbar />
               <ProductListingTable />
            </div>
            <div className="text-sm text-gray-600 p-9 font-medium">
               Learn more about{' '}
               <a
                  className="text-blue-500 underline underline-offset-4"
                  href="#"
               >
                  Product Listing <i className="ri-external-link-line"></i>
               </a>
            </div>
         </div>
      </div>
   )
}
export default ProductListing
