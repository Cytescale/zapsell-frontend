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
import moneyBanner from '../../assets/vectors/abstract-easy-money.png'

const AdditionInfoListMap = [
   {
      id: 0,
      name: 'Not Requied',
   },
   { id: 1, name: 'Requried' },
]

const PaymentEdit = (props: any) => {
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
         className="flex flex-row gap-5 w-3/4"
      >
         <div className="flex flex-col gap-5 w-2/3">
            <ContentSkeleton
               // banner={moneyBanner}
               icon={<i className="ri-file-line"></i>}
               title={'Checkout'}
               desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
               <MListBox
                  fullWidth
                  listMap={AdditionInfoListMap}
                  label="Additional Information"
               />
            </ContentSkeleton>
            <ContentSkeleton
               icon={<i className="ri-file-line"></i>}
               title={'Receipt Label'}
               desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
               <MInput label="Button" fullWidth />
            </ContentSkeleton>
         </div>
         <div className="flex flex-col  gap-5  w-1/3"></div>
      </Transition>
   )
}

export default PaymentEdit
