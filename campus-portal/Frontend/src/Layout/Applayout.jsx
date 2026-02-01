import { Navbar } from "./Header"
import { Outlet } from "react-router-dom"
export const Applayout = () => {
  return (
    <> 
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>)
}