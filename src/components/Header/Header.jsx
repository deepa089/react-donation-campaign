import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/Logo.png'
const Header = () => {

    const linkList =
        <>
            <li><NavLink to="/" >Home</NavLink> </li>
            <li><NavLink to="/donation" >Donation</NavLink> </li>
            <li><NavLink to="/statistics" >Statistics</NavLink> </li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {linkList}
                        </ul>
                    </div>
                    <Link to={`/`}> <img src={logo}></img> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {linkList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;