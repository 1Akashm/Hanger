import { React, useState } from "react";
import AlexanderShoe from "./alexanderShoe";
import Nike from "./nike";
import Newbalance from "./newbalance";
// import { Link } from 'react-router-dom';

const ALL_SHOES = [
    {
        id: 1,
        title: "Alexander McQueen",
        body: "Price",
        price: 299,
        image: require("../../upload/alexander/Large-705071W4W118395_F.jpg"),
    },
    {
        id: 2,
        title: "Alexander McQueen",
        body: "Price",
        price: 299,
        image: require("../../upload/alexander/Large-727392WICG69026_F.jpg"),
    },
    {
        id: 3,
        title: "Alexander McQueen",
        body: "Price",
        price: 299,
        image: require("../../upload/alexander/Large-688548WIC949000_E.jpg"),
    },
    {
        id: 4,
        title: "Alexander McQueen",
        body: "Price",
        price: 299,
        image: require("../../upload/alexander/Large-727394WHXMT1643_F.jpg"),
    },
    {
        id: 5,
        title: "Alexander McQueen",
        body: "Price",
        price: 299,
        image: require("../../upload/alexander/Large-727405W4RY14203_F.jpg"),
    },
    {
        id: 6,
        title: "Alexander McQueen",
        body: "Price",
        price: 299,
        image: require("../../upload/alexander/Large-735773WHGPC1688_D.jpg"),
    },
    {
        id: 7,
        title: "Alexander McQueen",
        body: "Price",
        price: 299,
        image: require("../../upload/alexander/Large-735775WICYX9061_R.jpg"),
    },
    {
        id: 8,
        title: "Alexander McQueen",
        body: "Price",
        price: 299,
        image: require("../../upload/alexander/Large-735773WHGPC1688_F.jpg"),
    },

    {
        id: 9,
        title: "Nike",
        body: "Price",
        price: 299,
        image: require("../../upload/nike/air-force-1-07-mens-shoes-jBrhbr.png"),
    },
    {
        id: 10,
        title: "Nike",
        body: "Price",
        price: 299,
        image: require("../../upload/nike/air-jordan-6-retro-shoes-QLGPHR.png"),
    },
    {
        id: 11,
        title: "Nike",
        body: "Price",
        price: 299,
        image: require("../../upload/nike/air-max-90-mens-shoes-6n3vKB.png"),
    },
    {
        id: 12,
        title: "Nike",
        body: "Price",
        price: 299,
        image: require("../../upload/nike/air-vapormax-2023-flyknit-mens-shoes-3q1qZg.png"),
    },
    {
        id: 13,
        title: "Nike",
        body: "Price",
        price: 299,
        image: require("../../upload/nike/men-s-shoes-clothing-accessories (2).jpg"),
    },
    {
        id: 14,
        title: "Nike",
        body: "Price",
        price: 299,
        image: require("../../upload/nike/men-s-shoes-clothing-accessories (3).jpg"),
    },
    {
        id: 15,
        title: "Nike",
        body: "Price",
        price: 299,
        image: require("../../upload/nike/men-s-shoes-clothing-accessories (4).jpg"),
    },

    {
        id: 16,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/bb550www_nb_02_i.webp"),
    },
    {
        id: 17,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/bb550ncl_nb_02_i.webp"),
    },
    {
        id: 18,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/bb550gd1_nb_02_i.webp"),
    },
    {
        id: 19,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/m108012o_nb_02_i.webp"),
    },
    {
        id: 20,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/m990gl6_nb_02_i.jpeg"),
    },
    {
        id: 21,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/men-s-shoes-clothing-accessories (1).jpg"),
    },
    {
        id: 22,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/ml574evg_nb_02_i.webp"),
    },
    {
        id: 23,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/pegasus-40-se-mens-road-running-shoes-MCGW9h.png"),
    },
    {
        id: 24,
        title: "New Balance",
        body: "Price",
        price: 299,
        image: require("../../upload/nb/men-s-shoes-clothing-accessories.jpg"),
    },
];

function transformShoesIntoCategory(shoes) {
    const alexander = [...shoes].filter((datas, index) =>
        datas.title.includes("Alexander McQueen")
    );
    const nike = [...shoes].filter((datas, index) => datas.title.includes("Nike"));
    const newBalance = [...shoes].filter((datas, index) =>
        datas.title.includes("New Balance")
    );

    // console.log("nike is", nike);

    return {
        alexander,
        nike,
        newBalance,
    };
}

const Shoe = () => {
    const [allShoes, setAllShoes] = useState(ALL_SHOES);

    const { alexander, nike, newBalance } = transformShoesIntoCategory(allShoes);

    const handleCart = (item) => {
        
            // Retrieve existing items from localStorage
            const storedItems = JSON.parse(localStorage.getItem('shoes')) || [];
          
            // Add the new item to the array
            const updatedItems = [...storedItems, item];
          
            // Store the updated array in localStorage
            localStorage.setItem('shoes', JSON.stringify(updatedItems));
            console.log("item is", item);

          
    };

    return (
        <>
            <div>
                {/* Alexander shoe collection */}
                <AlexanderShoe shoesDetails={alexander} handleCart={handleCart} />
                {/* Nike shoe collection */}
                <Nike nikeDetails={nike} handleCart={handleCart} />
                {/* New balance shoe Collection */}
                <Newbalance
                    NewBalanceDetails={newBalance}
                    handleCart={handleCart}
                />
            </div>
        </>
    );
};

export default Shoe;
