import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
// import sliderData from '../../data/sliderData.json';
import './RecipeSlider.css';
import axios from 'axios';

export default function RecipeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    const [sliderData, setSliderData] = useState([]);

   

    useEffect(() => {
        axios.get("http://localhost:3500/slider").then((response) => {
            setSliderData(response.data);
        });
    }, []);

    
    return (
        <div className='container'>
            <div>
                <span className='fw-bold fs-5'>Browse Your Recipes</span>
            </div>
            <div>
                <Slider {...settings}>
                    {
                        sliderData.map((slider) => {
                            return <div className='card shadow carousal-card'>
                                <img src={slider.imageUrl} alt={slider.name} width="200" height="150" />
                                <div className='text-center'>
                                    <span className='fs-5 fw-bold'>{slider.name}</span>
                                </div>
                            </div>
                        })
                    }

                </Slider>
            </div>
        </div>
    );
}
