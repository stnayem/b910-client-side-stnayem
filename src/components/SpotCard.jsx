import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";


const SpotCard = ({ spot }) => {
    const {
        _id,
        photoUrl,
        spotName,
        country,
        location,
        short_description,
        cost,
        seasonality,
        travelTime,
        totalVisitorsPerYear,
        userEmail
    } = spot;
    return (
        <div>
            <div className="mx-auto flex flex-col text-black card card-compact bg-base-100 h-full w-96 shadow-xl">
                <figure className="h-[50%]">
                    <img
                        src={photoUrl}
                        alt="Spot" />
                </figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">{spotName}</h2>
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline /> {location}, {country}
                    </div>
                    <p>{short_description}</p>
                    <div className="flex justify-between">
                        <span>Cost: ${cost}</span>
                        <span>Season: {seasonality}</span>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/spot/${_id}`} className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 border-b-4 border-orange-900 hover:border-orange-700 rounded">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;