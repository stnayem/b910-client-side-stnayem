import toast, { Toaster } from "react-hot-toast";
import useAuth from "../auth/useAuth";



const AddTouristsSpot = () => {
    const {
        user
    } = useAuth() || {};
    const handleAddTouristsSpot = e => {
        e.preventDefault();
        console.log(user.displayName, user.email);
        const photoUrl = e.target.photoUrl.value;
        const spotName = e.target.spotName.value;
        const country = e.target.country.value;
        const location = e.target.location.value;
        const short_description = e.target.short_description.value;
        const cost = e.target.cost.value;
        const seasonality = e.target.seasonality.value;
        const travelTime = e.target.travelTime.value;
        const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;
        const userName = user.displayName;
        const userEmail = user.email;


        const touristsSpotDetails = {
            photoUrl,
            spotName,
            country,
            location,
            short_description,
            cost,
            seasonality,
            travelTime,
            totalVisitorsPerYear,
            userName,
            userEmail
        }
        console.log(touristsSpotDetails);
        fetch('http://localhost:5005/addTouristsSpot', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(touristsSpotDetails)
        }).then(resp => resp.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Data successfully added to Database!')
                }
                console.log(data)
            })

    }
    return (
        <div className="max-w-7xl mx-auto">
            <Toaster toastOptions={{ duration: 6000, }} />
            <div>
                <h2 className="text-center bg-[#F8EDE3] dark:bg-[#723801] py-2  text-2xl font-semibold">Add Tourists Spot</h2>
                <form onSubmit={handleAddTouristsSpot} className="card-body grid md:grid-cols-2 gap-0 md:gap-4 mx-auto w-auto md:max-w-4xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white ">Photo</span>
                        </label>
                        <input name="photoUrl" type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="dark:text-white label-text">Tourist Spot Name</span>
                        </label>
                        <input name="spotName" type="text" placeholder="Tourist Spot Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        {/* start */}
                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="country"
                        >
                            Country Name
                        </label>
                        <select
                            name="country"
                            id="country"
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Select Country"
                        >
                            <option value="France">
                                France
                            </option>
                            <option value="Italy">
                                Italy
                            </option>
                            <option value="Spain">
                                Spain
                            </option>
                            <option value="England">
                                England
                            </option>
                            <option value="Netherlands">
                                Netherlands
                            </option>
                            <option value="Switzerland">
                                Switzerland
                            </option>

                        </select>



                        {/* end */}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="dark:text-white label-text">Location</span>
                        </label>
                        <input name="location" type="text" placeholder="Location" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="dark:text-white label-text">Short Description</span>
                        </label>
                        <input name="short_description" type="text" placeholder="Short Description" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="dark:text-white label-text">Average Cost</span>
                        </label>
                        <input name="cost" type="text" placeholder="Average Cost" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="dark:text-white label-text">Seasonality</span>
                        </label>
                        <input name="seasonality" type="text" placeholder="Seasonality" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="dark:text-white label-text">Travel Time</span>
                        </label>
                        <input name="travelTime" type="text" placeholder="Travel Time" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="dark:text-white label-text">Total Visitors Per Year</span>
                        </label>
                        <input name="totalVisitorsPerYear" type="text" placeholder="Total Visitors Per Year" className="input input-bordered" required />
                    </div>



                    <div className="form-control mt-6 md:col-span-2">
                        <button className="btn btn-primary">Add Tourists Spot</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;