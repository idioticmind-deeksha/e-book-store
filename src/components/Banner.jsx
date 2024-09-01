import React from "react";
import BannerImg from "../../public/images/banner-left-img.webp"
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 pe-0 md:py-28  py-24">
                <div className="bannerSection flex flex-col md:flex-row md:px-2 px-4 items-center gap-x-6">
                    <div className="w-full md:w-w/2leftPart">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold">Keep it simple, so you'll keep doing it.</h1>
                            <h5 className="text-2xl text-pink-500">Author, Entrepreneur, Speaker</h5>
                            <p>I’m a business leader, Technology entrepreneur, Speaker, Author and Investor. My goal is to inspire others towards a positive change.</p>
                            <div className="banner-email">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="text" className="grow" placeholder="Email" />
                                </label>
                                <Link to="/course" className="btn mt-6 btn-secondary">Export More</Link>
                            </div>
                        </div>

                    </div>
                    <div className="w-full md:w-w/2rightPart md:px-2 px-4">
                       <img src={BannerImg} alt="bannerimage " className="w-full w-full"/>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Banner;