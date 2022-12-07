import React, { useState, useEffect, ChangeEvent } from 'react'
import classNames from 'classnames'
import MButton from './button'

interface MDropdownProps {
   buttonlabel?: string
   actionhint?: string
}
const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']
const MAX_FILE_LENGTH = 4

const PreviewWindow = (props: any) => {
   //URL.createObjectURL(e.target.files[0])
   const [urlArr, seturlArr] = useState<any>([])
   const [selectedId, setselectedId] = useState<any>(0)

   useEffect(() => {
      if (props.fileList) {
         let tempArr: any = []
         urlArr && urlArr.length > 0 && tempArr.concat(urlArr)
         props.fileList.forEach((e: any) => {
            const url = URL.createObjectURL(e)
            tempArr.push(url)
         })
         seturlArr(tempArr)
      }
      return () => {
         urlArr.forEach((e: any) => {
            URL.revokeObjectURL(e)
         })
      }
   }, [props.fileList])

   const handleDelete = (e: any) => {
      let tempArr: any = []
      if (props.fileList.length > 0) {
         tempArr = tempArr.concat(props.fileList)
      }
      let rem = tempArr.splice(selectedId, 1)
      props.setfileList(tempArr)
      setselectedId(selectedId % tempArr.length)
      // console.log(tempArr)
   }

   return (
      <div className="flex flex-col w-full grow h-auto bg-white rounded-md border border-solid  border-gray-300 ">
         <div className="flex flex-row p-4 justify-between items-center text-sm text-black font-medium border-b-2 border-solid border-gray-200">
            <div>Product Images</div>
            <div className="flex flex-row justify-center gap-0">
               <MButton
                  modifier="danger"
                  icon={<i className="ri-close-line"></i>}
                  variant="transparent"
                  onClick={handleDelete}
               >
                  Delete
               </MButton>
               {props.fileList.length <= MAX_FILE_LENGTH && (
                  <div className="relative flex flex-col h-9 w-fit ">
                     <label
                        htmlFor="mdropzone-input"
                        className=" absolute  top-0 left-0 w-full h-full flex-row cursor-pointer "
                     ></label>
                     <input
                        multiple={true}
                        accept="image/gif, image/jpeg, image/png"
                        id="mdropzone-input"
                        type="file"
                        onChange={props.fileHandler}
                        className={'hidden'}
                     />
                     <div className="w-full h-full py-1  text-sm font-medium text-blue-600 flex flex-row justify-center items-center text-center gap-1.5">
                        <i className="ri-image-line"></i>
                        Add Photos
                     </div>
                  </div>
               )}
            </div>
         </div>
         <div className="h-80  w-full flex flex-row justify-center items-center shrink  flex-wrap">
            <img
               src={urlArr[selectedId]}
               className="w-full h-full bg-slate-100 origin-center object-scale-down"
            />
         </div>
         <div className="flex flex-row justify-between  items-center w-full h-auto border-t-2 border-solid border-gray-200">
            <div className="relative flex flex-row w-fit h-full p-4 gap-2">
               {urlArr.map((e: any, i: any) => {
                  return (
                     <img
                        key={i}
                        src={e}
                        onClick={() => {
                           setselectedId(i)
                        }}
                        className={classNames(
                           'h-20 w-20 object-cover hover:opacity-60 cursor-pointer rounded-md border border-solid border-gray-200 ',
                           selectedId != i
                              ? 'grayscale'
                              : ' border-2 border-solid border-blue-500',
                        )}
                     ></img>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

const MDropzone = (props: MDropdownProps) => {
   const [fileList, setfileList] = useState<any | null>([])

   const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const rawFiles = e.target.files
      if (rawFiles && rawFiles?.length > 0) {
         let bool = false
         let arr: any = []
         if (fileList.length > 0) {
            arr = arr.concat(fileList)
         }
         for (let i = 0; i < rawFiles.length; i++) {
            if (
               validImageTypes.includes(rawFiles[i].type) &&
               arr.length <= MAX_FILE_LENGTH
            ) {
               arr.push(rawFiles[i])
            } else {
               break
            }
         }

         setfileList(arr)
      }
   }

   return (
      <>
         {fileList && fileList.length > 0 ? (
            <PreviewWindow
               fileList={fileList}
               fileHandler={fileHandler}
               setfileList={setfileList}
            />
         ) : (
            <div className="relative  hover:bg-gray-100 flex flex-col w-full rounded-md font-medium grow p-4 py-7 gap-2 border-2 border-dashed border-spacing-2 border-gray-300 bg-white justify-center items-center">
               <label
                  htmlFor="mdropzone-input"
                  className=" absolute  top-0 left-0 w-full h-full flex-row"
               ></label>
               <input
                  multiple={true}
                  accept="image/gif, image/jpeg, image/png"
                  id="mdropzone-input"
                  type="file"
                  onChange={fileHandler}
                  className={'hidden'}
               />
               <div className="bg-blue-50 px-2 py-1 text-sm rounded-md text-blue-700 ">
                  {props.buttonlabel ? props.buttonlabel : 'Add Files'}
               </div>
               <div className="text-xs rounded-md text-gray-500">
                  {props.actionhint
                     ? props.actionhint
                     : 'Accepts .gif .jpg and .png'}
               </div>
            </div>
         )}
      </>
   )
}

export default MDropzone
