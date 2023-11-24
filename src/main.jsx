import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ComprasPrincipal } from './ComprasPrincipal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
<React.StrictMode>
    <ComprasPrincipal />
  </React.StrictMode>
</BrowserRouter>

)
