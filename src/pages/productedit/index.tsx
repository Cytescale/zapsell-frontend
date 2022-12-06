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
import DescriptionEdit from './productdesc'
import PaymentEdit from './productpayment'

const ProductTabArr = [
   ['Description', '#description', <i className="ri-information-line"></i>],
   ['Content', '#content', <i className="ri-file-line"></i>],
   ['Payment', '#payment', <i className="ri-bank-card-line"></i>],
]

const ProductEditTabs = (props: any) => {
   const nac = useLocation()

   return (
      <div className="flex flex-row gap-8 shrink w-fit">
         {ProductTabArr.map((e: any) => {
            return (
               <a
                  className={classNames(
                     'py-2 pt-3',
                     'text-sm font-medium cursor-pointer',
                     'flex flex-row gap-1 items-center justify-center',
                     'hover:text-black',
                     nac.hash.includes(e[1])
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

const ProductEditTabSwtich = (props: any) => {
   const nav = useLocation()

   const hash = nav.hash
   switch (hash) {
      case ProductTabArr[0][1]: {
         return <DescriptionEdit />
      }
      case ProductTabArr[1][1]: {
         return <div>In Place</div>
      }
      case ProductTabArr[2][1]: {
         return <PaymentEdit />
      }

      default: {
         return <div>Page Not Found</div>
      }
   }
}

const ProductEdit = (props: any) => {
   return (
      <div
         className={classNames(
            'overflow-y-scroll  w-screen overflow-x-hidden relative',
         )}
      >
         <div className=" relative flex flex-row bg-slate-100 justify-between items-center h-fit w-screen pt-8 pb-0 px-64 border  border-t-0 border-solid border-slate-300">
            <div className="flex flex-col w-fit gap-1  pb-0">
               {/* <MBreadcrumbs /> */}
               <div className="text-black font-semibold text-2xl tracking-tight flex flex-row items-center gap-2">
                  Product Edit
                  <MBadge>Active</MBadge>
                  <div className="flex flex-col text-xs text-gray-600">
                     #digital
                  </div>
               </div>
               <ProductEditTabs />
            </div>
            <div className="flex flex-row gap-4 s">
               <MButton
                  variant="outline"
                  modifier="monochrome"
                  icon={<i className="ri-save-line"></i>}
               >
                  Save Changes
               </MButton>
               <MButton
                  variant="outline"
                  modifier="monochrome"
                  icon={<i className="ri-external-link-line"></i>}
               >
                  Preview Page
               </MButton>
               <MButton variant="outline" modifier="monochrome">
                  Unpublish
               </MButton>
            </div>
         </div>

         <div className="p-20 pt-12 bg-slate-100 flex justify-center">
            <ProductEditTabSwtich />
            {/* <DescriptionEdit /> */}
         </div>
      </div>
   )
}

export default ProductEdit
