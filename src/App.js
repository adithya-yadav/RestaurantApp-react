import React from "react";
//import Cart from "./Components/Cart/Cart.js";
import Header from "./Components/Layout/Header"
import Meals from "./Components/meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
