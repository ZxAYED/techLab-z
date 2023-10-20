
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Header/Footer';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;