import React from "react";
// import { Link } from "react-router-dom";
import "./shoe.css";

const Shoes = () => {
    return (
        <>
        
            {/* <div className="flex justify-center">
    <div className="flex flex-col ml-8 mt-5 w-2/3">
      <img src={img} alt="image1"className='rounded-lg h-4/6'/>
      <p  >Price</p>
      <p className='text-center'>$299 -/</p>

      <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 '>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>

    <div className="flex flex-col ml-10 mt-5 w-2/3">
      <img src={img2} alt="image1"className='rounded-lg h-4/6'/>
      <p className='text-center'>Price</p>
      <p className='text-center'>$299 -/</p>

      <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 hover:text-pink-100'>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>

    <div className="flex flex-col ml-10 mr-10 mt-5 w-2/3">
      <img src={img3} alt="image1"className='rounded-lg h-4/6'/>
      <p className='text-center'>Price</p>
      <p className='text-center'>$299 -/</p>

      <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 hover:text-pink-100'>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>
  </div>


  <div className="flex justify-center">
    <div className="flex flex-col ml-8 w-2/3">
      <img src={img} alt="image1"className='rounded-lg h-4/6'/>
      <p className='text-center'>Price</p>
      <p className='text-center'>$299 -/</p>

      <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 hover:text-pink-100'>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>

    <div className="flex flex-col ml-10  w-2/3">
      <img src={img2} alt="image1"className='rounded-lg h-4/6'/>
      <p className='text-center'>Price</p>
      <p className='text-center'>$299 -/</p>

      <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 hover:text-pink-100'>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>

    <div className="flex flex-col ml-10 mr-10 w-2/3">
      <img src={img3} alt="image1"className='rounded-lg h-4/6'/>
      <p className='text-center'>Price</p>
      <p className='text-center'>$299 -/</p>

      <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 hover:text-pink-100'>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>
  </div>
  <div className="flex justify-center">
    <div className="flex flex-col ml-8 w-2/3">
      <img src={img} alt="image1"className='rounded-lg h-4/6'/>
      <p className='text-center'>Price</p>
      <p className='text-center'>$299 -/</p>

      <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 hover:text-pink-100'>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>

    <div className="flex flex-col ml-10 w-2/3">
      <img src={img2} alt="image1"className='rounded-lg h-4/6'/>
      <p className='text-center'>Price</p>
      <p className='text-center'>$299 -/</p>

      <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 hover:text-pink-100'>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>

    <div className="flex flex-col ml-10 mr-10 w-2/3">
      <img src={img3} alt="image1"className='rounded-lg h-4/6'/>
      <p className='text-center'>Price</p>
      <p className='text-center'>$299 -/</p>

     <Link to={'/cart'}> <button className="btn-home">
      <span className='mr-2 text-slate-950 hover:text-pink-100'>Add to cart</span>
  <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
    <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
  </svg>
</button>
</Link>
    </div>
  </div> */}
        </>
    );
};

export default Shoes;
