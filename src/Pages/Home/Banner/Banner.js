import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <body>
 
<div class="top-banner"></div>
  
  <div class="intro">
    <h1>THE WORLDS' MOST VERSATILE COMMERCIAL DRONE</h1>
    <h4 className="text-white">【Sturdy and stable】 The holder has good supporting force and can support a weight within 1.4 b 
        /640g. Hold the controller normally, the tablet can maintain a stable position. You can use accessories such as sunshade</h4>

    
    <Link to={'/products'}>
    <button className="button-43">Explore More</button>
                
            </Link>
  </div>
</body>
        </div>
    );
};

export default Banner;