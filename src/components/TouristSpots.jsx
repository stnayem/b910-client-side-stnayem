import { useEffect, useState } from "react";
import SpotCard from "./SpotCard";


const TouristSpots = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('https://b9a10-server-side-stnayem.vercel.app/addTouristsSpot')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setSpots(data);
            })
    }, [])
    return (
        <div>
            <h2 className="h3-home">Tourist Spot</h2>
            <div className="mx-auto grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    spots.slice(0, 6).map(tempSpot => <SpotCard key={tempSpot._id} spot={tempSpot}></SpotCard>)
                }
            </div>

        </div>
    );
};

export default TouristSpots;