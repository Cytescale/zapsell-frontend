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
import { motion } from "framer-motion";

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
  return (
    <Draggable
      handle="strong"
      onDrag={props.onDragHandle}
      onStart={(f) => props.onStart(f, props.e.id)}
      onStop={props.onStop}
    >
      <div
        aria-id={props.e.id}
        ref={nodeRef}
        className={classNames(
          "relative flex flex-row  border-2 border-l-0 border-t-0 border-r-0 border-solid border-gray-100 rounded-lg w-full  h-fit items-center p-3 gap-3 hover:bg-gray-100",
          props.drag && props.dragId == props.e.id
            ? "z-50 outline outline-blue-600"
            : "z-0"
        )}
      >
        <strong
          className={classNames(
            "w-8 h-8 flex flex-row justify-center items-center rotate-90 text-xl text-gray-600 hover:bg-gray-200 rounded-md cursor-move",
            "dragable-ele"
          )}
        >
          <i className="ri-pause-line"></i>
        </strong>

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
        <div
          className={classNames(
            " absolute h-1 bg-blue-500 w-full top-0 left-0 right-0 rounded-xl",
            props.drag && props.colliId == props.e.id && props.dropTar == "TOP"
              ? "visible"
              : "hidden"
          )}
        />
        <div
          className={classNames(
            " absolute h-1 bg-blue-500 w-full bottom-0 left-0 right-0 rounded-xl",
            props.drag &&
              props.colliId == props.e.id &&
              props.dropTar == "BOTTOM"
              ? "visible"
              : "hidden"
          )}
        />
      </div>
    </Draggable>
  );
};
const TreeRender = () => {
  const [tree, settree] = useState(DATA);
  const [colliId, setcolliId] = useState<number | null>(null);
  const [dropTar, setdropTar] = useState<string | null>(null);
  const [drag, setdrag] = useState<boolean>(false);
  const [dragId, setdragId] = useState<number | null>(null);
  const treeHolder = useRef(null);

  const changeOrder = (tree: any) => {
    const tr = tree;
    const ntr = [];
    let ele = null;
    for (let i = 0; i < tr.length; i++) {
      if (tr[i].id == dragId) {
        ele = tr[i];
        break;
      }
    }

    for (let i = 0; i < tr.length; i++) {
      if (tr[i].id == colliId) {
        if (dropTar == "TOP") {
          ntr.push(ele);
          ntr.push(tr[i]);
        }
        if (dropTar == "BOTTOM") {
          ntr.push(tr[i]);
          ntr.push(ele);
        }
      } else {
        if (tr[i].id != dragId) {
          ntr.push(tr[i]);
        }
      }
    }
    settree(ntr);
  };

  const getCollisionId = (cp: { x: number; y: number }) => {
    let eleArr = ReactDOM.findDOMNode(treeHolder.current)?.childNodes;
    if (eleArr) {
      for (let i = 0; i < eleArr?.length; i++) {
        let e: any = eleArr[i];
        let id = e.getAttribute("aria-id");
        const br = e.getBoundingClientRect();
        if (cp.x >= br.left && cp.x <= br.left + br.width) {
          if (cp.y >= br.top && cp.y <= br.top + br.height) {
            if (dragId != id) {
              setcolliId(id);
              break;
            }
          }
        }
        setcolliId(null);
      }
    }
  };

  const getFileDatabyId = (id: number) => {
    let dt = null;
    tree.forEach((e) => {
      if (e.id == id) {
        dt = e;
      }
    });
    return dt;
  };
  const getDropTar = (cp: { x: number; y: number }) => {
    const MARGIN = 22;

    if (colliId) {
      let eleArr = ReactDOM.findDOMNode(treeHolder.current)?.childNodes;
      if (eleArr) {
        let rec: any = null;
        eleArr.forEach((e: any) => {
          let id = e.getAttribute("aria-id");
          if (id == colliId) {
            rec = e.getBoundingClientRect();
          }
        });
        if (rec) {
          const dt: any = getFileDatabyId(colliId);
          if (dt) {
            if (dt.type == "folder") {
              let mid = rec.top + rec.height - rec.height / 2;
              if (cp.y < mid - MARGIN / 2) {
                setdropTar("TOP");
              } else if (cp.y > mid - MARGIN / 2 && cp.y < mid + MARGIN / 2) {
                setdropTar("MID");
              } else {
                setdropTar("BOTTOM");
              }
            } else {
              let mid = rec.top + rec.height - rec.height / 2;
              if (cp.y < mid) {
                setdropTar("TOP");
              } else {
                setdropTar("BOTTOM");
              }
            }
          }
        }
      }
    }
  };

  const onDragHandle = (e: any) => {
    let cp = { x: e.x, y: e.y };
    if (treeHolder) {
      getCollisionId(cp);
      getDropTar(cp);
    }
  };
  const onStart = (e: any, id: number) => {
    setdrag(true);
    setdragId(id);
  };
  const onStop = (e: any) => {
    if (colliId) {
      changeOrder(tree);
    }
    setdrag(false);
    setdragId(null);
  };

  return (
    <div ref={treeHolder} className="flex flex-col grow w-full">
      {tree.map((e: any) => {
        if (e.type == "file") {
          return (
            <RenderFile
              e={e}
              dropTar={dropTar}
              drag={drag}
              dragId={dragId}
              onDragHandle={onDragHandle}
              onStart={onStart}
              colliId={colliId}
              onStop={onStop}
            />
          );
        }
        if (e.type == "placeholder") {
          return (
            <div className="h-16 flex flex-row justify-start items-center opacity-40 p-5">
              tempholder
            </div>
          );
        } else {
          return null;
          // return <RenderFolder e={e} />;
        }
      })}
    </div>
  );
};

export default TreeRender;
