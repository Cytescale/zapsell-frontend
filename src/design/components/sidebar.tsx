import {
  PointerEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import MButton from "./button";
import { Menu } from "@headlessui/react";
import MDropDown from "./dropdown";
import MModal from "./modal";

const topbarLinkArr = [
  ["Home", "#", <i className="ri-home-line"></i>],
  ["Reports", "#", <i className="ri-bar-chart-line"></i>],
  ["Customers", "#", <i className="ri-group-line"></i>],
  ["Products", "/products", <i className="ri-shopping-cart-line"></i>],
  ["Earnings", "/earnings", <i className="ri-coin-line"></i>],
];

const supportLinkArr = [
  ["Whats New", "#", <i className="ri-gift-line"></i>],
  ["Support", "#", <i className="ri-hand-heart-line"></i>],
  ["Community", "#", <i className="ri-community-line"></i>],
];

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
        <Menu.Item>{/* <LogoutModal /> */}</Menu.Item>
      </MDropDown>
    </>
  );
};

const HeaderRightCont = (props: any) => {
  return (
    <>
      <button
        className={classNames(
          "flex flex-col h-8 w-8 bg-transparent text-violet-400 justify-center items-center text-xl rounded-full"
        )}
      >
        {/* <i className="ri-question-fill"></i> */}
        <i className="ri-question-mark   "></i>
      </button>
      <button
        className={classNames(
          "flex flex-row gap-2 h-8   font-medium bg-violet-600 text-gray-100 justify-center items-center text-sm px-4 rounded-md hover:bg-gray-800"
        )}
      >
        {/* <i className="ri-add-line"></i> */}
        Add Product
      </button>
      <ProfileDropdown />
    </>
  );
};

const Sidebar = (props: any) => {
  const location = useLocation();

  return (
    <div className={classNames("relative", "h-screen", "h-fit w-fit")}>
      <div className="relative flex flex-col  bg-violet-700 justify-start items-start w-56 h-full p-6 pt-8 pb-4">
        <div className="font-medium text-2xl text-white px-1">Zapsell</div>
        <button className="text-white font-normal text-sm flex flex-row gap-1.5 justify-center pt-5 px-1">
          <i className="ri-search-line"></i>
          Search
        </button>
        <div className="pt-6 w-full ">
          <div className="text-violet-400 text-xs font-medium pb-2 px-1">
            NAVIGATE
          </div>
          {topbarLinkArr.map((e: any, i: number) => {
            return (
              <div
                key={i}
                className={classNames(
                  "w-full",
                  "flex justify-start items-center",
                  "rounded-md",
                  "cursor-pointer",
                  "hover:bg-violet-600 "
                )}
              >
                <a
                  className={classNames(
                    location.pathname.includes(e[1])
                      ? "text-white "
                      : "text-violet-200",
                    "tracking-wider",
                    "text-sm font-medium",
                    "w-full",
                    "h-full py-2 px-1",
                    "flex flex-row gap-3 justify-start items-center"
                  )}
                  href={e[1]}
                >
                  {e[2]}
                  {e[0]}
                </a>
              </div>
            );
          })}
        </div>
        <div className="pt-6 w-full ">
          <div className="text-violet-400 text-xs font-medium pb-2 px-1">
            CONNECT
          </div>
          {supportLinkArr.map((e: any, i: number) => {
            return (
              <div
                key={i}
                className={classNames(
                  "w-full",
                  "flex justify-start items-center",
                  "rounded-md",
                  "cursor-pointer",
                  "hover:bg-violet-600 "
                )}
              >
                <a
                  className={classNames(
                    location.pathname.includes(e[1])
                      ? "text-white "
                      : "text-violet-200",
                    "tracking-wide",
                    "text-sm font-medium",
                    "h-full py-2 px-1",
                    "flex flex-row gap-3 justify-center items-center"
                  )}
                  href={e[1]}
                >
                  {e[2]}
                  {e[0]}
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col flex-grow"></div>
        <div className="flex flex-row w-full hfit gap-2 hover:bg-violet-600 py-3 rounded-md">
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          <div className="flex flex-col gap-0 flex-grow h-full justify-center">
            <div className="text-xs font-medium text-white tracking-wide">
              NickWhoKnows
            </div>
            <div className="text-xs text-violet-300">basic plan</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
