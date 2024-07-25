import { MdOutlinePriceChange } from "react-icons/md";
import { TbRosetteDiscount } from "react-icons/tb";
import { GiHouseKeys } from "react-icons/gi";
import { Fade, Slide } from "react-awesome-reveal";

const WhyBookWithUs = () => {

    return (
        <div className="mx-4 md:mx-auto">
            <h2 className="h3-home text-center">Why Book with
                <span className="text-[#8D493A] font-bold ">&nbsp; WorldTour</span>?
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div>
                    <Slide>
                        <GiHouseKeys className="mx-auto text-6xl text-[#8D493A]" />
                    </Slide>
                    <h3 className="text-2xl font-semibold">StayGuarantee</h3>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <p className="text-md">You are guaranteed a hotel stay, period. In the event of overbooked rooms or problems with your booking, we will recommend a similar hotel for you at no additional costs. Or your money back.</p>
                    </Fade>
                </div>

                <div>
                    <Slide>
                        <MdOutlinePriceChange className="mx-auto text-6xl text-[#8D493A]" />
                    </Slide>
                    <h3 className="text-2xl font-semibold">Honest Price</h3>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <p className="text-md">Prices listed are inclusive of all applicable taxes, surcharges and payment fees.</p>
                    </Fade>
                </div>
                <div>
                    <Slide>
                        <TbRosetteDiscount className="mx-auto text-6xl text-[#8D493A]" />
                    </Slide>
                    <h3 className="text-2xl font-semibold">Special Discounts</h3>
                    <Fade delay={1e3} cascade damping={1e-1}>
                        <p className="text-md">Flight customers, newsletter subscribers and our members enjoy special discounted hotel rates!</p>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default WhyBookWithUs;