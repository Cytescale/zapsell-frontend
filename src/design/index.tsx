import { useState } from 'react'
import MInput from './components/input'
import MButton from './components/button'
import MDialog from './components/dialog'
import MSwitch from './components/switch'
import MTextArea from './components/textarea'
import MDropDown from './components/dropdown'
import MModal from './components/modal'
import MBadge from './components/badge'
import MPill from './components/pill'
import MListBox from './components/listbox'
import { Menu } from '@headlessui/react'

const menu = ['Detaieels', 'Edit', 'Print', 'Cancel']

const HolderCont = (props: any) => {
   return (
      <div className="relative flex flex-col h-80 gap-4 justify-center items-center px-10 border-solid  border-gray-800 border-b-2 border-r-2">
         <div className="absolute top-0 left-0 text-sm text-gray-500 m-3">
            {props.title}
         </div>
         {props.children}
      </div>
   )
}

const people = [
   { id: 1, name: 'Required' },
   { id: 2, name: 'Not Required' },
]

const TestPage = (props: any) => {
   const [isOpen, setisOpen] = useState(false)
   return (
      <>
         <div className=" bg-white grid grid-cols-4 grid-flow-row overflow-y-scroll">
            <HolderCont title="Text input">
               <MInput
                  tagable
                  value="Default value with tags"
                  icon={<i className="ri-search-2-line"></i>}
                  rightButtonIcon={<i className="ri-close-fill"></i>}
               />
               <MInput
                  fullWidth
                  iserror
                  icon={<i className="ri-mail-line"></i>}
                  helperLine="This is a helper line"
                  label="Email address"
               />
            </HolderCont>

            <HolderCont title="Textarea">
               <MTextArea
                  fullWidth
                  label="Textarea label"
                  helperLine="this is a helperline"
               />
            </HolderCont>
            <HolderCont title="Button">
               <MButton
                  variant="plain"
                  textAlign="left"
                  fullWidth
                  rightIcon={<i className="ri-arrow-down-s-line"></i>}
               >
                  Save
               </MButton>
               <MButton
                  //   fullWidth
                  icon={<i className="ri-download-line"></i>}
                  variant="normal"
               >
                  Download
               </MButton>
               <MButton
                  variant="filled"
                  rounded="full"
                  icon={<i className="ri-close-fill"></i>}
               >
                  Cancel
               </MButton>
               <MButton
                  variant="plain"
                  rounded="none"
                  icon={<i className="ri-close-fill"></i>}
               >
                  Cancel
               </MButton>
            </HolderCont>

            <HolderCont title="Checkbox">
               <MSwitch />
            </HolderCont>
            <HolderCont title="Switch">
               <MSwitch type="switch" />
            </HolderCont>
            <HolderCont title="Dropdown">
               <MDropDown
                  dropButtom={
                     <MButton icon={<i className="ri-more-2-fill"></i>} />
                  }
               />

               <MDropDown
                  label="Placeholder"
                  dropButtom={
                     <MButton
                        fullWidth
                        variant="outline"
                        rightIcon={<i className="ri-arrow-down-s-line"></i>}
                     >
                        Dropdown
                     </MButton>
                  }
                  fullWidth
               >
                  {menu.map((e) => {
                     return (
                        <Menu.Item>
                           <a
                              className={`w-40 p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                              href="/account-settings"
                           >
                              <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                                 <i className="ri-home-5-line text-lg  flex justify-center items-center h-max"></i>
                                 {e}
                              </div>
                           </a>
                        </Menu.Item>
                     )
                  })}
               </MDropDown>
            </HolderCont>
            <HolderCont title="Modal">
               <MButton onClick={() => setisOpen(true)}>Modal</MButton>
               <MModal isOpen={isOpen} setIsOpen={setisOpen} />
            </HolderCont>
            <HolderCont title="ListBox">
               <MListBox
                  label="Placeholder"
                  fullWidth
                  searchable
                  textAlign="left"
                  variant="outline"
                  listMap={people}
                  //   buttonVariant="outline"
                  t="outline"
               />
            </HolderCont>
            <HolderCont title="Badge">
               <MBadge>Success</MBadge>
               {/* <MBadge size="md">Success</MBadge> */}
               <MBadge variant="warning">Warning</MBadge>
               <MBadge variant="danger">Danger</MBadge>
            </HolderCont>
            <HolderCont title="Dialog">
               <MDialog header="Dialog Placeholder" type="danger">
                  This is a dialog box content with the content and the
                  somehting content
               </MDialog>
            </HolderCont>
            <HolderCont title="Pill">
               <MPill>Pill holder</MPill>
            </HolderCont>
         </div>
      </>
   )
}

export default TestPage
