import React from "react";
import HeroSection from './Components/HeroSection';
import PopularCars from './Components/PopularCar';
import RecommendationCars from './Components/RecommendationCar'
const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <PopularCars/>
      <RecommendationCars/>
    </div>
  );
};

export default HomePage;