import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import ShoeList from "./ShoeList"
import ShoeForm from "./ShoeForm"
import Homepage from "./Homepage"

function App() {

  const [shoes, setShoes]=useState([])

  useEffect(() => {
    fetch("http://localhost:9292/shoes")
    .then(response => response.json())
    .then((shoe) => setShoes(shoe))
  },[shoes])

  function handleUpdateShoeList(updatedShoe) {
    const updatedShoeList = shoes.map((shoe) => {
      if (shoe.id === updatedShoe.id) {
        return updatedShoe;
      } else {
        return shoe;
      }
    });
    setShoes(updatedShoeList);
  }

  function handleAddShoe(newShoe) {
    setShoes([...shoes, newShoe])
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage />
          }
        />
        <Route
          path="/shoelist"
          element={
            <ShoeList shoes={shoes} shoeUpdate={handleUpdateShoeList}/>
          }
        />
      <Route
          path="/addshoe"
          element={
            <ShoeForm onAddShoe={handleAddShoe}/>
          }
        />
      </Routes>
    </div> 
  );
}

export default App;
