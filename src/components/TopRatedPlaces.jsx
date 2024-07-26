import { Fade, Slide } from 'react-awesome-reveal';
import venice from '../assets/europe-imgs/06_Venetian_Canals_Venice.png'

const TopRatedPlaces = () => {
    return (
        <div className="m-8">
            <hr />
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 my-8">
                <div className="text-center md:text-left">
                    <Slide>
                        <h2 className="text-3xl font-semibold mb-2">Register Your Accommodation</h2>
                    </Slide>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <p className="w-full md:w-[80%]">Reach millions of potential guests and transform your business with us.</p>
                    </Fade>

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