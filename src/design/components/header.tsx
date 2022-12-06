import { useState } from 'react'
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
            className={`w-full p-1.5 pl-4 text-sm text-red-500 hover:bg-slate-100`}
            onClick={() => setisOpen(true)}
         >
            <div className="flex flex-row gap-2 text-base  items-center p-0 tracking-wide">
               <i className="ri-logout-box-r-line text-lg  flex justify-center items-center h-max"></i>
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
               <button className="flex flex-row gap-2 items-center hover:bg-violet-600 rounded-md pr-3">
                  <div className="flex flex-col bg-violet-600 justify-center items-center text-white text-md w-8 h-8 rounded-full ">
                     {/* <i className="ri-user-line"></i> */}A
                  </div>
                  <div className="flex flex-row justify-center items-center text-white tracking-wide font-medium text-sm">
                     Placeholder
                  </div>
               </button>
            }
         >
            <div className="p-4 py-3 w-56 flex flex-col gap-0.5">
               <div className="text-sm text-gray-500 font-medium">
                  Signed in as
               </div>
               <div className="text-sm text-black   font-medium">
                  Name...@gmail.com
               </div>
            </div>
            <div className="flex grow w-full my-2 h-0 border border-solid border-gray-100 border-t-0 border-l-0 border-r-0  border-b-2" />
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-gray-500 hover:bg-slate-100`}
                  href="/settings/profile"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                     <i className="ri-user-line text-lg  flex justify-center items-center h-max"></i>
                     Profile
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-gray-500 hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                     <i className="ri-settings-3-line text-lg  flex justify-center items-center h-max"></i>
                     Settings
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <LogoutModal />
               {/* <a
                  className={`w-full p-1.5 pl-4 text-sm text-red-500 hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base  items-center p-0 tracking-wide">
                     <i className="ri-logout-box-r-line text-lg  flex justify-center items-center h-max"></i>
                     Logout
                  </div>
               </a> */}
            </Menu.Item>
            <div className="flex grow w-full my-2 h-0 border border-solid border-gray-100 border-t-0 border-l-0 border-r-0  border-b-2" />
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-gray-500 hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                     Feedback
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-gray-500 hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                     Legal
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-gray-500 hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                     Support
                  </div>
               </a>
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
               'flex flex-col h-8 w-8 bg-transparent text-violet-100 justify-center items-center text-xl rounded-full',
            )}
         >
            <i className="ri-question-mark"></i>
         </button>
         <button
            className={classNames(
               'flex flex-col h-8 w-8 bg-transparent text-violet-100 justify-center items-center text-xl rounded-full',
            )}
         >
            <i className="ri-feedback-line"></i>
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
         <div className="relative flex flex-row  bg-violet-700 gap-1 justify-between items-center px-10 h-14 ">
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

               <div className="flex flex-row h-fit gap-2">
                  {topbarLinkArr.map((e) => {
                     return (
                        <div
                           className={classNames(
                              'px-3',
                              'mx-0',
                              'py-2',
                              'flex justify-center items-center',
                              'rounded-md',
                              location.pathname.includes(e[1]) &&
                                 'bg-violet-600',
                           )}
                        >
                           <a
                              className={classNames(
                                 location.pathname.includes(e[1])
                                    ? 'text-white'
                                    : 'text-violet-100',
                                 'font-normal',
                                 'tracking-wide',
                                 'text-sm',
                                 'h-full',
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
