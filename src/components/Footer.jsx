import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-base-200 dark:bg-[#0F172A] dark:text-white mt-6">
            <footer className="dark:text-white max-w-7xl mx-auto footer 
            grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            text-base-content pt-10">
                <nav>
                    <h6 className="footer-title">Tourism Management</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">All Tourism Spot</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Connect with us</h6>

                    <div className="flex gap-4">
                        <a href="http://www.facebook.com" target="_blank"><img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" /></a>
                        <a href="http://www.twitter.com" target="_blank"><img className="w-8 dark:bg-white dark:p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" /></a>
                        <a href="http://www.instagram.com" target="_blank"><FaInstagram className="text-4xl" /></a>



                    </div>


                </nav>
                <form className="col-span-2 sm:col-span-1">
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </footer>
            <p className="text-center py-4">Copyright © 1996–2024 <span className="text-[#8D493A] font-bold">WorldTour.com</span>™. All rights reserved.</p>
            <footer>

            </footer>
        </div>
    );
};

export default Footer;