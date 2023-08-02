import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Education from './Pages/EducationPage.jsx'
import Skills from './Pages/Skills.jsx'
import Hobbies from './Pages/Hobbies.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Education",
    element: <Education/>,
  },
  {
    path: "Skills",
    element: <Skills/>,
  },
  {
    path: "Hobbies",
    element: <Hobbies/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
