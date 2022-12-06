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
         <Menu.Item>
            <a
               className={`w-56 p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
               href="/account-settings"
            >
               <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide ">
                  <i className="ri-pencil-line text-lg  flex justify-center items-center h-max"></i>
                  Edit
               </div>
            </a>
         </Menu.Item>
         <Menu.Item>
            <a
               className={`w-56 p-1.5 pl-4 text-sm text-black hover:bg-slate-100`}
               href="/account-settings"
            >
               <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                  <i className="ri-edit-circle-line text-lg  flex justify-center items-center h-max"></i>
                  Change description
               </div>
            </a>
         </Menu.Item>
         <div className="flex grow w-full my-2 h-0 border border-solid border-gray-100 border-t-0 border-l-0 border-r-0  border-b-2" />
         <Menu.Item>
            <a
               className={`w-56 p-1.5 pl-4 text-sm text-red-600 hover:bg-slate-100`}
               href="/account-settings"
            >
               <div className="flex flex-row gap-2 text-base items-center p-0 tracking-wide">
                  <i className="ri-delete-bin-7-line text-lg  flex justify-center items-center h-max"></i>
                  Delete Product
               </div>
            </a>
         </Menu.Item>
      </MDropDown>
   )
}

const TableCellRender = (props: any) => {
   switch (props.cell.column.id) {
      case 'col1':
         return (
            <td className="w-20 h-20">
               <div className="h-full w-full flex flex-col justify-center items-center text-sm font-medium text-gray-400">
                  {Number(props.cell.row.id) + 1}
               </div>
            </td>
         )
      case 'product':
         return (
            <td className="h-full ">
               <a className="" href="/products/productname/edit">
                  <div className="text-black text-sm flex flex-row gap-5  justify-start items-center ">
                     <div className="w-12 h-12 rounded-md bg-gray-100"></div>
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
               <div className=" text-black text-sm flex flex-row justify-center items-center">
                  {props.cell.render('Cell')}
               </div>
            </td>
         )
      case 'sales':
         return (
            <td className="px-8">
               <div className=" text-black text-sm flex flex-row justify-center items-center">
                  {props.cell.render('Cell')}
               </div>
            </td>
         )
      case 'revenue':
         return (
            <td className="px-8">
               <div className=" text-black text-sm flex flex-row justify-center items-center">
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
                  <ProductMoreDropdown />
               </div>
            </td>
         )
      }
      default: {
         return <td>Null</td>
      }
   }
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
                     {headerGroup.headers.map((column: any) => (
                        <th
                           className=""
                           {...column.getHeaderProps(
                              column.getSortByToggleProps(),
                           )}
                        >
                           <th
                              className={classNames(
                                 `text-xs font-medium   text-black tracking-wide flex flex-row items-center justify-center `,
                                 column.isSorted &&
                                    column.canSort &&
                                    'text-blue-600',
                                 column.canSort && ' hover:text-blue-600',
                              )}
                           >
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
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {page.map((row, i) => {
                  prepareRow(row)
                  return (
                     <tr
                        className={classNames(
                           'h-20 border-t-0 border-solid border-gray-100 hover:bg-gray-50',
                           i % 2 != 0 && 'bg-slate-50',
                        )}
                        onClick={() => {
                           // navigate('/products/productname/edit')
                        }}
                     >
                        {row.cells.map((cell) => {
                           return <TableCellRender cell={cell} />
                        })}
                     </tr>
                  )
               })}
            </tbody>
         </table>
         <div className="flex flex-row justify-between w-full p-6 border-t-2 border-solid border-gray-100">
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
            <ProductTableRender2 />
         </div>
      </>
   )
}

export default ProductListingTable
