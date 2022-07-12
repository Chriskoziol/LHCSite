import React, { useState } from 'react';

import FirstImage from '../images/IMG_0063.jpeg';
import SecondImage from '../images/IMG_0065.jpeg';
import ThirdImage from '../images/IMG_0067.jpeg';
import FourthImage from '../images/IMG_0070.jpeg';


function HeroHome() {


  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
<br />
<br />
<br />
<br />
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">


          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-2 md:grid-cols-3 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src={FirstImage}/>              
              
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src={SecondImage}/>  
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src={ThirdImage}/>  
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src={FourthImage}/>  
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroHome;