import { AppBaseCont, AppInnerCont, AppPageCont } from '../holder'

import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
   Navigate,
} from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../../design/components/sidebar'
import TestPage from '../../design'
import RunnersScreen from '../runners'
import ProfileScreen from '../profile'
import EditorScreen from '../editor'

const ShellComp = (props: any) => {
   return (
      <AppBaseCont>
         <Sidebar />
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
                  path="/runners"
                  element={
                     <ShellComp>
                        <RunnersScreen />
                     </ShellComp>
                  }
               />
               <Route
                  path="/editor"
                  element={
                     <ShellComp>
                        <EditorScreen />
                     </ShellComp>
                  }
               />
               <Route
                  path="/profile"
                  element={
                     <ShellComp>
                        <ProfileScreen />
                     </ShellComp>
                  }
               />
               <Route
                  path="/profile"
                  element={
                     <ShellComp>
                        <ProfileScreen />
                     </ShellComp>
                  }
               />
               <Route
                  path="/editor"
                  element={
                     <ShellComp>
                        <TestPage />
                     </ShellComp>
                  }
               />
               <Route path="/" element={<Navigate to="/editor" />} />
            </Routes>
         </Router>
      </>
   )
}

export default MRouter
