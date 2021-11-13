import React from 'react';
import Footer from '../footer/Footer';
import Services from '../Home/Services/Services';
import Allproducts from '../Productspage/Allproducts/Allproducts';
import Navigation from '../Shared/Navigation/Navigation';

const Products = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Services></Services> */}
            <Allproducts></Allproducts>
            <Footer></Footer>
        </div>
    );
};

export default Products;