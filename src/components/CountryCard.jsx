import { Link } from "react-router-dom";


const CountryCard = ({ newCountry }) => {
    const { photoUrl, country, short_description } = newCountry;
    return (
        <div className="mx-auto">
            <div className="relative h-full">
                <Link to={`/${country}`}>
                    <div className="relative z-[1] w-full h-full">
                        <img src={photoUrl} alt="" className="h-full border-0 rounded-lg" />
                    </div>
                    <div className="absolute border-0 rounded-b-lg bottom-0 left-0 z-[2] pb-5 w-full text-center text-white bg-black bg-opacity-50">
                        <p className="h3-home">
                            {country}
                        </p>
                        <p>{short_description}</p>
                    </div>
                </Link>



            </div>
        </div>
    );
};

export default CountryCard;