import React from "react";
import ShoeCard from"./ShoeCard"
import "../index.css"


function ShoeList({shoes, shoeUpdate, onShoeDelete, brands}){
    console.log(shoes)
    return(
        <div className="shoe_collection">
            {shoes.map((shoe) => {
                return <ShoeCard brands={brands} onShoeDelete={onShoeDelete} shoeUpdate={shoeUpdate} key={shoe.id} shoe={shoe} />
            })}
        </div>
    )
}

export default ShoeList