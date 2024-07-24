import { useEffect, useState } from "react";
import SpotCard from "../components/SpotCard";


const AllTouristsSpot = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/addTouristsSpot')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setSpots(data);
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="h3-home">All Tourist Spot</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    spots.map(tempSpot => <SpotCard key={tempSpot._id} spot={tempSpot}></SpotCard>)
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;