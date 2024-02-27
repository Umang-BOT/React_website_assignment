import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const testimonials = [
  { id: 1, text: "Testimonial 1" },
  { id: 2, text: "Testimonial 2" },
  { id: 3, text: "Testimonial 3" },
  { id: 4, text: "Testimonial 4" },
  // Add more testimonials if needed
];

const TestimonialSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / 2);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 50}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-1/2 px-4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
