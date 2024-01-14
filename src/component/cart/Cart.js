import React from 'react';
import './Cart.css';

const Cart = () => {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  return (
    <div className="jh-cart">
      <h2>Cart</h2>
      <ul>
        <li>Monstera : {monsteraPrice}€</li>
        <li>Ivy : {ivyPrice}€</li>
        <li>Flowers : {flowerPrice}€</li>
      </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice}€
    </div>
  );
};

export default Cart;
