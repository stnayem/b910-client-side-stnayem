import CountryCard from "./CountryCard";
import france from '../assets/europe-imgs/01_Eiffel_Tower_Paris.jpg';
import italy from '../assets/europe-imgs/04_Colosseum_Rome.jpg';
import spain from '../assets/europe-imgs/07_Sagrada_Família_Barcelona.png';
import england from '../assets/europe-imgs/12_Stonehenge_Wiltshire.jpg';
import netherlands from '../assets/europe-imgs/13_rijksmuseum-i-amsterdam-hd.jpg';
import switzerland from '../assets/europe-imgs/18_Lake_Geneva_Geneva.png';
import { Link } from "react-router-dom";

const Countries = () => {
    return (
        <div>
            <h2 className="h3-home">Trending Destination</h2>
            <div className="grid sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Link to={`/country/france`} className="bg-red-300"><CountryCard name="France" img={france} /></Link>
                <Link to={`/country/italy`} className="bg-red-300"><CountryCard name="Italy" img={italy} /></Link>
                <Link to={`/country/spain`} className="bg-red-300"><CountryCard name="Spain" img={spain} /></Link>
                <Link to={`/country/england`} className="bg-red-300"><CountryCard name="England" img={england} /></Link>
                <Link to={`/country/netherlands`} className="bg-red-300"><CountryCard name="Netherlands" img={netherlands} /></Link>
                <Link to={`/country/switzerland`} className="bg-red-300"><CountryCard name="Switzerland" img={switzerland} /></Link>
            </div>
        </div>
    );
};

export default Countries;