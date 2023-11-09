import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { InicioPagina } from './Pages/inicio/inicio.tsx'
import { NosotrosPagina } from './Pages/nosotros/nosotros.tsx'
import { ProductosPagina } from './Pages/productos/productos.tsx'
import { ContactenosPagina } from './Pages/contactenos/Contactenos.tsx'
import { ServicioPage } from './Pages/servicios/servicios.tsx'


const router = createBrowserRouter([
  {
    path: '/inicio',
   
    element: <InicioPagina/>,
    errorElement: <div>error 4444</div>,
  },
  {
    path: '/',
    
    element: <InicioPagina/>,
    errorElement: <div>error 4444</div>,
  },
  {
    path: '/servicios',
    
    element: <ServicioPage/>,
    errorElement: <div>error 4444</div>,
  },
  {
    path: '/contactenos',
   
    element: <ContactenosPagina/>,
    errorElement: <div>error 4444</div>,
  },
  {
    path: '/nosotros',
   
    element: <NosotrosPagina/>,
    errorElement: <div>error 4444</div>,
  },
  {
    path: '/productos', 
   
    element: <ProductosPagina/>,
    errorElement: <div>error 4444</div>,
  },

  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
