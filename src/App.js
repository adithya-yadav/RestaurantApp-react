import React, { useState } from "react";
import Header from "./Components/Layout/Header"
import Meals from "./Components/meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [showCart,setShowCart] = useState(false)
  function ShowCartfunction(){
    setShowCart(true)
  }
  function cartCloseFunction(){
    setShowCart(false)
  }
  return (
    <React.Fragment>
      {showCart && <Cart onClick={cartCloseFunction}/>}
      <Header onClick={ShowCartfunction}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
