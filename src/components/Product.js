import React, { useState } from "react";
const Product = ({ post }) => {

  const[selected, setSelected] = useState(false)

  const handleToggle = () => {
    setSelected((prevState) => !prevState); // Toggle between true and false
  };


  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt={`img of ${post.title}`} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button onClick={handleToggle }>{selected ? <p> Remove item </p> : <p>Add to cart</p>}</button>
    </div>
  );
};

export default Product;
