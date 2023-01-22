import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import PageHeaderPane from "../../design/components/header";
import { Menu } from "@headlessui/react";
import MButton from "../../design/components/button";
import MInput from "../../design/components/input";
import MModal from "../../design/components/modal";
import MListBox from "../../design/components/listbox";
import MDropDown from "../../design/components/dropdown";
import MSwitch from "../../design/components/switch";
import MTextArea from "../../design/components/textarea";
import MBadge from "../../design/components/badge";
import DescriptionEdit from "./productdesc";
import PaymentEdit from "./productpayment";
import AppearanceEdit from "./productappear";

const ProductTabArr = [
  ["Description", "#description", <i className="ri-information-line"></i>],
  ["Content", "#content", <i className="ri-file-line"></i>],
  ["Payment", "#payment", <i className="ri-bank-card-line"></i>],
  ["Appearance", "#appearance", <i className="ri-brush-line"></i>],
];

const ProductEditTabs = (props: any) => {
  const nac = useLocation();
  // border-b-2 border-solid border-white py-2
  return (
    <div className="flex flex-row gap-0 shrink w-fit">
      {ProductTabArr.map((e: any) => {
        return (
          <a
            className={classNames(
              "py-2 px-4 h-fit rounded-md",
              "text-sm font-medium tracking-wide cursor-pointer",
              "flex flex-row gap-1 items-center justify-center",
              "hover:text-blue-500",
              nac.hash.includes(e[1])
                ? "text-blue-500 bg-blue-50"
                : "text-gray-500"
            )}
            href={e[1]}
          >
            {e[0]}
          </a>
        );
      })}
    </div>
  );
};

const ProductEditTabSwtich = (props: any) => {
  const nav = useLocation();

  const hash = nav.hash;
  switch (hash) {
    case ProductTabArr[0][1]: {
      return <DescriptionEdit />;
    }
    case ProductTabArr[1][1]: {
      return <div>In Place</div>;
    }
    case ProductTabArr[2][1]: {
      return <PaymentEdit />;
    }
    case ProductTabArr[3][1]: {
      return <AppearanceEdit />;
    }
    default: {
      return <div>Page Not Found</div>;
    }
  }
};

const ProductEdit = (props: any) => {
  return (
    <div
      className={classNames(
        "overflow-y-scroll w-full overflow-x-hidden relative bg-gray-50"
      )}
    >
      <div className="relative flex flex-row z-0  justify-between items-center h-fit w-full p-24 pb-16 pt-16">
        <div className="flex flex-col w-fit gap-4">
          <div className="flex flex-col w-fit justify-start items-start gap-0">
            <div className="text-gray-800 font-medium text-xl tracking-normal flex flex-row gap-1">
              Edit Product
            </div>
            <div className="text-gray-400 text-sm ">
              You can details of all the created products
            </div>
          </div>
          <ProductEditTabs />
        </div>
        <div className="flex flex-row gap-4">
          <MButton
            variant="filled"
            borderless
            modifier="monochrome"
            icon={<i className="ri-save-line"></i>}
          >
            Save
          </MButton>
          <MButton
            variant="filled"
            borderless
            modifier="monochrome"
            icon={<i className="ri-external-link-line"></i>}
          >
            Preview
          </MButton>
          <MButton variant="danger">Unlist</MButton>
        </div>
      </div>

      <div className="p-24 pt-0 z-50 pb-16 flex">
        <ProductEditTabSwtich />
        {/* <DescriptionEdit /> */}
      </div>
    </div>
  );
};

export default ProductEdit;
