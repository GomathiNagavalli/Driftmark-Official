import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Downloads from './components/Downloads';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RootRout/RootLayout';
import Solutions from './components/Solutions';
import Cloud from './components/Cloud';
import Enterprise from './components/Enterprise';
import Advantage from './components/Advantage';
import Resources from './components/Resources';
import Contact from './components/Contact';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element={<Solutions />} />
          <Route  path='cloud' element={<Cloud />}/>
          <Route path='enterprise' element={<Enterprise />}/>
          <Route path='advantage' element={<Advantage />}/>
          <Route path='resources' element={<Resources />}/>
          <Route path='contact' element={<Contact />}/>
      </Route>
    )
  )
  return <RouterProvider router={router}></RouterProvider>       
}

export default App