// App.js
import React from 'react';

import Footer from "./component/common/footer";
import Navbar from "./component/common/navbar";
import Product from "./component/Eventdetail/Product";


const EventDetail = () => {
    return(
        <div >
            <Navbar />
            <Product />

            <Footer />
        </div>
    )

}

export default EventDetail;
