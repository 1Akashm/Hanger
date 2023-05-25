import React from 'react'
import { shoesDetails } from './shoedetails.js'

const Shoe = () => {
    return (
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {
                shoesDetails.map((detail, _idx) => <div key={detail.id} style={{ backgroundColor: 'red', height: "50px", width: "200px" }}><span>{detail.title}</span></div>)
            }
        </div>
    )

}


export default Shoe
