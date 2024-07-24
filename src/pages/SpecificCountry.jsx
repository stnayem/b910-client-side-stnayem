import { useLoaderData, useParams } from "react-router-dom";
import SpotCard from "../components/SpotCard";

const SpecificCountry = () => {
    const spots = useLoaderData();
    const { country } = useParams();
    console.log(country);
    console.log(spots);

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="h3-home">{country}</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    spots.map(tempSpot => <SpotCard key={tempSpot._id} spot={tempSpot}></SpotCard>)
                }
            </div>

        </div>
    );
};

export default SpecificCountry;