import { useLoaderData } from "react-router-dom";


const TouristSpotDetails = () => {
    const spot = useLoaderData();
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
    } = spot;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={photoUrl}
                        alt="Spot" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{spotName}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Spot Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetails;