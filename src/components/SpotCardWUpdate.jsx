import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoLocationOutline } from "react-icons/io5";


const SpotCardWUpdate = ({ spot, control, setControl }) => {
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
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5005/addTouristsSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        setControl(!control);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Tourist spot has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });
    }

    return (
        <div className="mx-auto text-black">
            <div className="flex flex-col card card-compact bg-base-100 h-full w-96 shadow-xl">
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
                    <div className="card-actions justify-end">
                        <Link to={`/update/${_id}`} className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded">Update</Link>
                        <button onClick={handleDelete} className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 border-b-4 border-orange-900 hover:border-orange-700 rounded">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SpotCardWUpdate;