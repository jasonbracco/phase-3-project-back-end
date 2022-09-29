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
},[])

console.log(shoes)


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
            <ShoeList/>
          }
        />
      <Route
          path="/addshoe"
          element={
            <ShoeForm/>
          }
        />
      </Routes>
    </div> 
  );
}

export default App;
