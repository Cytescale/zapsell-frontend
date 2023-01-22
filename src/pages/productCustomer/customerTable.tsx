import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import DATA, { DATA_COLUMNS } from "../../assets/fakedata/productCustomerData";
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
import MCheckbox from "../../design/components/checkbox";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

const ProductMoreDropdown = (props: any) => {
  return (
    <MDropDown
      dropButtom={
        <MButton
          variant="transparent"
          modifier="monochrome"
          icon={<i className="ri-more-2-fill text-gray-400 text-md"></i>}
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
  );
};

const TableCellRender = (props: any) => {
  const [selected, setselected] = useState<boolean>(false);

  useEffect(() => {
    const index = props.cell.row.index;
    if (props.selecProdList) {
      setselected(props.selecProdList.includes(index));
    } else {
      setselected(false);
    }
  }, [props.selecProdList, props.page]);

  const selectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let tempArr: Array<any> = [];

    if (props.selecProdList) {
      tempArr = tempArr.concat(props.selecProdList);
    }
    let ind = tempArr.indexOf(props.cell.row.index);
    if (ind < 0 && !selected) {
      tempArr.push(props.cell.row.index);
      props.setselecProdList(tempArr);
    } else {
      tempArr.splice(ind, 1);
      props.setselecProdList(tempArr);
    }
  };
  switch (props.cell.column.id) {
    case "col1":
      return (
        <td className="w-20 h-full">
          <div className="h-full w-full flex flex-col justify-center items-center text-sm font-medium text-gray-400">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>
        </td>
      );
    case "customeremail":
      return (
        <td className="h-full ">
          <a className="" href="/products/productname/edit#description">
            <div className="text-black text-sm flex font-normal flex-row gap-2  justify-center items-center ">
              {props.cell.render("Cell")}
            </div>
          </a>
        </td>
      );
    case "product":
      return (
        <td className="h-full ">
          <a className="" href="/products/productname/edit#description">
            <div className="text-black text-sm flex font-normal flex-row gap-2  justify-center items-center ">
              {props.cell.render("Cell")}
            </div>
          </a>
        </td>
      );

    case "purchasedate":
      return (
        <td className="px-8">
          <div className=" text-black text-sm flex flex-row justify-center items-center font-normal">
            {props.cell.render("Cell")}
          </div>
        </td>
      );
    case "price":
      return (
        <td className="px-8">
          <div className=" text-black text-sm flex flex-row justify-center items-center font-normal">
            {props.cell.render("Cell")}
          </div>
        </td>
      );
    case "opt": {
      return (
        <td className="w-20">
          <div className=" flex flex-row justify-center items-center">
            <ProductMoreDropdown />
          </div>
        </td>
      );
    }
    default: {
      return <td>Null</td>;
    }
  }
};

const TableRowRender = (props: any) => {
  const [selected, setselected] = useState<boolean>(false);
  const [hover, sethover] = useState<boolean>(false);

  useEffect(() => {
    setselected(
      props.selecProdList
        ? props.selecProdList.includes(props.row.index)
        : false
    );
  }, [props.selecProdList, props.row]);

  return (
    <tr
      onMouseOver={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      className={classNames(
        "h-16 border-t-0 border-solid border-gray-100 ",
        props.i % 2 != 0 && "bg-slate-50",
        selected &&
          "bg-violet-50 border border-solid border-violet-200 border-l-0 border-r-0"
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
        );
      })}
    </tr>
  );
};

const ProductTableRender2 = (props: any) => {
  const data = React.useMemo(() => DATA, []);
  const columns = React.useMemo(() => DATA_COLUMNS, []);
  const navigate = useNavigate();

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
              className="h-12 w-full fllex flex-row bg-gray-50 rounded-md"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column: any) => {
                return (
                  <th
                    className=""
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <th
                      className={classNames(
                        `text-sm font-medium  flex flex-row items-center justify-center `,
                        column.isSorted && column.canSort
                          ? "text-blue-600"
                          : "text-gray-400",
                        column.canSort && " hover:text-blue-600"
                      )}
                    >
                      {/* <TypeRender column={column} /> */}
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
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return <TableRowRender {...props} row={row} page={page} i={i} />;
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

const CustomerTable: any = (props: any) => {
  return (
    <>
      <div className="">
        <ProductTableRender2 {...props} />
      </div>
    </>
  );
};

export default CustomerTable;
