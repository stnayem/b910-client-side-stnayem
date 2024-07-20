


const AddTouristsSpot = () => {
    const handleAddTouristsSpot = e => {
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
        }
        console.log(touristsSpotDetails);

    }
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <h2 className="text-center bg-[#F8EDE3] py-2  text-2xl font-semibold">Add Tourists Spot</h2>
                <form onSubmit={handleAddTouristsSpot} className="card-body grid md:grid-cols-2 gap-0 md:gap-4 mx-auto w-auto md:max-w-4xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photoUrl" type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input name="spotName" type="text" placeholder="Tourist Spot Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input name="country" type="text" placeholder="Country Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name="location" type="text" placeholder="Location" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input name="short_description" type="text" placeholder="Short Description" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input name="cost" type="text" placeholder="Average Cost" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <input name="seasonality" type="text" placeholder="Seasonality" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input name="travelTime" type="text" placeholder="Travel Time" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:col-span-2">
                        <label className="label">
                            <span className="label-text">Total Visitors Per Year</span>
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