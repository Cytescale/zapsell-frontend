import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import DATA, { DATA_COLUMNS } from '../../assets/fakedata/productListingData'
import { Menu } from '@headlessui/react'
import {
   TableInstance,
   usePagination,
   UsePaginationInstanceProps,
   UsePaginationState,
   useSortBy,
   UseSortByInstanceProps,
   useTable,
} from 'react-table'
import MBadge from '../../design/components/badge'
import MDropDown from '../../design/components/dropdown'
import MButton from '../../design/components/button'
import MListBox from '../../design/components/listbox'
import MCheckbox from '../../design/components/checkbox'

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
   UsePaginationInstanceProps<T> &
   UseSortByInstanceProps<T> & {
      state: UsePaginationState<T>
   }

const ProductMoreDropdown = (props: any) => {
   return (
      <MDropDown
         dropButtom={
            <MButton
               variant="transparent"
               modifier="monochrome"
               icon={<i className="ri-more-2-fill"></i>}
            />
         }
      >
         <div className="w-48 flex flex-col ">
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide ">
                     <i className="ri-pencil-line text-sm  flex justify-center items-center h-max"></i>
                     Edit
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                     <i className="ri-file-copy-line text-sm  flex justify-center items-center h-max"></i>
                     Duplicate
                  </div>
               </a>
            </Menu.Item>
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                     <i className="ri-edit-circle-line text-sm  flex justify-center items-center h-max"></i>
                     Description
                  </div>
               </a>
            </Menu.Item>
            <div className="flex grow w-full my-1 h-0 border border-solid border-gray-100 border-t-0 border-l-0 border-r-0  border-b-2" />
            <Menu.Item>
               <a
                  className={`w-full p-1.5 pl-4 text-sm text-red-600 hover:bg-slate-100`}
                  href="/account-settings"
               >
                  <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                     <i className="ri-delete-bin-7-line text-sm  flex justify-center items-center h-max"></i>
                     Delete
                  </div>
               </a>
            </Menu.Item>
         </div>
      </MDropDown>
   )
}

const TableCellRender = (props: any) => {
   const [selected, setselected] = useState<boolean>(false)

   useEffect(() => {
      const index = props.cell.row.index
      if (props.selecProdList) {
         setselected(props.selecProdList.includes(index))
      } else {
         setselected(false)
      }
   }, [props.selecProdList, props.page])

   const selectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      let tempArr: Array<any> = []
      console.log(props.cell)
      if (props.selecProdList) {
         tempArr = tempArr.concat(props.selecProdList)
      }
      let ind = tempArr.indexOf(props.cell.row.index)
      if (ind < 0 && !selected) {
         tempArr.push(props.cell.row.index)
         props.setselecProdList(tempArr)
      } else {
         tempArr.splice(ind, 1)
         props.setselecProdList(tempArr)
      }
      console.log(tempArr)
   }
   switch (props.cell.column.id) {
      case 'col1':
         return (
            <td className="w-20 h-full">
               <div className="h-full w-full flex flex-col justify-center items-center text-sm font-medium text-gray-400">
                  <MCheckbox
                     size="md"
                     checked={selected}
                     onChange={selectHandler}
                  />
                  {/* {Number(props.cell.row.id) + 1} */}
               </div>
            </td>
         )
      case 'product':
         return (
            <td className="h-full ">
               <a className="" href="/products/productname/edit#description">
                  <div className="text-black text-sm flex font-medium flex-row gap-5  justify-start items-center ">
                     {/* <div className="w-12 h-12 rounded-md bg-gray-100"></div> */}
                     {props.cell.render('Cell')}
                  </div>
               </a>
            </td>
         )
      case 'link':
         return (
            <td className="h-full  ">
               <div className=" text-black text-sm flex flex-row justify-center items-center">
                  <div className="bg-slate-0 text-sm flex flex-row gap-2 justify-center items-start text-black px-3 py-2 rounded-full">
                     cmk.vercel.com/productname
                     <button className="app-prod-det-copy-butt">
                        <i className="ri-file-copy-line"></i>
                     </button>
                  </div>
               </div>
            </td>
         )
      case 'inventory':
         return (
            <td className="px-8">
               <div className=" text-black text-sm flex flex-row justify-end items-center">
                  {props.cell.render('Cell')}
               </div>
            </td>
         )
      case 'sales':
         return (
            <td className="px-8">
               <div className=" text-black text-sm flex flex-row justify-end items-center">
                  {props.cell.render('Cell')}
               </div>
            </td>
         )
      case 'revenue':
         return (
            <td className="px-8">
               <div className=" text-black text-sm flex flex-row justify-end items-center">
                  {props.cell.render('Cell')}
               </div>
            </td>
         )
      case 'status':
         return (
            <td className="px-8">
               <div className=" text-black text-sm flex flex-row justify-center items-center">
                  <div className="data-tab-data-act">
                     <MBadge>Active</MBadge>
                  </div>
               </div>
            </td>
         )
      case 'opt': {
         return (
            <td className="w-20">
               <div className=" text-black text-sm flex flex-row justify-center items-center">
                  {props.hover &&
                     props.selecProdList &&
                     props.selecProdList.length <= 0 && <ProductMoreDropdown />}
               </div>
            </td>
         )
      }
      default: {
         return <td>Null</td>
      }
   }
}

const TypeRender = (props: any) => {
   switch (props.column.type) {
      case 'string':
         return (
            <span className="px-1 text-sm text-gray-400">
               <i className="ri-text"></i>
            </span>
         )
         break
      case 'link':
         return (
            <span className="px-1 text-sm text-gray-400">
               <i className="ri-link"></i>
            </span>
         )
         break
      case 'number':
         return (
            <span className="px-1 text-sm text-gray-400">
               <i className="ri-hashtag"></i>
            </span>
         )
         break
      default:
         return <></>
   }
}

const TableRowRender = (props: any) => {
   const [selected, setselected] = useState<boolean>(false)
   const [hover, sethover] = useState<boolean>(false)

   useEffect(() => {
      setselected(
         props.selecProdList
            ? props.selecProdList.includes(props.row.index)
            : false,
      )
   }, [props.selecProdList, props.row])

   return (
      <tr
         onMouseOver={() => sethover(true)}
         onMouseLeave={() => sethover(false)}
         className={classNames(
            'h-16 border-t-0 border-solid border-gray-100 ',
            props.i % 2 != 0 && 'bg-slate-50',
            selected &&
               'bg-violet-50 border border-solid border-violet-200 border-l-0 border-r-0',
         )}
         onClick={() => {
            // navigate('/products/productname/edit')
         }}
      >
         {props.row.cells.map((cell: any) => {
            return (
               <TableCellRender
                  {...props}
                  hover={hover}
                  cell={cell}
                  page={props.page}
               />
            )
         })}
      </tr>
   )
}

const ProductTableRender2 = (props: any) => {
   const data = React.useMemo(() => DATA, [])
   const columns = React.useMemo(() => DATA_COLUMNS, [])
   const navigate = useNavigate()

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      pageOptions,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex },
   } = useTable(
      {
         columns,
         data,
         initialState: {},
      },
      useSortBy,
      usePagination,
   ) as TableInstanceWithHooks<any>
   useEffect(() => {
      setPageSize(5)
   }, [])

   return (
      <>
         <table
            {...getTableProps()}
            style={{
               width: '100%',
               borderSpacing: 0,
            }}
         >
            <thead>
               {headerGroups.map((headerGroup) => (
                  <tr
                     className="h-12 w-full fllex flex-row border border-solid border-gray-200 border-t-0 border-l-0 border-r-0 "
                     {...headerGroup.getHeaderGroupProps()}
                  >
                     {headerGroup.headers.map((column: any) => {
                        console.log(column.type)
                        return (
                           <th
                              className=""
                              {...column.getHeaderProps(
                                 column.getSortByToggleProps(),
                              )}
                           >
                              <th
                                 className={classNames(
                                    `text-sm font-medium   text-black flex flex-row items-center justify-center `,
                                    column.isSorted &&
                                       column.canSort &&
                                       'text-blue-600',
                                    column.canSort && ' hover:text-blue-600',
                                 )}
                              >
                                 {/* <TypeRender column={column} /> */}
                                 {column.render('Header')}
                                 <div className="">
                                    {column.isSorted ? (
                                       column.isSortedDesc ? (
                                          <i className="ri-arrow-down-line"></i>
                                       ) : (
                                          <i className="ri-arrow-up-line"></i>
                                       )
                                    ) : (
                                       ''
                                    )}
                                 </div>
                              </th>
                           </th>
                        )
                     })}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {page.map((row, i) => {
                  prepareRow(row)
                  return (
                     <TableRowRender {...props} row={row} page={page} i={i} />
                  )
               })}
            </tbody>
         </table>
         <div className="flex flex-row justify-between w-full p-5 border-t-2 border-solid border-gray-100">
            <div className="flex flex-row gap-1"></div>
            <div className="flex flex-row gap-0 justify-center items-center">
               <MDropDown
                  dropButtom={
                     <MButton
                        variant="outline"
                        modifier="monochrome"
                        size="xs"
                        rightIcon={<i className="ri-arrow-down-s-line"></i>}
                     >
                        Show 5 Proudcts
                     </MButton>
                  }
               >
                  <Menu.Item>
                     <a
                        className={`w-40 p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                        href="/account-settings"
                     >
                        <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                           {/* <i className="ri-home-5-line text-lg  flex justify-center items-center h-max"></i> */}
                           5 Records
                        </div>
                     </a>
                  </Menu.Item>
                  <Menu.Item>
                     <a
                        className={`w-40 p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
                        href="/account-settings"
                     >
                        <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                           {/* <i className="ri-home-5-line text-lg  flex justify-center items-center h-max"></i> */}
                           10 Records
                        </div>
                     </a>
                  </Menu.Item>
               </MDropDown>
               <MButton
                  variant="transparent"
                  modifier="monochrome"
                  onClick={() => previousPage()}
                  icon={<i className="ri-arrow-left-line"></i>}
               />
               <div className="text-sm text-gray-800">
                  Page {pageIndex + 1} of {pageOptions.length}
               </div>
               <MButton
                  variant="transparent"
                  modifier="monochrome"
                  onClick={() => nextPage()}
                  icon={<i className="ri-arrow-right-line"></i>}
               />
            </div>
         </div>
      </>
   )
}

const ProductListingTable: any = (props: any) => {
   return (
      <>
         <div className="">
            <ProductTableRender2 {...props} />
         </div>
      </>
   )
}

export default ProductListingTable
