import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import newBalance from '../../upload/nb/logo.svg'
import "./shoes.css";
import "./shoe.css";


const Newbalance = () => {
const [NewBalanceDetails,setNewBalanceDetails] = useState(
    [{
    id: 1,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/bb550www_nb_02_i.webp"),
},
{
    id: 2,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/bb550ncl_nb_02_i.webp"),
},
{
    id: 3,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/bb550gd1_nb_02_i.webp"),
},
{
    id: 4,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/m108012o_nb_02_i.webp"),
},
{
    id: 5,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/m990gl6_nb_02_i.jpeg"),
},
{
    id: 6,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/men-s-shoes-clothing-accessories (1).jpg"),
},
{
    id: 7,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/ml574evg_nb_02_i.webp"),
},
{
    id: 8,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/pegasus-40-se-mens-road-running-shoes-MCGW9h.png"),
},
{
    id: 9,
    title: "New Balance",
    body: "Price",
    price: 299,
    image: require("../../upload/nb/men-s-shoes-clothing-accessories.jpg"),
},
]
)
  return (
    <>
    <img src={newBalance} alt="newbalance" className='newbalance-logo' />
            <div className='Nike-shoe'>
                {
                    NewBalanceDetails.map((details) => <div key={details.id} className='container-inside-newbalance'>
                        <img src={details.image} alt="nike shoe" className='image-style' />
                        <div className='content-detail'>
                            <h1>{details.title}</h1>
                            <p>{details.body}</p>
                            <p>${details.price}</p>
                        </div>
                        <Link to={'/cart'}> <button className="btn-home" >
                            <span className='mr-2 text-slate-950 '>Add to cart</span>
                            <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
                            </svg>
                        </button>
                        </Link>
                    </div>)
                }
            </div>
    </>
  )
}

export default Newbalance
