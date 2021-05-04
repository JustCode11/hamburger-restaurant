import React from 'react'
import StartPage from "../components/StartPage";
import MenuTop from "../components/MenuTop";
import IngredientsContainer from "../components/IngredientsContainer";
import InformationContainer from "../components/InformationContainer";
import ReviewContainer from "../components/ReviewContainer";
import ImageCarousal from "../components/ImageCarousel";

function HamburgerRestaurant() {
    return (
        <div>
            <StartPage />
            <MenuTop />
            <IngredientsContainer />
            <InformationContainer />
            <ReviewContainer />
            <ImageCarousal />
        </div>
    )
}

export default HamburgerRestaurant
