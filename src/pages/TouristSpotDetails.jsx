import { useLoaderData } from "react-router-dom";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineRestaurant } from "react-icons/md";
import { GiPalmTree } from "react-icons/gi";
import { FaWifi } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

const TouristSpotDetails = () => {
    const spot = useLoaderData();
    const {
        _id,
        photoUrl,
        spotName,
        country,
        location,
        short_description,
        long_description,
        cost,
        seasonality,
        travelTime,
        totalVisitorsPerYear,
    } = spot;
    return (
        <div className="px-8 sm:px-4 max-w-7xl mx-auto overflow-hidden">
            <h3 className="h3-home mb-0">{spotName}</h3>
            <div className="flex gap-2 justify-center items-center">
                <IoLocationOutline /> {location}, {country}
            </div>
            <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ffce31" d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z" /></svg>


            </div>

            <div className="">
                <figure>
                    <img className="mx-auto max-h-[60vh]"
                        src={photoUrl}
                        alt="Spot" />
                </figure>
            </div>
            <div className="*:justify-center grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-4">
                <div className="flex flex-row justify-center p-2 md:p-4 rounded-lg items-center gap-2 text-base md:text-xl border-2 ">
                    <LuParkingCircle className="" />
                    <span>Private Parking</span>
                </div>
                <div className="flex flex-row p-2 md:p-4 rounded-lg items-center gap-2 text-base md:text-xl border-2 ">
                    <MdOutlineRestaurant />
                    <span>Restaurant</span>
                </div>
                <div className="flex flex-row p-2 md:p-4 rounded-lg items-center gap-2 text-base md:text-xl border-2 ">
                    <GiPalmTree className="" />
                    <span>View</span>
                </div>

                <div className="flex flex-row p-2 md:p-4 rounded-lg items-center gap-2 text-base md:text-xl border-2 ">
                    <FaWifi className="" />
                    <span>Free WiFi</span>
                </div>

            </div>
            <div className="my-4">
                <h3 className="text-2xl font-semibold mt-6 mb-4">About {spotName}</h3>
                <p>{long_description}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-4">
                <div className="flex flex-row p-2 md:p-4 rounded-lg items-center gap-2 text-base md:text-xl">
                    <BsCashCoin className="" />
                    <span>Cost: {cost}</span>
                </div>

                <div className="flex flex-row p-2 md:p-4 rounded-lg items-center gap-2 text-base md:text-xl">
                    <IoPartlySunnyOutline className="" />
                    <span>Seasonality: {seasonality}</span>
                </div>

                <div className="flex flex-row p-2 md:p-4 rounded-lg items-center gap-2 text-base md:text-xl">
                    <FaRegCalendarDays className="" />
                    <span>Travel Time: {travelTime}</span>
                </div>

                <div className="flex flex-row p-2 md:p-4 rounded-lg items-center gap-2 text-base md:text-xl">
                    <FaPeopleGroup className="" />
                    <span>Total Visitors Per Year: {totalVisitorsPerYear}</span>
                </div>



            </div>

        </div>
    );
};

export default TouristSpotDetails;