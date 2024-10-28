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
        <div className="pt-8">
            <h1 className="text-2xl font-bold text-center pb-4">Best Prices In The Town</h1>
            <div className="grid md:grid-cols-3 gap-8 pt-6">
              {
                priceOptions.map(opt => <PriceOption option={opt}></PriceOption>)
              }
            </div>
        </div>
    );
};

export default PriceOptions;
