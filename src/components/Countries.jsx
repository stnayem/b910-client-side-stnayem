import CountryCard from "./CountryCard";
import france from '../assets/europe-imgs/01_Eiffel_Tower_Paris.jpg';
import italy from '../assets/europe-imgs/04_Colosseum_Rome.jpg';
import spain from '../assets/europe-imgs/07_Sagrada_Família_Barcelona.png';
import england from '../assets/europe-imgs/12_Stonehenge_Wiltshire.jpg';
import netherlands from '../assets/europe-imgs/13_rijksmuseum-i-amsterdam-hd.jpg';
import switzerland from '../assets/europe-imgs/18_Lake_Geneva_Geneva.png';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Countries = () => {
    const [allCountry, setAllCountry] = useState([])
    useEffect(() => {
        fetch('http://localhost:5005/allCountry')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllCountry(data);
            })
    }, [])
    return (
        <div>
            <h2 className="h3-home">Trending Destination</h2>
            <div className="grid sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    allCountry.map(tempCountry => <CountryCard
                        key={tempCountry._id} newCountry={tempCountry} />)
                }
            </div>
        </div>
    );
};

export default Countries;