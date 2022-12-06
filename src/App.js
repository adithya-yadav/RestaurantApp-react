import React, { useState } from "react";
import Header from "./Components/Layout/Header"
import Meals from "./Components/meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Components/store/CartContextProvider";

function App() {

  const [showCart,setShowCart] = useState(false)

  
  function ShowCartfunction(){
    setShowCart(true)
  }
  function cartCloseFunction(){
    setShowCart(false)
  }
  return (
    <CartContextProvider>
      {showCart && <Cart onClose={cartCloseFunction} onClick={cartCloseFunction}/>}
      <Header onClick={ShowCartfunction} />
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
