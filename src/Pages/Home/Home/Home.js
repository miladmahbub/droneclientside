import React from 'react';
import Contact from '../../contact/Contactus';
import Footer from '../../footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Reviews></Reviews>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;