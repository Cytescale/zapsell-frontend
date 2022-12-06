const MPill = (props: any) => {
   return (
      <div
         className={`
            
         px-3
            py-2
            bg-gray-200
            text-xs
            rounded-full
            flex
            flex-row
            justify-center
            items-center
            font-medium
            tracking-wide
    `}
      >
         {props.children}
      </div>
   )
}

export default MPill
