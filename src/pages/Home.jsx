import Banner from "../components/Banner";
import Countries from "../components/Countries";
import HeroTypeWriter from "../components/HeroTypeWriter";
import TopRatedPlaces from "../components/TopRatedPlaces";
import TouristSpots from "../components/TouristSpots";
import WhyBookWithUs from "../components/WhyBookWithUs";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-y-6">
            <HeroTypeWriter />

            <Banner />

            <TouristSpots />

            <Countries />

            <TopRatedPlaces />

            <WhyBookWithUs />

        </div>
    );
};

export default Home;