import { FaCheckCircle } from "react-icons/fa";
const Feature = ({props}) => {
    
    return (
        <div>
            <p className="flex items-center gap-2"><FaCheckCircle /> {props}</p>
        </div>
    );
};

export default Feature;