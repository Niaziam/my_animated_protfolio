import React from 'react';
import '../allStyles/works.css';
import { Link } from 'react-router-dom';


const WorldCard = (props) => {
  return (
    <>
      <div className="item">
        <Link
          className="layer flex flex-col justify-around select-none z-[2]"
          to={props.path}
        >
          <div>
            <h3 className="heading3">{props.title}</h3>
            <p className="para">{props.about}</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p className="text-center text-highlight text-xl font-bold">View Projects</p>
            <i className="fas fa-arrow-right text-highlight"></i>
          </div>
          <p className="absolute text-highlight font-cursive font-extrabold right-3 bottom-3">Niazium</p>
        </Link>
        <div className='static_page left-[12px] top-[21px] z-0' />
        <div className='static_page left-[9px] top-[19px] z-0' />
      </div>
    </>
  );
};

export default WorldCard;
