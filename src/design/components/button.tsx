import React from "react";
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

export interface MButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  icon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  variant?:
    | "normal"
    | "filled"
    | "plain"
    | "outline"
    | "transparent"
    | "white"
    | "danger";
  modifier?: "monochrome" | "plain" | "danger";
  size?: "md" | "xl" | "xs";
  textAlign?: "left" | "center" | "right";
  rounded?: "nm" | "full" | "none";
  borderless?: boolean;
  loading?: boolean;
  iserror?: boolean;
}

const defaultProps: MButtonProps = {
  variant: "normal",
};

const MButton = (props: MButtonProps & typeof defaultProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "relative",
        "h-10",
        "font-semibold",
        "flex flex-row gap-1 justify-center items-center",
        "text-sm",
        "rounded-md",
        props.icon && !props.children && !props.rightIcon && "w-10",
        props.fullWidth ? "w-full" : "w-fit",
        props.children ? "px-5" : "px-4",
        props.icon && props.children && "pl-4",
        props.variant == "normal" &&
          "text-slate-700 bg-zinc-100 hover:bg-gray-200",
        props.variant == "filled" &&
          "bg-violet-600 text-white hover:bg-violet-500",
        props.variant == "transparent" && "bg-transparent ",
        props.variant == "white" &&
          "border border-solid  border-gray-300 bg-white hover:bg-gray-200",
        props.variant == "danger" && "bg-red-600 text-white hover:bg-red-500",
        props.variant == "outline" &&
          "bg-transparent border border-solid  border-gray-300 hover:bg-gray-100",
        props.modifier == "monochrome" && "text-black hover:bg-slate-100",
        props.modifier == "plain" &&
          "text-blue-600 hover:bg-blue-100 hover:border-blue-100",
        props.modifier == "danger" && "text-red-600 hover:bg-red-100",
        props.borderless && "border-none",
        props.iserror && "border-red-500",
        props.size == "xs" && "text-xs h-8 px-2 ",
        props.size == "md" && "text-md h-10 px-4",
        props.size == "xl" && "text-xl h-12 px-5",
        props.rounded == "full" && "rounded-full",
        props.rounded == "none" && "rounded-none"
      )}
    >
      <div
        className={classNames(
          "w-full",
          "flex flex-row grow gap-1.5  items-center",
          !props.textAlign && " justify-center",
          props.textAlign == "center" && " justify-center",
          props.textAlign == "left" && " justify-start",
          props.textAlign == "right" && " justify-end"
        )}
      >
        {props.icon && (
          <div
            className={classNames(
              "font-medium",
              "text-md",
              props.children ? "text-md" : "text-xl",
              props.size == "xs" && "text-sm",
              props.size == "md" && "text-xl",
              props.size == "xl" && "text-xl",
              "p-0",
              "h-4",
              "flex",
              "justify-center",
              "items-center "
            )}
          >
            {props.icon}
          </div>
        )}
        {props.children}
      </div>

      {props.rightIcon && (
        <div
          className={classNames(
            "h-full",
            "flex",
            "flex-col",
            "justify-center",
            "items-center",
            "text-xl",
            "font-bold",
            props.variant == "plain" && "text-blue-600"
          )}
        >
          {props.rightIcon}
        </div>
      )}
    </button>
  );
};
MButton.defaultProps = defaultProps;
export default MButton;
