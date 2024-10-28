import Link from "../Link/Link";


const Navbar = () => {
    const routes = [
        {name: 'Home', path: '/', id: 1}, 
        {name: 'About Us', path: '/about', id: 2}, 
        {name: 'Contact Us', path: '/contact', id: 3}, 
        {name: 'Products', path: '/products', id: 4}, 
        {name: 'Services', path: '/services', id: 5}
    ];
    return (
        <nav>
            <ul className="md:flex">
            {
                routes.map(route => <Link route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;