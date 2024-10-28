import Feature from "../Feature/Feature";
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-red-300 p-4 rounded-md flex flex-col">
            <h2 className="text-center">
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>

            <h4 className="text-4xl text-center my-8">{name}</h4>
           <div className="pl-6 bg-fuchsia-500 flex-grow p-4 rounded-md">
             {
                features.map(f => <Feature props={f}></Feature>)
             }
           </div>

           <button className="mt-12 bg-green-500 w-full
           py-4 rounded-lg font-bold text-white hover:bg-slate-600">Buy Now</button>
        </div>
    );
};

export default PriceOption;