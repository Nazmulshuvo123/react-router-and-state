import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Basic fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym facilities",
                "Group fitness classes",
                "Personal training sessions (limited)"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Access to gym facilities",
                "Unlimited group fitness classes",
                "Unlimited personal training sessions",
                "Priority access to equipment"
            ]
        }
    ]
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Best Prices In The Town</h1>
            {
                priceOptions.map(opt => <PriceOption option={opt}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;
