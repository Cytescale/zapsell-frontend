import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import MButton from './button'

const MModal = (props: any) => {
   return (
      <Dialog
         open={props.isOpen}
         onClose={() => props.setIsOpen(false)}
         className={`relative z-50 `}
      >
         <div
            className="fixed inset-0 backdrop-blur-sm	 bg-black/40"
            aria-hidden="true"
         />
         <Dialog.Panel>
            <div className="fixed inset-0 flex items-center justify-center p-4">
               {props.children}
            </div>
         </Dialog.Panel>
      </Dialog>
   )
}

export default MModal
