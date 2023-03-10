import {
   PointerEvent,
   FocusEvent,
   useEffect,
   useRef,
   useState,
   CSSProperties,
} from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import MButton from './button'
import { Menu } from '@headlessui/react'
import MDropDown from './dropdown'
import MModal from './modal'

const topbarLinkArr = [
   ['Home', '#'],
   ['Reports', '#'],
   ['Customers', '#'],
   ['Products', '/products'],
   ['Earnings', '/earnings'],
   ['UiTest', '/uitest'],
]

const LogoutModal = (props: any) => {
   const [isOpen, setisOpen] = useState(false)

   return (
      <>
         <button
            className={`w-full h-9 items-center justify-start text-sm text-red-500 hover:bg-slate-100`}
            onClick={() => setisOpen(true)}
         >
            <div className="flex flex-row gap-2  px-6 text-base  items-center p-0 tracking-wide">
               Logout
            </div>
         </button>
         <MModal isOpen={isOpen} setIsOpen={setisOpen}>
            <div className="flex flex-col bg-white shadow-xl rounded-md w-96 p-8">
               <div className="flex flex-row w-full justify-center items-center ">
                  <div className="flex flex-col w-12 h-12 bg-red-100 justify-center items-center text-red-500 rounded-full text-lg">
                     <i className="ri-error-warning-line"></i>
                  </div>
               </div>
               <div className="flex flex-row grow justify-center items-center text-black font-medium text-md pt-3">
                  Logout
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
                     modifier="danger"
                     icon={<i className="ri-login-box-line"></i>}
                     fullWidth
                  >
                     Logout
                  </MButton>
               </div>
            </div>
         </MModal>
      </>
   )
}

const ProfileDropdown = (props: any) => {
   return (
      <>
         <MDropDown
            dropButtom={
               <button className="flex flex-row gap-2 items-center  rounded-md pr-3">
                  <div className="flex flex-col bg-violet-500 hover:bg-violet-300 justify-center items-center text-white text-md w-8 h-8 rounded-full ">
                     {/* <i className="ri-user-line"></i> */}A
                  </div>
                  {/* <div className="flex flex-row justify-center items-center text-white tracking-wide font-medium text-sm">
                     Placeholder
                  </div> */}
               </button>
            }
         >
            <div className="px-4 py-2 w-60 flex flex-row gap-3">
               <div className="flex flex-col bg-purple-100 hover:bg-gray-700 justify-center items-center text-purple-700 text-md w-8 h-8 rounded-full ">
                  A
               </div>
               <div className="flex flex-col gap-0">
                  <div className="text-sm text-gray-500 font-medium">
                     Signed in as
                  </div>
                  <div className="text-sm text-black   font-medium">
                     nikhil@cytescale.com
                  </div>
               </div>
            </div>
            <div className="flex grow w-full my-2 h-0 border border-solid border-gray-100 border-t-0 border-l-0 border-r-0  border-b-2" />
            <Menu.Item>
               <a
                  className={`w-full h-9  flex flex-row justify-start items-center text-gray-600 hover:bg-slate-100`}
                  href="/settings/profile"
               >
                  <div className="flex flex-row gap-2 w-full px-6  text-base items-center p-0 tracking-wide">
                     Profile
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <a
                  className={`w-full h-9 flex flex-row justify-start items-center text-gray-600 hover:bg-slate-100`}
                  href="/settings/profile"
               >
                  <div className="flex flex-row gap-2 w-full px-6  text-base items-center p-0 tracking-wide">
                     Settings
                  </div>
               </a>
            </Menu.Item>

            <div className="flex grow w-full my-2 h-0 border border-solid border-gray-100 border-t-0 border-l-0 border-r-0  border-b-2" />
            <Menu.Item>
               <a
                  className={`w-full h-9  flex flex-row justify-start items-center text-gray-600 hover:bg-slate-100`}
                  href="/settings/profile"
               >
                  <div className="flex flex-row gap-2 w-full px-6  text-base items-center p-0 tracking-wide">
                     Feedback
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <a
                  className={`w-full h-9  flex flex-row justify-start items-center text-gray-600 hover:bg-slate-100`}
                  href="/settings/profile"
               >
                  <div className="flex flex-row gap-2 w-full px-6  text-base items-center p-0 tracking-wide">
                     Legal
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <LogoutModal />
            </Menu.Item>
         </MDropDown>
      </>
   )
}

const HeaderRightCont = (props: any) => {
   return (
      <>
         <button
            className={classNames(
               'flex flex-col h-8 w-8 bg-transparent text-violet-400 justify-center items-center text-xl rounded-full',
            )}
         >
            {/* <i className="ri-question-fill"></i> */}
            <i className="ri-question-mark   "></i>
         </button>
         <button
            className={classNames(
               'flex flex-row gap-2 h-8   font-medium bg-violet-600 text-gray-100 justify-center items-center text-sm px-4 rounded-md hover:bg-gray-800',
            )}
         >
            {/* <i className="ri-add-line"></i> */}
            Add Product
         </button>
         <ProfileDropdown />
      </>
   )
}

const PageHeaderPane = (props: any) => {
   const location = useLocation()

   return (
      <div
         className={classNames(
            // 'fixed left-0 top-0 right-0 z-50',
            'relative',
            'w-screen',
            'h-fit',
         )}
      >
         <div className="relative flex flex-row  bg-violet-700 gap-1 justify-between items-center px-10 h-14  border-none">
            <div className="flex flex-row w-fit h-full gap-4 items-center justify-start">
               <svg
                  className="sidebar-logo-ico"
                  width="27"
                  height="27"
                  viewBox="0 0 59 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M1.56763 9.18893C3.79306 14.6669 10.3422 22.336 18.7353 9.18893C27.1283 -3.95817 36.5387 3.21297 39.0821 8.69093C41.7314 16.3269 49.5632 23.3078 56.5676 11.1809"
                     stroke="#fff"
                     strokeWidth="5"
                     strokeLinecap="round"
                  />
               </svg>

               <div className="flex flex-row h-full  gap-2">
                  {topbarLinkArr.map((e, i) => {
                     return (
                        <div
                           key={i}
                           className={classNames(
                              'mx-0',
                              'text-violet-300',
                              'flex justify-center items-center',
                              // 'rounded-md',
                              // location.pathname.includes(e[1])
                              //    ? 'bg-violet-500 '
                              //    : 'hover:bg-violet-600 ',
                           )}
                        >
                           <a
                              className={classNames(
                                 location.pathname.includes(e[1])
                                    ? 'text-white '
                                    : 'text-violet-300',
                                 'font-normal',
                                 'tracking-wide',
                                 'text-sm',
                                 'h-full py-2 px-3',
                                 'flex flex-col justify-center items-center',
                              )}
                              href={e[1]}
                           >
                              {e[0]}
                           </a>
                        </div>
                     )
                  })}
               </div>
            </div>
            <div className="flex flex-row w-fit h-full gap-3 items-center justify-end ">
               <HeaderRightCont />
            </div>
         </div>
      </div>
   )
}

export default PageHeaderPane
