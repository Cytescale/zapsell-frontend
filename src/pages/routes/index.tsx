import { AppBaseCont, AppInnerCont, AppPageCont } from '../holder'

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
   Navigate,
} from 'react-router-dom'
import { useState } from 'react'

import TestPage from '../../design'
import ProductListing from '../productListing'
import ProductEarning from '../productearning'
import ProductEdit from '../productedit'
import PageHeaderPane from '../../design/components/header'
import Settings from '../settings'

const ShellComp = (props: any) => {
   return (
      <AppBaseCont>
         <PageHeaderPane />

         <AppInnerCont>
            <AppPageCont>{props.children}</AppPageCont>
         </AppInnerCont>
      </AppBaseCont>
   )
}

const MRouter = (props: any) => {
   return (
      <>
         <Router>
            <Routes>
               <Route
                  path="/products"
                  element={
                     <ShellComp>
                        <ProductListing />
                     </ShellComp>
                  }
               />
               <Route
                  path="/earnings"
                  element={
                     <ShellComp>
                        <ProductEarning />
                     </ShellComp>
                  }
               />
               <Route
                  path="/products/productname/edit"
                  element={
                     <ShellComp>
                        <ProductEdit />
                     </ShellComp>
                  }
               />
               <Route
                  path="/settings/profile"
                  element={
                     <ShellComp>
                        <Settings />
                     </ShellComp>
                  }
               />
               <Route
                  path="/uitest"
                  element={
                     <ShellComp>
                        <TestPage />
                     </ShellComp>
                  }
               />
               <Route path="/" element={<Navigate to="/products" />} />
            </Routes>
         </Router>
      </>
   )
}

export default MRouter
