import React from 'react';
import Banner from '../Banner/Banner';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import FeatureFood from '../FeatureFood/FeatureFood';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle heading={"order online"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatureFood></FeatureFood>
            <Testimonial></Testimonial>
        </div>

    );
};

export default Home;