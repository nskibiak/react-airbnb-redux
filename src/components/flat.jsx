import React from 'react';

const Flat = (props) => {

const style = {
  backgroundImage: `url(${props.flat.imageUrl})`
};

  return (
    <div className="card" style={style}>
      <div className="card-description"><h2>{props.flat.name}</h2></div>
      <div className="card-category">{props.flat.price} {props.flat.priceCurrency}</div>
    </div>
  );
};

export default Flat;
