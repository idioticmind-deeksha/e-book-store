import React from "react";
import List from "../../public/list.json";
import Slider from "react-slick";
import CardBox from "./cards";


const FreeBook = () => {
    const filterData = List.filter((data) => data.category == "free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>

            <div className="max-w-screen-2xl container mx-auto md:px-20 pe-0">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <h3 className="font-semibold text-xl pb-w">Free Offterd </h3>

                <div className="slider-container">
                    <Slider {...settings}>
                        {filterData.map((item) => (
                        <CardBox item={item} key={item.id}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}
export default FreeBook;