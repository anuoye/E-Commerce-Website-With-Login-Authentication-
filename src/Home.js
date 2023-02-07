import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img  className="home__image"
            src="https://m.media-amazon.com/images/I/71N3Vmy5V4L._SX3000_.jpg" alt=""/>

<div className="home__row">
<Product
id="123456" 
title="The Lean Startup"
price={29.99}
image="https://m.media-amazon.com/images/I/41BVRFzDzoL._SX322_BO1,204,203,200_.jpg"
rating={5}
/>
<Product
id="23456" 
title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Black)"
price={29.99}
image="https://m.media-amazon.com/images/I/61WTUr72o3L._AC_UY218_.jpg"
rating={4}/>

</div>


<div className="home__row">
<Product
id="324676" 
title="Smart Watch for Men Fitness Tracker: (Answer/Make Call) IP68 Waterproof Smartwatch for Android iOS Phone Sport Running Digital Watches with Heart Rate Blood Pressure Sleep"
price={29.99}
image="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_UL320_.jpg"
rating={4} />
<Product
id="897543" 
title="Smart Watch for Men Fitness Tracker: (Answer/Make Call) IP68 Waterproof Smartwatch for Android iOS Phone Sport Running Digital Watches with Heart Rate Blood Pressure Sleep"
price={29.99}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
rating={5} />
<Product 
id="987654" 
title="Smart Watch for Men Fitness Tracker: (Answer/Make Call) IP68 Waterproof Smartwatch for Android iOS Phone Sport Running Digital Watches with Heart Rate Blood Pressure Sleep"
price={29.99}
image="https://m.media-amazon.com/images/I/51ysOQMyoGL._AC_SY200_.jpg"
rating={3}/>
</div>



<div className="home__row">
<Product
id="476549" 
title="SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)"
price={29.99}
image="https://m.media-amazon.com/images/I/915Xj2rO8WL._AC_UY218_.jpg"
rating={3}/>

</div>



       
       
       
        </div>
 </div>
  )
}

export default Home