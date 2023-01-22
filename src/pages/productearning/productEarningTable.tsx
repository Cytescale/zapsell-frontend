import React, { useState, useMemo, useEffect } from "react";
import classNames from "classnames";
import DATA, { DATA_COLUMNS } from "../../assets/fakedata/productEarningData";
import { Menu } from "@headlessui/react";
import {
  TableInstance,
  usePagination,
  UsePaginationInstanceProps,
  UsePaginationState,
  useSortBy,
  UseSortByInstanceProps,
  useTable,
} from "react-table";
import MBadge from "../../design/components/badge";
import MDropDown from "../../design/components/dropdown";
import MButton from "../../design/components/button";
import MListBox from "../../design/components/listbox";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

const TableCellRender = (props: any) => {
  switch (props.cell.column.id) {
    default: {
      return (
        <td
          className={classNames(
            "border border-solid border-slate-300 border-l-0 border-b-0 border-t-0 ",
            props.i === 5 && "border-r-0"
          )}
        >
          <div className="flex flex-row justify-center items-center text-sm h-full ">
            {props.cell.render("Cell")}
          </div>
        </td>
      );
    }
  }
};

const ProductTableRender2 = (props: any) => {
  const data = React.useMemo(() => DATA, []);
  const columns: any = React.useMemo(() => DATA_COLUMNS, []);
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
    usePagination
  ) as TableInstanceWithHooks<any>;
  useEffect(() => {
    setPageSize(5);
  }, []);
  return (
    <>
      <table
        {...getTableProps()}
        style={{
          width: "100%",
          borderSpacing: 0,
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="h-14 w-full fllex flex-row border border-t-0 border-solid border-slate-300  border-l-0 border-r-0 "
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column: any, i: number) => (
                <th
                  className={classNames(
                    "border border-solid border-slate-300 border-l-0 border-t-0 border-b-0",
                    i === 5 && "border-r-0"
                  )}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <th
                    className={classNames(
                      `text-sm font-medium text-black tracking-wide flex flex-row items-center justify-center `,
                      column.isSorted && column.canSort && "text-blue-600",
                      column.canSort && " hover:text-blue-600"
                    )}
                  >
                    {column.render("Header")}
                    <div className="">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="ri-arrow-down-line"></i>
                        ) : (
                          <i className="ri-arrow-up-line"></i>
                        )
                      ) : (
                        ""
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
            prepareRow(row);
            return (
              <tr
                className={classNames(
                  "h-14 border border-b-0 border-l-0 border-r-0 border-solid border-slate-300",
                  i % 2 != 0 && "bg-slate-50"
                )}
                onClick={() => {}}
              >
                {row.cells.map((cell, i) => {
                  return <TableCellRender cell={cell} i={i} />;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-row justify-between w-full p-5 border-t-2 border-solid border-gray-100">
        <div className="flex flex-row gap-0 justify-center items-center">
          <MButton
            variant="transparent"
            modifier="monochrome"
            onClick={() => previousPage()}
            icon={<i className="ri-arrow-left-line text-gray-400"></i>}
          />
          <div className="text-sm text-gray-400">
            Page {pageIndex + 1} of {pageOptions.length}
          </div>
          <MButton
            variant="transparent"
            modifier="monochrome"
            onClick={() => nextPage()}
            icon={<i className="ri-arrow-right-line text-gray-400"></i>}
          />
        </div>
      </div>
    </>
  );
};

const ProductEarningTable: any = (props: any) => {
  return (
    <>
      <ProductTableRender2 />
    </>
  );
};

export default ProductEarningTable;
