import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import '../Header/Header.css'
const Root = () => {
   
    return (
        <div>
            <div className='homeBackgroungImg'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;