

const Link = ({route}) => {
    return (
        <li className="mr-5  hover:bg-white px-4" >
            <a href="{route.path}">{route.name}</a>
            </li>
    );
};

export default Link;