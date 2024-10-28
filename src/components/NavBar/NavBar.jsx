import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {name: 'Home', path: '/', id: 1}, 
        {name: 'About Us', path: '/about', id: 2}, 
        {name: 'Contact Us', path: '/contact', id: 3}, 
        {name: 'Products', path: '/products', id: 4}, 
        {name: 'Services', path: '/services', id: 5}
    ];
    return (
        <nav>
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true? <IoCloseSharp /> : <IoMenu/>
                }

             
             
            </div>
            <ul className="md:flex">
            {
                routes.map(route => <Link route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;