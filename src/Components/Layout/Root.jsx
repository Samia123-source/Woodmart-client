import { Outlet } from "react-router-dom"
import Navbar from "../Home/Navbar"


const Root = () => {
  return (
    <div className="bg-white">
        <Navbar></Navbar>
        <Outlet></Outlet>
       
    </div>
  )
}

export default Root