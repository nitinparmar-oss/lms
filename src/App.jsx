import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage/Landingpage'
import Portoliopage from './Pages/Portoliopage/Portoliopage'
import Coursespage from './Pages/Coursespage/Coursespage'

import Aipage from './Pages/Aipage/Aipage'
import Contactpage from './Pages/Contactpage/Contactpage'
const App = () => {
  return (
 <Router>
      <Routes>
        <Route path="/"element={<Landingpage />}/>
        <Route path="/Portfolio"element={<Portoliopage />}/>
        <Route path="/Courses"element={<Coursespage />}/>
       <Route path="/Contact"element={<Contactpage />}/>
        <Route path="/Ai"element={<Aipage />}/>
        
        
      </Routes>
    </Router>
  )
}

export default App
