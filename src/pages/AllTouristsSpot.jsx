import { useEffect, useState } from "react";
import SpotCard from "../components/SpotCard";


const AllTouristsSpot = () => {
    const [sortedSpots, setSortedSpots] = useState([]);

    const handleLowestPrice = () => {
        const sortedLowestPrice = [...sortedSpots].sort((a, b) => a.cost - b.cost);
        setSortedSpots(sortedLowestPrice);
    }

    const handleHighestPrice = () => {
        const sortedHighestPrice = [...sortedSpots].sort((a, b) => b.cost - a.cost);
        setSortedSpots(sortedHighestPrice);
    }


    useEffect(() => {
        fetch('https://b9a10-server-side-stnayem.vercel.app/addTouristsSpot')
            .then(resp => resp.json())
            .then(data => {

                const sortedLowestPrice = data.sort((a, b) => a.cost - b.cost);
                setSortedSpots(sortedLowestPrice);
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">


                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a onClick={handleLowestPrice}>Lowest Price</a></li>
                            <li><a onClick={() => handleHighestPrice()}>Highest Price</a></li>
                        </ul>
                    </div>
                </div>
                <h2 className="h3-home">All Tourist Spot</h2>
                <div></div>


            </div>
            <div className="grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    sortedSpots.map(tempSpot => <SpotCard key={tempSpot._id} spot={tempSpot}></SpotCard>)
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;