import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PageHeaderPane from "../../design/components/header";
import { Menu } from "@headlessui/react";
import MButton from "../../design/components/button";
import MInput from "../../design/components/input";
import CustomerTable from "./customerTable";
import MModal from "../../design/components/modal";
import MListBox from "../../design/components/listbox";
import MDropDown from "../../design/components/dropdown";
import MSwitch from "../../design/components/switch";
import MCheckbox from "../../design/components/checkbox";
import { Transition } from "@headlessui/react";

const ProductAddModal = (props: any) => {
  const [isOpen, setisOpen] = useState(false);

  const ProductCatMap = [
    { id: 0, name: "Design" },
    { id: 1, name: "Artwork" },
    { id: 2, name: "Course" },
    { id: 3, name: "Template" },
    { id: 3, name: "Misc" },
  ];

  return (
    <>
      <button
        onClick={() => setisOpen(true)}
        className={
          "bg-violet-600 text-white text-sm flex justify-center items-center gap-2 px-5 py-3 rounded-md  shadow hover:bg-violet-800"
        }
      >
        <i className="ri-add-fill"></i>
        Add Product
      </button>
      <MModal isOpen={isOpen} setIsOpen={setisOpen}>
        <div className="flex flex-col bg-white shadow-xl rounded-md w-96 p-8">
          <div className="flex flex-row w-full justify-start items-center ">
            <div className="flex flex-col w-12 h-12 bg-violet-100 justify-center items-center text-violet-500 rounded-full text-lg">
              <i className="ri-shopping-bag-line"></i>
            </div>
          </div>
          <div className="flex flex-row grow justify-start items-center text-black font-medium text-lg pt-3">
            Add Product
          </div>
          <div className="flex flex-row grow text-left justify-start items-center text-gray-700 font-normal text-xs pt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            libero vulputate.
          </div>
          <div className="flex flex-col pt-5 gap-4">
            <MInput fullWidth label="Name"></MInput>
            <MInput
              iserror
              helperLine="Enter price for the product"
              fullWidth
              icon={<i className="ri-money-dollar-circle-fill"></i>}
              label="Price"
            ></MInput>
            <MListBox
              label="Category"
              variant="outline"
              listMap={ProductCatMap}
              fullWidth
            ></MListBox>
          </div>
          <div className="flex flex-row grow justify-center items-center pt-5 gap-2">
            <MButton
              modifier="plain"
              icon={<i className="ri-add-line"></i>}
              fullWidth
            >
              Add Product
            </MButton>
          </div>
        </div>
      </MModal>
    </>
  );
};

const ProductExportModal = (props: any) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <MButton
        variant="normal"
        onClick={() => setisOpen(true)}
        icon={<i className="ri-upload-line"></i>}
        // icon={<i className="ri-file-chart-line"></i>}
      >
        Export
      </MButton>
      <MModal isOpen={isOpen} setIsOpen={setisOpen}>
        <div className="flex flex-col bg-white shadow-xl rounded-md w-96 p-8">
          <div className="flex flex-row w-full justify-center items-center ">
            <div className="flex flex-col w-12 h-12 bg-blue-100 justify-center items-center text-blue-500 rounded-full text-lg">
              <i className="ri-file-chart-line"></i>
            </div>
          </div>
          <div className="flex flex-row grow justify-center items-center text-black font-medium text-md pt-3">
            Export Product Data
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

const ProductSortDropdown = (props: any) => {
  const SortArr = [
    "a-z",
    "z-a",
    "Newest Product",
    "Oldest Product",
    "Most Sold Product",
    "Least Sold Product",
    "Least Sold Product",
    "Newest Updated",
    "Oldest Updated",
  ];

  return (
    <MDropDown
      dropButtom={
        <MButton variant="normal">
          <span className="text-gray-400">Sort by</span> a-z
        </MButton>
      }
    >
      {SortArr.map((e) => {
        return (
          <Menu.Item>
            <button
              className={`w-56 p-1.5 pl-4 h-9 text-sm text-black hover:bg-slate-100`}
            >
              <div className="flex flex-row gap-3 text-sm items-center p-0 tracking-wide ">
                <MCheckbox />
                {e}
              </div>
            </button>
          </Menu.Item>
        );
      })}
    </MDropDown>
  );
};

const CustomerToolbar = (props: any) => {
  return (
    <>
      <div className="flex flex-row gap-3 w-full h-fit ">
        <div className="bg-gray-100 text-sm rounded-full px-4 py-2 text-gray-900 font-medium gap-2">
          Total Customers 100
        </div>
        <div className="flex flex-row justify-center items-center bg-gray-100 text-sm rounded-full px-4 py-2 text-gray-900 font-medium gap-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          Returning Customer
        </div>
        <div className="flex flex-row justify-center items-center bg-gray-100 text-sm rounded-full px-4 py-2 text-gray-900 font-medium gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          New Customer
        </div>
      </div>
    </>
  );
};

const ProductCustomer = (props: any) => {
  const [selecProdList, setselecProdList] = useState<Array<any>>([]);

  return (
    <div
      className={classNames(
        "overflow-y-scroll",
        "overflow-x-hidden ",
        "w-full"
      )}
    >
      <div className="p-24 pt-16 pb-16 w-full h-fit flex flex-row grow justify-between items-center ">
        <div className="flex flex-col w-fit justify-start items-start">
          <div className="text-gray-800 font-medium text-xl tracking-normal flex flex-row gap-1">
            Customers
          </div>
          <div className="text-gray-400 text-sm ">
            Check out all your customers here
          </div>
        </div>
        <div className="flex flex-row justify-end items-center w-fit gap-4">
          {/* <ProductAddModal /> */}
          <button
            className={
              "bg-gray-100 text-black text-sm font-medium flex justify-center items-center gap-2 px-5 py-3 rounded-md hover:bg-gray-200"
            }
          >
            <i className="ri-refresh-line"></i>
            Refresh
          </button>
          <button
            className={
              "bg-violet-600 text-white text-sm font-medium flex justify-center items-center gap-2 px-5 py-3 rounded-md  shadow hover:bg-violet-800"
            }
          >
            <i className="ri-download-line"></i>
            Export
          </button>
        </div>
      </div>
      <div className="relative p-24 pt-0 flex flex-col w-full h-auto justify-center items-center">
        <div className="w-full bg-white rounded-xl flex flex-col grow gap-6">
          <CustomerToolbar />
          <CustomerTable />
        </div>
        <div className="text-sm text-gray-600 p-9 font-medium">
          Learn more about{" "}
          <a className="text-blue-500 underline underline-offset-4" href="#">
            Customers <i className="ri-external-link-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductCustomer;
