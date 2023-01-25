import React, { useState, useEffect, useRef } from "react";
import MInput from "../../design/components/input";
import MListBox from "../../design/components/listbox";
import { ContentSkeleton } from "./utils";
import { Transition } from "@headlessui/react";
import MSwitch from "../../design/components/switch";
import MButton from "../../design/components/button";
import classNames from "classnames";
import TreeRender from "./contentTree";

const ProductContent = (props: any) => {
  const [show, setShow] = useState(false);
  const [redr, setredr] = useState(false);
  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);
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
      <div className="flex flex-col gap-2 w-2/3">
        <ContentSkeleton
          icon={<i className="ri-remixicon-line"></i>}
          title={"Content Delivery"}
          desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        >
          <div className="flex flex-col gap-5 justify-start items-start w-full ">
            <div className="w-full flex flex-row justify-between items-center h-fit  rounded-md">
              <div className="flex flex-col justify-center items-start font-semibold text-base text-gray-600">
                Redirect ?
                <div className="text-sm text-gray-500 font-normal">
                  Redirect to external url after payment
                </div>
              </div>
              <div>
                <MSwitch onChange={(v: any) => setredr(v)} />
              </div>
            </div>
            {redr ? (
              <div className="w-full  flex flex-row justify-between items-center h-fit border border-solid border-gray-300 p-6 rounded-md gap-3">
                <MInput
                  fullWidth
                  icon={"https://"}
                  placeholder="Enter url here"
                />
                <MButton variant="filled">Check</MButton>
              </div>
            ) : (
              <div className="flex w-full h-fit flex-col gap-6">
                <div className="flex flex-col justify-start items-start ">
                  <div className="mb-7 flex flex-row items-center justify-between w-full text-base font-medium">
                    Uploaded Files
                    <MButton icon={<i className="ri-folder-add-line"></i>}>
                      Add Folder
                    </MButton>
                  </div>
                  <TreeRender />
                </div>
                <div className="relative bg-gray-100   hover:bg-gray-100 flex flex-col w-full rounded-md font-medium grow  gap-2   justify-center items-center">
                  <label
                    htmlFor="mdropzone-input"
                    className=" absolute  top-0 left-0 w-full h-full flex-row cursor-pointer"
                  ></label>
                  <input
                    multiple={true}
                    accept="image/gif, image/jpeg, image/png"
                    id="mdropzone-input"
                    type="file"
                    onChange={() => {}}
                    className={"hidden"}
                  />
                  <div className="bg-violet-700  w-full px-4 py-3 text-sm rounded-md text-white flex justify-center items-center gap-2  ">
                    <i className="ri-upload-line"></i>Upload Your Files
                  </div>
                </div>
              </div>
            )}
          </div>
        </ContentSkeleton>
      </div>
      <div className="flex flex-col  gap-5  w-1/3"></div>
    </Transition>
  );
};

export default ProductContent;
