import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import ShoeList from "./ShoeList"
import ShoeForm from "./ShoeForm"
import Homepage from "./Homepage"
import SortShoes from "./SortShoes"

function App() {

  const [shoes, setShoes]=useState([])
  const [brands, setBrands]=UseState([])

  useEffect(() => {
    fetch("http://localhost:9292/shoes")
    .then(response => response.json())
    .then((shoe) => setShoes(shoe))
  },[])

  useEffect(() => {
    fetch("http://localhost:9292/brands")
    .then(response => response.json())
    .then((brand) => setBrands(brand))
  },[])

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

  function handleDeleteShoe(id) {
    const updatedShoeList = shoes.filter((shoe) => shoe.id !== id);
    setShoes(updatedShoeList);
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
            <ShoeList onShoeDelete={handleDeleteShoe} shoes={shoes} shoeUpdate={handleUpdateShoeList}/>
          }
        />
        <Route
          path="/addshoe"
          element={
            <ShoeForm onAddShoe={handleAddShoe}/>
          }
        />
        <Route
          path="/listbybrand"
          element={
            <SortShoes shoes={shoes}/>
          }
        />
      </Routes>
    </div> 
  );
}

export default App;
