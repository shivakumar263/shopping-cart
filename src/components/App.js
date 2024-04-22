import React, { useState } from "react";
import Store from "./Store";
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.jpeg';
import image8 from '../images/image8.jpeg';
import image9 from '../images/image9.jpeg';
import image10 from '../images/image10.jpeg';

function App() {

    const [items, setItems] = useState([
        { id: 1, name: 'Google-Pixel 8 Pro', price: 999, image: image1 },
        { id: 2, name: 'Samsung S23 ultra', price: 1199, image: image2 },
        { id: 3, name: 'Iphone 15', price: 799, image: image3 },
        { id: 4, name: 'Google-Pixel 6', price: 499, image: image4 },
        { id: 5, name: 'Samsung Galaxy S24 ultra', price: 1300, image: image5},
        { id: 6, name: 'Samsung Galaxy Z Flip 5', price: 1099, image: image6 },
        { id: 7, name: 'Samsung Galaxy Z Fold 3', price: 1198, image: image7 },
        { id: 8, name: 'Iphone 14 Pro Max', price: 1199, image: image8 },
        { id: 9, name: 'Iphone 15 Pro Max', price: 1399, image: image9 },
        { id: 10, name: 'One Plus 12', price: 499, image: image10 }
        
    ]);


    return (
        <div>
            <Store data={items} />
            
        </div>

    )
}

export default App;
