import { Link } from "react-router-dom";


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
            <div className="card card-compact bg-base-100 h-full w-96 shadow-xl">
                <figure>
                    <img
                        src={photoUrl}
                        alt="Spot" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{spotName}</h2>
                    <p>{short_description}</p>
                    <p>Cost: {cost} Email: {userEmail}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/spot/${_id}`} className="btn btn-primary">Spot Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;