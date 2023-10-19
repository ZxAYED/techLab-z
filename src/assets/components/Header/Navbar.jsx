import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import toast from "react-hot-toast";
import png from '../../imgaes/trolley.png'

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
    const navbars=<>
    <div className="flex gap-3 text-[#FCB100] font-semibold  ">
    <li > <NavLink to='/'>Home</NavLink></li>
    <li> <NavLink to='/MyCart'>My cart  <img src={png} className="h-4" alt="" /></NavLink></li>
    <li> <NavLink to='/AddProducts'>Add products</NavLink></li>  
    <li> <NavLink to='/NewProducts'>New Products </NavLink></li>
    <li> <NavLink to='/SignUp'>Sign Up  </NavLink></li>
   
    </div>
    </>
const handleSignOut=()=>{
  logOut()
  .then()
  .catch()
  toast.success('User Sign out SuccessFully!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
 }
    return (
        <div className="mt-3 h-20">
            
            <div className="navbar max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navbars}
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
       
      </ul>
    </div>
    <a className="btn btn-ghost normal-case   text-[#FCB100] text-2xl font-black">TechLab-Z</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-3 ">
     {navbars}
      {/* <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
    
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <button onClick={handleSignOut} className="btn bg-[#FCB100] rounded-md ">Sign Out</button>:<NavLink to='/Login'> <button className="btn bg-[#FCB100]"> Login</button> </NavLink>
    }
    
  
  
  </div>
</div>

        </div>
    );
};

export default Navbar;