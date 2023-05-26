import React from 'react'
import AlexanderShoe from './alexanderShoe';
import Nike from './nike'
import Newbalance from './newbalance'


const Shoe = () => {
    return (
        <>
            {/* Alexander shoe collection */}
            <AlexanderShoe/>
            {/* Nike shoe collection */}
           <Nike/>
            {/* New balance shoe Collection */}
            <Newbalance/>
        </>
    )
}


export default Shoe
