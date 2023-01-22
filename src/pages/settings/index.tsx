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
import ProfileGeneral from "../settings/profileGeneral";

const ProductTabArr = [
  ["General", "#description", <i className="ri-information-line"></i>],
  ["Payout", "#content", <i className="ri-file-line"></i>],
  ["Security", "#payment", <i className="ri-bank-card-line"></i>],
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
              "hover:text-gray-800",
              nac.hash.includes(e[1])
                ? "text-gray-800 bg-gray-200"
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
      return <ProfileGeneral />;
    }
    case ProductTabArr[1][1]: {
      return <div>In Place</div>;
    }
    case ProductTabArr[2][1]: {
      return <ProfileGeneral />;
    }

    default: {
      return <div>Page Not Found</div>;
    }
  }
};

const ProfileSettings = (props: any) => {
  return (
    <div
      className={classNames(
        "overflow-y-scroll w-full overflow-x-hidden relative bg-gray-50"
      )}
    >
      <div className="relative flex flex-row z-0  justify-between items-center h-fit w-full p-24 pb-16 pt-16 ">
        <div className="flex flex-col w-fit gap-4 ">
          <div className="flex flex-col w-fit justify-start items-start">
            <div className="text-gray-800 font-medium text-xl tracking-normal flex flex-row gap-1">
              Profile Settings
            </div>
            <div className="text-gray-400 text-sm ">
              You can details of all the created products
            </div>
          </div>
          <ProductEditTabs />
        </div>
        <div className="flex flex-row gap-4">
          <MButton
            variant="normal"
            borderless
            modifier="plain"
            icon={<i className="ri-save-line"></i>}
          >
            Save Changes
          </MButton>
        </div>
      </div>

      <div className="p-24 pt-0 z-50 pb-16 flex">
        <ProductEditTabSwtich />
        {/* <DescriptionEdit /> */}
      </div>
    </div>
  );
};

export default ProfileSettings;
