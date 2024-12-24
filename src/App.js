import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootRout/RootLayout";
import Solutions from "./components/Solutions";
import Innovation from "./components/Innovation";
import Enterprise from "./components/Enterprise";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Solutions />} />
        <Route path="innovation" element={<Innovation />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
