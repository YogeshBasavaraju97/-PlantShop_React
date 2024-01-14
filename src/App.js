import React from 'react';
import Banner from './component/Banner/Banner.js';
import Cart from './component/cart/Cart.js';
import ShoppingList from '../src/component/ShoppingList/ShoppingList';

const App = () => {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
    </div>
  );
};

export default App;
