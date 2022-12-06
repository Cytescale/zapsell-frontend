import React, { useState } from 'react'
import classNames from 'classnames'

export const AppBaseCont = (props: any) => {
   return (
      <>
         <div
            className={classNames(
               'min-w-full max-w-full w-screen h-screen max-h-screen min-h-screen flex flex-col overflow-hidden',
            )}
         >
            {props.children}
         </div>
      </>
   )
}

export const AppInnerCont = (props: any) => {
   return (
      <>
         <div
            className={classNames(
               'min-w-full max-w-full w-screen h-screen max-h-screen min-h-screen flex flex-col overflow-hidden',
            )}
         >
            {props.children}
         </div>
      </>
   )
}

export const AppPageCont = (props: any) => {
   return (
      <>
         <div className={classNames('w-full  h-full  flex  overflow-hidden')}>
            {props.children}
         </div>
      </>
   )
}
