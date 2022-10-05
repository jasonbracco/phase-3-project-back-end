import React, {useState} from 'react'


function ShoeForm(){

  const [nickname, setNickname] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")


  function handleAddShoe(event){
    event.preventDefault()
  }

    return(
        <div className="new_shoe_form">
        <form className="add_shoe_form" onSubmit={handleAddShoe}>
          <h3>Add a shoe to your collection!</h3>
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="Nickname"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
            placeholder="Size"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder="Color"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Price"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="Image URL"
            className="input-text"
          />
        </form>
      </div>
    );
}

export default ShoeForm