import React from 'react';
import '../allStyles/works.css';

const WorldCard = (props) => {
  return (
    <>
      <div className="item">
        <div className="layer flex flex-col justify-around select-none">
          <div>
            <h3 className="heading3">{props.title}</h3>
            <p className="para">{props.about}</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p className="text-center text-highlight text-xl font-bold">View Projects</p>
            <i className="fas fa-arrow-right text-highlight"></i>
          </div>
          <p className="absolute text-highlight font-cursive font-extrabold right-3 bottom-3">Niazium</p>
        </div>
      </div>
    </>
  );
};

export default WorldCard;
