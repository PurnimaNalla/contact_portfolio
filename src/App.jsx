import React from"react";
import styles from"./App.module.css";
import {Contact}from"./components/Contact/Contact";
import{Skills} from "./components/Skills/Skills";
import{Hero} from "./components/Hero/Hero";
import{Navbar} from "./components/Navbar/Navbar";
import{Projects} from"./components/Projects/Projects";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
    const router = createBrowserRouter([
      {
        path:"/",
        element:<><Navbar /><Hero/></>
      },
      {
        path:"/skills",
        element:<><Navbar /><Skills /></>
      },
      {
        path:"/projects",
        element:<><Navbar /><Projects /></>
      },
      {
        path:"/contact",
        element:<><Navbar /><Contact /></>
      },
     
      
     
    ]);

  return (
    
  <div className={styles.App}>
    <RouterProvider router={router} />
     
    </div>
  );
}

export default App;


