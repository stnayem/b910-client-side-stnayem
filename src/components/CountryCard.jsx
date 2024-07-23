

const CountryCard = ({ name, img }) => {
    return (
        <div>
            <p>{name}</p>
            <div className="">
                <img src={img} alt="" />

            </div>

        </div>
    );
};

export default CountryCard;