import { useState } from 'react'
import MRouter from './pages/routes'

import './stylesheets/App.css'
import './stylesheets/index.css'
import 'remixicon/fonts/remixicon.css'
import './design/stylesheet.css'

function App() {
   const [count, setCount] = useState(0)

   return (
      
         <MRouter />
      
   )
}

export default App
