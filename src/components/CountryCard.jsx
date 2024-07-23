

const CountryCard = ({ name, img }) => {
    return (
        <div className="relative h-full">
            <div className="relative z-[1] w-full h-full bg-fuchsia-600">
                <img src={img} alt="" className="h-full" />

            </div>
            <p className="h3-home absolute bottom-0 left-0 z-[2] p-5 w-full text-center text-white bg-black bg-opacity-50">
                {name}
            </p>

        </div>
    );
};

export default CountryCard;