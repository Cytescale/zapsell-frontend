export const ContentSkeleton = (props: any) => {
   return (
      <div className="bg-white   rounded-md border border-solid border-slate-200 ">
         <div className="flex flex-row gap-4 w-full p-8 pb-0 ">
            <div className="flex flex-col justify-center items-center">
               <div className="flex flex-row justify-center items-center w-12 h-12 rounded-full text-xl bg-blue-100 text-blue-500">
                  {props.icon}
               </div>
            </div>
            <div className="flex flex-col gap-0.5">
               <div className="text-black-700 text-sm font-medium tracking-wide">
                  {props.title}
               </div>
               <div className="text-gray-400 text-xs font-medium w-3/4  tracking-wide">
                  {props.desc}
               </div>
            </div>
         </div>
         <div className="p-8 flex flex-col items-center gap-6">
            {props.children}
         </div>
      </div>
   )
}

export const SideContentSkeleton = (props: any) => {
   return (
      <div className="bg-white rounded-md w-80 border border-solid border-slate-200">
         <div className="text-gray-700 text-base p-8 pb-0 font-medium">
            {props.title}
         </div>
         <div className="flex flex-col p-8 pt-4 gap-5 justify-between items-center h-fit w-full">
            {props.children}
         </div>
      </div>
   )
}
