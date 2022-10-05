import React from "react";
import ShoeCard from"./ShoeCard"
import "../index.css"


function ShoeList({shoes, shoeUpdate}){
 
    return(
        <div className="shoe_collection">
            {shoes.map((shoe) => {
                return <ShoeCard shoeUpdate={shoeUpdate} key={shoe.id} shoe={shoe} />
            })}
        </div>
    )
}

export default ShoeList