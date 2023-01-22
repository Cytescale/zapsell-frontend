import React, { useState } from "react";
import classNames from "classnames";
import PageHeaderPane from "../../design/components/header";
import { Menu } from "@headlessui/react";
import MButton from "../../design/components/button";
import MInput from "../../design/components/input";
import MModal from "../../design/components/modal";
import MListBox from "../../design/components/listbox";
import MDropDown from "../../design/components/dropdown";
import MSwitch from "../../design/components/switch";
import ProductEarningTable from "./productEarningTable";

const ShowByListMap = [
  { id: 0, name: "1 Week" },
  { id: 1, name: "2 Week" },
  { id: 3, name: "A Month" },
];

const EarningDownloadModal = (props: any) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <MButton
        onClick={() => setisOpen(true)}
        icon={<i className="ri-download-line"></i>}
      >
        Download CSV
      </MButton>
      <MModal isOpen={isOpen} setIsOpen={setisOpen}>
        <div className="flex flex-col bg-white shadow-xl rounded-md w-96 p-8">
          <div className="flex flex-row w-full justify-center items-center ">
            <div className="flex flex-col w-12 h-12 bg-blue-100 justify-center items-center text-blue-500 rounded-full text-lg">
              <i className="ri-download-line"></i>
            </div>
          </div>
          <div className="flex flex-row grow justify-center items-center text-black font-medium text-md pt-3">
            Download CSV
          </div>
          <div className="flex flex-row grow text-center justify-center items-center text-gray-700 font-normal text-sm pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            libero vulputate.
          </div>
          <div className="flex flex-row grow justify-center items-center pt-5 gap-2">
            <MButton
              icon={<i className="ri-close-line"></i>}
              onClick={() => {
                setisOpen(false);
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
  );
};

const EarningCard = (orops: any) => {
  return (
    <div className="p-4 px-6 flex flex-row gap-4 w-fit border border-solid border-gray-200 rounded-xl bg-gray-50">
      <div className="h-full p-0 flex justify-center items-center">
        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-500 text-xl justify-center items-center flex">
          <i className="ri-coin-line"></i>
        </div>
      </div>
      <div className=" flex flex-col gap-0 justify-center">
        <div className="text-sm font-medium text-gray-700">Total Revenue</div>
        <div className="text-lg font-semibold text-gray-00 flex flex-row w-full justify-between gap-3">
          <div> 10,000 INR</div>
          <div className="text-red-700 text-sm flex flex-row justify-center items-center gap-1">
            <i className="ri-arrow-down-line"></i>
            10%
          </div>
        </div>
      </div>
    </div>
  );
};

const EarningReading = (props: any) => {
  return (
    <div className="h-auto flex flex-row justify-start gap-5">
      <EarningCard />
      <EarningCard />
      <EarningCard />
      {/* <EarningCard /> */}
      {/* <EarningProgress /> */}
    </div>
  );
};

const ProductEarning = (props: any) => (
  <div
    className={classNames("overflow-y-scroll", "overflow-x-hidden ", "w-full")}
  >
    <div className="p-24 pb-16 pt-16 w-full h-fit flex flex-row grow justify-between items-center">
      <div className="flex flex-col w-fit justify-start items-start">
        <div className="text-gray-800 text-xl font-medium tracking-normal">
          Earnings
        </div>
        <div className="text-gray-400 text-sm ">
          You can details of all the created products
        </div>
      </div>
      <div className="flex flex-row justify-end items-center w-fit gap-4">
        {/* <ProductExportModal /> */}
        <div className="w-52 flex flex-row">
          <MListBox
            icon={<i className="ri-calendar-line"></i>}
            fullWidth
            listMap={ShowByListMap}
            textAlign="left"
          />{" "}
        </div>
        <EarningDownloadModal />
      </div>
    </div>
    <div className="relative p-24 pt-0  flex flex-col w-full h-auto justify-center items-center">
      <div className="w-full  flex flex-col grow  gap-10">
        <EarningReading />

        <ProductEarningTable />
      </div>
      <div className="text-sm text-gray-600 p-9 font-medium">
        Learn more about{" "}
        <a className="text-blue-500 underline underline-offset-4" href="#">
          Product Earnings <i className="ri-external-link-line"></i>
        </a>
      </div>
    </div>
  </div>
);

export default ProductEarning;
