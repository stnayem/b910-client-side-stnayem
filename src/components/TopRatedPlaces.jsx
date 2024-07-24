import venice from '../assets/europe-imgs/06_Venetian_Canals_Venice.png'

const TopRatedPlaces = () => {
    return (
        <div className="my-8">
            <hr />
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 my-8">
                <div>
                    <h2 className="text-2xl font-bold">Register Your Accommodation</h2>
                    <p className="w-[80%]">Reach millions of potential guests and transform your business with us.</p>
                </div>
                <div className="max-w-96">
                    <img src={venice} className="border rounded-lg" alt="" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default TopRatedPlaces;