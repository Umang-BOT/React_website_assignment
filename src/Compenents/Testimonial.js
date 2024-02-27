import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from '../Assets/networking.png'

const Testimonial = () => {
    function MultipleItems() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1
        };
  return (
    <div className='w-3/4 m-auto p-2'>
        <div className='mt-20'>
        <Slider {...settings}>
            {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex items-center mb-8">
                <img src={bg} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                <p className="text-gray-600">{testimonial.text}</p>
                <h3 className="text-lg font-semibold mt-2">-{testimonial.name}</h3>
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}

  return <MultipleItems />; 
}

const testimonials = [
    {name: "ABC", text: "Very Good Experience." },
    { name: "DEF", text: "Very Good Experience." },
    { name: "GHI", text: "Very Good Experience." },
    { name: "JKL", text: "Very Good Experience." },
  ];
  

export default Testimonial;
