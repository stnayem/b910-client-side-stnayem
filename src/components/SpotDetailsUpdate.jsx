
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SpotDetailsUpdate = () => {
    const navigate = useNavigate();
    const spot = useLoaderData();
    console.log(spot);


    const handleUpdate = e => {
        e.preventDefault();

        const photoUrl = e.target.photoUrl.value;
        const spotName = e.target.spotName.value;
        const country = e.target.country.value;
        const location = e.target.location.value;
        const short_description = e.target.short_description.value;
        const cost = e.target.cost.value;
        const seasonality = e.target.seasonality.value;
        const travelTime = e.target.travelTime.value;
        const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;


        const updateSpotDetails = {
            photoUrl,
            spotName,
            country,
            location,
            short_description,
            cost,
            seasonality,
            travelTime,
            totalVisitorsPerYear,
        }
        console.log(updateSpotDetails);
        fetch(`http://localhost:5005/addTouristsSpot/${spot._id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateSpotDetails)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Data Updated successfully.');
                    navigate('/mylist');
                } else {
                    toast.error('Data Updating failed!');

                }
            })
    }
    return (
        <div>
            <Toaster toastOptions={{ duration: 6000, }} />
            <div>
                <h2 className="text-center bg-[#F8EDE3] py-2  text-2xl font-semibold">Update Tourists Spot</h2>
                <form onSubmit={handleUpdate} className="card-body grid md:grid-cols-2 gap-0 md:gap-4 mx-auto w-auto md:max-w-4xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photoUrl" type="text" placeholder={"Photo URL"} defaultValue={spot.photoUrl} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input name="spotName" type="text" placeholder="Tourist Spot Name" defaultValue={spot.spotName} className="input input-bordered" required />
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
                            defaultValue={spot.country}
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
                            <span className="label-text">Location</span>
                        </label>
                        <input name="location" type="text" placeholder="Location" defaultValue={spot.location} className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input name="short_description" type="text" placeholder="Short Description" defaultValue={spot.short_description} className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input name="cost" type="text" placeholder="Average Cost" defaultValue={spot.cost} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input name="seasonality" type="text" defaultValue={spot.seasonality} placeholder="Seasonality" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input name="travelTime" type="text" defaultValue={spot.travelTime} placeholder="Travel Time" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
                        </label>
                        <input name="totalVisitorsPerYear" type="text" defaultValue={spot.totalVisitorsPerYear} placeholder="Total Visitors Per Year" className="input input-bordered" required />
                    </div>



                    <div className="form-control mt-6 md:col-span-2">
                        <button className="btn btn-primary">Update Tourists Spot</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpotDetailsUpdate;