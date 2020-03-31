import React from 'react';

const Flat = (props) => {

const style = {
  backgroundImage: `url(${props.flat.imageUrl})`
};

  return (
    <div className="flat card-container">
      <div className="card" style={style}>
        <h2>{props.flat.name}</h2>
        <p>{props.flat.price} {props.flat.priceCurrency}</p>
      </div>
    </div>
  );
};

export default Flat;
