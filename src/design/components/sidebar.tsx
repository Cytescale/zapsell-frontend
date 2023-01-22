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
  ["Customers", "/customers", <i className="ri-group-line"></i>],
  ["Products", "/products", <i className="ri-shopping-cart-line"></i>],
  ["Earnings", "/earnings", <i className="ri-coin-line"></i>],
];

const supportLinkArr = [
  ["Whats New", "#", <i className="ri-gift-line"></i>],
  ["Support", "#", <i className="ri-hand-heart-line"></i>],
  ["Community", "#", <i className="ri-community-line"></i>],
];
const LogoutModal = (props: any) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <button
        className={`w-full h-8 items-center justify-start text-sm text-red-500 hover:bg-red-100 hover:red-500`}
        onClick={() => setisOpen(true)}
      >
        <div className="flex flex-row gap-2  px-6 text-sm font-medium  items-center p-0 tracking-wide">
          Sign out
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            libero vulputate.
          </div>
          <div className="flex flex-row grow justify-center items-center pt-5 gap-2">
            <MButton
              onClick={() => {
                setisOpen(false);
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
  );
};
const ProfileDropdown = (props: any) => {
  return (
    <>
      <MDropDown
        fullWidth
        originString="origin-top-right bottom-0 left-0"
        dropButtom={
          <div className="flex flex-row w-full h-fit gap-2 hover:bg-violet-600 py-3 rounded-md">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="flex flex-col gap-0 flex-grow h-full justify-start items-start">
              <div className="text-xs font-medium text-white tracking-wide">
                NickWhoKnows
              </div>
              <div className="text-xs text-violet-200">basic plan</div>
            </div>
          </div>
        }
      >
        <div className="px-5 py-3 w-60 flex flex-row gap-3 items-center">
          <div className="flex flex-col bg-purple-100 hover:bg-gray-700 justify-center items-center text-purple-700 text-md w-8 h-8 rounded-full ">
            A
          </div>
          <div className="flex flex-col gap-0">
            <div className="text-xs text-gray-400 font-medium">
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
            className={`w-full h-8  flex flex-row justify-start items-center text-gray-600 hover:bg-slate-100`}
            href="/settings/profile#description"
          >
            <div className="flex flex-row gap-2 w-full px-6  text-sm font-medium text-gray-500 items-center p-0 tracking-wider">
              Profile
            </div>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            className={`w-full h-8 flex flex-row justify-start items-center text-gray-600 hover:bg-slate-100`}
            href="/settings/profile"
          >
            <div className="flex flex-row gap-2 w-full px-6    text-sm font-medium text-gray-500 items-center p-0 tracking-wide">
              Settings
            </div>
          </a>
        </Menu.Item>

        <div className="flex grow w-full my-2 h-0 border border-solid border-gray-100 border-t-0 border-l-0 border-r-0  border-b-2" />
        <Menu.Item>
          <a
            className={`w-full h-8  flex flex-row justify-start items-center text-gray-600 hover:bg-slate-100`}
            href="/settings/profile"
          >
            <div className="flex flex-row gap-2 w-full px-6    text-sm font-medium text-gray-500 items-center p-0 tracking-wide">
              Feedback
            </div>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            className={`w-full h-8 flex flex-row justify-start items-center text-gray-600 hover:bg-slate-100`}
            href="/settings/profile"
          >
            <div className="flex flex-row gap-2 w-full px-6    text-sm font-medium text-gray-500 items-center p-0 tracking-wide">
              Legal
            </div>
          </a>
        </Menu.Item>
        <Menu.Item>
          <LogoutModal />
        </Menu.Item>
      </MDropDown>
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
        <ProfileDropdown />
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
