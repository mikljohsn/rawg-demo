import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";

const Layout = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
};

export default Layout;