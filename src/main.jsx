import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Table from './Table.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<App/>}></Route>
          <Route path='/data' element={<Table/>}></Route>

          </Route>
          

        </Routes>

      </BrowserRouter>
  </StrictMode>,

)
