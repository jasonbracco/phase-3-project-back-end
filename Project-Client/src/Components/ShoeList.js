import React from "react";
import ShoeCard from"./ShoeCard"
import "../index.css"


function ShoeList({shoes}){
 
    return(
        <div className="shoe_collection">
            {shoes.map((shoe) => {
                return <ShoeCard key={shoe.id} shoe={shoe} />
            })}
        </div>
    )
}

export default ShoeList