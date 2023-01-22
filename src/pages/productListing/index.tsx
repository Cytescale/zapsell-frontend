import React, { useState, useEffect } from 'react'
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
import { Transition } from '@headlessui/react'

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
         <button
            onClick={() => setisOpen(true)}
            className={
               'bg-violet-600 text-white text-sm flex justify-center items-center gap-2 px-5 py-3 rounded-md  shadow hover:bg-violet-800'
            }
         >
            <i className="ri-add-fill"></i>
            Add Product
         </button>
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
               <div className="flex flex-col pt-5 gap-4">
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
            variant="normal"
            onClick={() => setisOpen(true)}
            icon={<i className="ri-upload-line"></i>}
            // icon={<i className="ri-file-chart-line"></i>}
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
            <MButton variant="normal">
               <span className="text-gray-400">Sort by</span> a-z
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

const ProductToolbar = (props: any) => {
   const [show, setshow] = useState<boolean>(false)

   useEffect(() => {
      if (props.selecProdList && props.selecProdList.length > 0) {
         setshow(true)
      } else {
         setshow(false)
      }
   }, [props.selecProdList])
   return (
      <>
         {show ? (
            <Transition
               show={show}
               enter="transition-opacity duration-1000"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="transition-opacity duration-150"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
               className="flex flex-row justify-between items-center bg-violet-50 rounded-t-xl  border-b-solid border-b-2 border-gray-100"
            >
               <div className="flex flex-row gap-3 w-fit h-fit px-2 text-sm text-violet-700 font-medium items-center">
                  <span className="w-9 h-9 text-sm flex justify-center items-center rounded-full bg-violet-200">
                     {props.selecProdList.length}
                  </span>{' '}
                  Product Selected
                  <MButton
                     modifier="plain"
                     variant="transparent"
                     size="xs"
                     icon={<i className="ri-add-line"></i>}
                  >
                     Select all products
                  </MButton>
               </div>
               <div className="flex flex-row gap-0 h-9">
                  <button
                     onClick={() => {
                        props.setselecProdList([])
                     }}
                     className="text-sm font-medium  text-violet-800 hover:bg-violet-100 px-3 rounded-md  "
                  >
                     Deselect
                  </button>
                  <button className="text-sm font-medium  text-violet-800 hover:bg-violet-100 px-3 rounded-md  ">
                     Unpublish
                  </button>
                  <button className="text-sm font-medium  text-red-600 hover:bg-violet-100 px-3 rounded-md  ">
                     Delete
                  </button>
               </div>
            </Transition>
         ) : (
            <Transition
               show={!show}
               enter="transition-opacity duration-250"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="transition-opacity duration-150"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
               className="flex flex-row justify-between items-center"
            >
               <div className="flex flex-row gap-3 w-full h-fit ">
                  <MInput
                     icon={<i className="ri-search-2-line"></i>}
                     rightButtonIcon={<i className="ri-close-line"></i>}
                  />
                  <MButton
                     modifier="monochrome"
                     variant="normal"
                     icon={<i className="ri-restart-line text-base"></i>}
                  />
                  <ProductSortDropdown />
                  <MButton variant="normal">Filter</MButton>{' '}
                  <MDropDown
                     dropButtom={
                        <MButton
                           variant="normal"
                           modifier="monochrome"
                           rightIcon={<i className="ri-arrow-down-s-line"></i>}
                        >
                           Status
                        </MButton>
                     }
                  >
                     <Menu.Item>
                        <a
                           className={`w-40 p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                           href="/account-settings"
                        >
                           <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                              Active
                           </div>
                        </a>
                     </Menu.Item>
                     <Menu.Item>
                        <a
                           className={`w-40 p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                           href="/account-settings"
                        >
                           <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                              Drafted
                           </div>
                        </a>
                     </Menu.Item>
                     <Menu.Item>
                        <a
                           className={`w-40 p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                           href="/account-settings"
                        >
                           <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                              Unpublished
                           </div>
                        </a>
                     </Menu.Item>
                  </MDropDown>
                  <ProductExportModal />
               </div>
            </Transition>
         )}
      </>
   )
}

const ProductListing = (props: any) => {
   const [selecProdList, setselecProdList] = useState<Array<any>>([])

   return (
      <div
         className={classNames(
            'overflow-y-scroll',
            'overflow-x-hidden ',
            'w-full',
         )}
      >
         <div className="p-24 pt-16 pb-16 w-full h-fit flex flex-row grow justify-between items-center ">
            <div className="flex flex-col w-fit justify-start items-start">
               <div className="text-gray-800 font-medium text-xl tracking-normal flex flex-row gap-1">
                  Enlisted 10 Products
               </div>
               <div className="text-gray-400 text-sm ">
                  You can details of all the created products
               </div>
            </div>
            <div className="flex flex-row justify-end items-center w-fit gap-4">
               <ProductAddModal />
            </div>
         </div>
         <div className="relative p-24 pt-0 flex flex-col w-full h-auto justify-center items-center">
            <div className="w-full bg-white rounded-xl flex flex-col grow gap-6">
               <ProductToolbar
                  selecProdList={selecProdList}
                  setselecProdList={setselecProdList}
               />
               <ProductListingTable
                  setselecProdList={setselecProdList}
                  selecProdList={selecProdList}
               />
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
