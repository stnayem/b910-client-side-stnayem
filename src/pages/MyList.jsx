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
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold">My List page</h2>
            {
                mySpots.map(tempSpot => <SpotCardWUpdate
                    key={tempSpot._id}
                    spot={tempSpot}
                    control={control}
                    setControl={setControl} />)
            }
        </div>
    );
};

export default MyList;