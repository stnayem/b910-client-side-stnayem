import img1 from '../assets/europe-imgs/01_Eiffel_Tower_Paris.jpg'
import img2 from '../assets/europe-imgs/03_Palace_of_Versailles_Versailles.jpg'
import img3 from '../assets/europe-imgs/04_Colosseum_Rome.jpg'
import img4 from '../assets/europe-imgs/05_Leaning_Tower_of_Pisa_Pisa.jpg'

const Banner = () => {
    return (
        <div>
            {/* carousel */}
            <div className="carousel w-full max-h-[85vh]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full h-full object-cover absolute top-0 left-0 z-[1]"
                    />
                    <p className="absolute bottom-0 left-0 z-[2] p-5 w-full text-center text-white bg-black bg-opacity-50">
                        Eiffel Tower, Paris. Iconic symbol of Paris, offering panoramic views of the city.
                    </p>
                    <div className="absolute z-[3] left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={img2}
                        className="w-full h-full object-cover absolute top-0 left-0 z-[1]"
                    />
                    <p className="absolute bottom-0 left-0 z-[2] p-5 w-full text-center text-white bg-black bg-opacity-50">
                        Palace of Versailles, Versailles. Opulent palace known for its history, architecture, and stunning gardens.
                    </p>
                    <div className="absolute z-[3] left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full h-full object-cover absolute top-0 left-0 z-[1]"
                    />
                    <p className="absolute bottom-0 left-0 z-[2] p-5 w-full text-center text-white bg-black bg-opacity-50">
                        Colosseum Rome. Iconic amphitheater symbolizing ancient Roman engineering and history.
                    </p>
                    <div className="absolute z-[3] left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;