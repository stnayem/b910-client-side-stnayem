import { Link } from "react-router-dom";
import Swal from "sweetalert2";


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
                    <p>Email: {userEmail}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/update/${_id}`} className="btn btn-primary">Update</Link>
                        <button onClick={handleDelete} className="btn bg-red-600 text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SpotCardWUpdate;