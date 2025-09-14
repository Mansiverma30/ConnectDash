import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import HeroSection from './components/Herosection';
import About from './components/About';
import Features from './components/Features';
import GetStarted from './components/GetStarted';
import Contact from './components/Contact'
import Analysis from "./components/Analysis/AnalysisPage";
/* import Example from './components/Example' */


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HeroSection />} />
      <Route path="about" element={<About />} />
      <Route path="features" element={<Features />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="example" element={<Example />} /> */}
      <Route path="get-started" element={<GetStarted />} />
      <Route path="analysis" element={<Analysis />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
