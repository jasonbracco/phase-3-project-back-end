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
        <div className="new_player_form">
        <form className="add_player_form" onSubmit={handleAddShoe}>
          <h3>Create a player!</h3>
          <input
            type="text"
            name="nickname"
            value
            onChange
            placeholder="Nickname"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="size"
            value
            onChange
            placeholder="Size"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="color"
            value
            onChange
            placeholder="Color"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="price"
            value
            onChange
            placeholder="Price"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            value
            onChange
            placeholder="Image URL"
            className="input-text"
          />
        </form>
      </div>
    );
}

export default ShoeForm