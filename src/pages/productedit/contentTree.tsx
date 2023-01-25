import React, { useState, useEffect, useRef } from "react";
import MInput from "../../design/components/input";
import MListBox from "../../design/components/listbox";
import { ContentSkeleton } from "./utils";
import { Transition } from "@headlessui/react";
import MSwitch from "../../design/components/switch";
import MButton from "../../design/components/button";
import classNames from "classnames";
import Draggable, { DraggableEventHandler } from "react-draggable";
import DATA from "../../assets/fakedata/productContentData";
import ReactDOM from "react-dom";

const RenderFolder = (props: any) => {
  const [expnd, setexpnd] = useState(false);
  return (
    <div className="flex flex-col w-full h-fit">
      <div className="flex flex-row  border-2 border-l-0 border-t-0 border-r-0 border-solid border-gray-100 w-full  h-fit items-center p-3 gap-3 hover:bg-gray-100">
        {/* <div className="w-8 h-8 flex flex-row justify-center items-center rotate-90 text-xl text-gray-600 hover:bg-gray-100 rounded-md cursor-move">
          <i className="ri-pause-line"></i>
        </div> */}
        <div
          onClick={() => setexpnd(!expnd)}
          className={classNames(
            "w-8 h-8 flex flex-row justify-center items-center text-xl text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer",
            expnd && "rotate-180"
          )}
        >
          <i className="ri-arrow-down-s-line"></i>
        </div>
        <div className="w-8 h-8 rounded-md justify-center items-center bg-gray-200"></div>
        <div className="w-auto h-full flex flex-col flex-grow  text-slate-700 font-medium gap-0.5">
          <div className="text-sm font-medium text-black">{props.e.name}</div>
          <div className="text-xs font-regular text-gray-600 flex flex-row gap-1.5 items-center">
            Folder <div className="w-1 h-1 bg-gray-400 rounded-full" />3 Items
          </div>
        </div>
        <div className="w-8 h-8 rounded-md justify-center items-center ">
          <button className="w-8 h-8 bg-transparent text-gray-500 text-2xl flex justify-center items-center rounded-md hover:bg-gray-200 ">
            <i className="ri-more-2-fill"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full pl-10">
        {/* {expnd && <TreeRender arrData={props.e.files} />} */}
      </div>
    </div>
  );
};

const RenderFile = (props: any) => {
  const nodeRef = useRef(null);
  const [dr, setdr] = useState<boolean>(false);
  const [loc, setloc] = useState<{ x: number; y: number } | null>(null);

  const DRAG_TARGET_CLASSNAME = "drag-target";

  useEffect(() => {
    const handleMouse = (e: any) => dragUpdate(e);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [dr]);
  const dragStart = (e: any) => {
    setdr(true);
  };
  const dragUpdate = (e: any) => {
    if (dr && nodeRef) {
      const dragTag =
        nodeRef &&
        ReactDOM.findDOMNode(nodeRef.current)?.getElementsByClassName(
          DRAG_TARGET_CLASSNAME
        )[0];
      const dragTarRect = dragTag.getBoundingClientRect();
      const dragRootRect = nodeRef.current.getBoundingClientRect();
    }
  };
  const dragEnd = (e: any) => {
    setdr(false);
  };

  return (
    <div
      // aria-id={props.e.id}
      ref={nodeRef}
      className={classNames(
        "relative flex flex-row  border-2 border-l-0 border-t-0 border-r-0 border-solid border-gray-100 rounded-lg w-full  h-fit items-center p-3 gap-3 hover:bg-gray-100"
      )}
    >
      <div
        onPointerDown={dragStart}
        onPointerUp={dragEnd}
        className={classNames(
          "w-8 h-8 flex flex-row justify-center items-center rotate-90 text-xl text-gray-600 hover:bg-gray-200 rounded-md cursor-move",
          DRAG_TARGET_CLASSNAME
        )}
      >
        <i className="ri-pause-line"></i>
      </div>

      <div className="w-8 h-8 rounded-md justify-center items-center bg-gray-200"></div>
      <div className="w-auto h-full flex flex-col flex-grow  text-slate-700 font-medium gap-0.5">
        <div className="text-sm font-medium text-black">{props.e.name}</div>
        <div className="text-xs font-regular text-gray-600 flex flex-row gap-1.5 items-center">
          JPG <div className="w-1 h-1 bg-gray-400 rounded-full" />
          24kb
        </div>
      </div>
      <div className="w-8 h-8 rounded-md justify-center items-center ">
        {!props.drag && (
          <button className="w-8 h-8 bg-transparent text-gray-500 text-2xl flex justify-center items-center rounded-md hover:bg-gray-200 ">
            <i className="ri-more-2-fill"></i>
          </button>
        )}
      </div>
    </div>
  );
};
const TreeRender = () => {
  const [tree, settree] = useState(DATA);
  const treeHolder = useRef(null);

  return (
    <div ref={treeHolder} className="flex flex-col grow w-full ">
      {tree.map((e: any) => {
        if (e.type == "file") {
          return <RenderFile key={e.id} e={e} />;
        } else {
          return null;
          // return <RenderFolder e={e} />;
        }
      })}
    </div>
  );
};

export default TreeRender;
