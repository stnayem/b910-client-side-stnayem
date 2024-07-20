import Banner from "../components/Banner";
import Countries from "../components/Countries";
import TouristSpots from "../components/TouristSpots";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">

            <Banner />

            <TouristSpots />

            <Countries />

        </div>
    );
};

export default Home;