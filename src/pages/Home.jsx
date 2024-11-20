import React from "react";
import local1 from "../Assets/local1.jpg";
import image1 from "../Assets/image1.webp";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: local1,
      tagline: "Fresh Produce at Unbeatable Prices!",
    },
    {
      id: 2,
      image: local1,
      tagline: "Support Local Farmers and Save More!",
    },
  ];

  const categories = [
    { id: 1, name: "Fresh Produce", image: image1 },
    { id: 2, name: "Swallows, Tubers & Grains", image: "tubers.jpg" },
    { id: 3, name: "Fruits", image: "fruits.jpg" },
    { id: 4, name: "Protein Source", image: "protein.jpg" },
    { id: 5, name: "Soup Ingredients", image: "soup-ingredients.jpg" },
    { id: 6, name: "Health & Organic Food", image: "organic.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-[400px] overflow-hidden">
        <div
          className="carousel flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="carousel-item flex-shrink-0 w-full h-full relative"
            >
              <img
                src={slide.image}
                alt={slide.tagline}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <h2 className="text-white text-3xl font-bold">
                  {slide.tagline}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black bg-opacity-50 hover:bg-opacity-70"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black bg-opacity-50 hover:bg-opacity-70"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      {/* Shop by category */}
      <div className="py-8 px-6">
        <h2 className="text-2xl font-bold mb-6 text-left">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border p-4 rounded-lg shadow-sm cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover"
              />
              <h3 className="text-lg font-bold mt-2">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
