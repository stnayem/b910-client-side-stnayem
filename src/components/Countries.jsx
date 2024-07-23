import CountryCard from "./CountryCard";
import france from '../assets/europe-imgs/01_Eiffel_Tower_Paris.jpg';
import italy from '../assets/europe-imgs/04_Colosseum_Rome.jpg';
import spain from '../assets/europe-imgs/07_Sagrada_Família_Barcelona.png';
import england from '../assets/europe-imgs/12_Stonehenge_Wiltshire.jpg';
import netherlands from '../assets/europe-imgs/13_rijksmuseum-i-amsterdam-hd.jpg';
import switzerland from '../assets/europe-imgs/18_Lake_Geneva_Geneva.png';

const Countries = () => {
    return (
        <div>
            <h2 className="h3-home">Trending Destination</h2>
            <div className="grid sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <CountryCard name="France" img={france} />
                <CountryCard name="Italy" img={italy} />
                <CountryCard name="Spain" img={spain} />
                <CountryCard name="England" img={england} />
                <CountryCard name="Netherlands" img={netherlands} />
                <CountryCard name="Switzerland" img={switzerland} />
            </div>
        </div>
    );
};

export default Countries;