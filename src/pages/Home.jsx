import React from 'react';
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import BestSellerCategory from "../components/BestSellerCategory";
import Bestseller from "../components/Bestseller";
import NewArrivals from "../components/NewArrivals";
import BlogSmall from "../components/BlogSmall";
import Footer from "../components/Footer";


function Home(props) {
    return (
        <>
            <Slider/>
            <Banner/>
            <Bestseller/>
            <BlogSmall/>
        </>
    );
}

export default Home;