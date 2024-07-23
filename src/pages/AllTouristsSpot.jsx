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
        <div>
            <h2 className="text-2xl font-semibold">Tourist Spots section {spots.length}</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-red-200">
                {
                    spots.map(tempSpot => <SpotCard key={tempSpot._id} spot={tempSpot}></SpotCard>)
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;