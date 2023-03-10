export const ContentSkeleton = (props: any) => {
  return (
    <div className="border-b-2 border-gray-200">
      {props.banner && (
        <div className="relative flex w-full h-56 bg-slate-300 rounded-t-md ">
          <img
            src={props.banner}
            className="object-cover w-full rounded-t-md "
          />

          <div className="absolute bottom-0 right-0 text-sm p-2 px-3 bg-slate-100 text-black bg-opacity-60 backdrop-blur-sm">
            <a href="https://icons8.com" className="hover:text-blue-500">
              Get this{" "}
            </a>
            on
            <a href="https://icons8.com" className="hover:text-blue-500">
              {" "}
              icon8.com
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-row gap-2 w-full pb-0  ">
        <div className="flex flex-col h-fit">
          <div className="flex flex-row justify-center items-start h-fit rounded-full text-xl text-black">
            {props.icon}
          </div>
        </div>
        <div
          className="text-black-700 text-base
         font-medium tracking-wide flex justify-center items-center h-7 text-black"
        >
          {props.title}
        </div>
        {/* <div className="flex flex-col gap-0.5">
               <div className="text-gray-400 text-xs font-medium w-full  tracking-wide">
                  {props.desc}
               </div> 
            </div> */}
      </div>
      <div className="pb-7 pt-7 flex flex-col items-start gap-5">
        {props.children}
      </div>
    </div>
  );
};
