import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses"
import Error from "./components/Error";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

export default function App() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
}
const approuter= createBrowserRouter([
  {
      path: "/",
      element:<App/>,
      children:[
          {
              path: "/",
              element:<Body/>
          },
          {
              path: "/courses",
              element:<Courses/>
          },
          {
              path: "/SignIn",
              element:<SignIn/>
          },
          {
              path: "/SignUp",
              element:<SignUp/>
          }
          
      ],
      errorElement:<Error/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={approuter}/>
)