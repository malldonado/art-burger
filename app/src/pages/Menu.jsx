import React from 'react';
// import FlipBook from '../components/flipbook/flipbook';
import Navbar from '../components/navbar/navbar';
import MenuFull from '../components/menu/menuFull';

function Menu() {
  return (
    <div className="bg-black">
      <Navbar />
      <MenuFull/>
    </div>
  );
}

export default Menu;
