import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="content w-full flex flex-col justify-center items-center">
            <NavBar/>
                {children}
            <Footer/>
        </div> 
     );
}
 
export default Layout;