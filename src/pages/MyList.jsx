import { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import SpotCardWUpdate from "../components/SpotCardWUpdate";


const MyList = () => {
    const [mySpots, setMySpots] = useState([]);
    const [control, setControl] = useState(false);

    const {
        user
    } = useAuth() || {};

    useEffect(() => {
        fetch(`http://localhost:5005/myCart/${user?.email}`)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data);
                setMySpots(data);
            })
    }, [control])
    return (
        <div className="max-w-7xl mx-auto ">
            <h2 className="h3-home">My List</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    mySpots.map(tempSpot => <SpotCardWUpdate
                        key={tempSpot._id}
                        spot={tempSpot}
                        control={control}
                        setControl={setControl} />)
                }
            </div>

        </div>
    );
};

export default MyList;