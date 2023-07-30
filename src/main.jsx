import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Education from './Pages/EducationPage.jsx'
import Skills from './Pages/Skills.jsx'
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
