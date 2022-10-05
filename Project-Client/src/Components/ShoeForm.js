import React, {useState} from 'react'


function ShoeForm({onAddShoe}){

  const [nickname, setNickname] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")


  function handleShoeSubmit(event){
    event.preventDefault()

    fetch("http://localhost:9292/addshoe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        niciname: nickname,
        size: size,
        color: color,
        price: price,
        image: image
      }),
    })
      .then(response => response.json())
      .then((newShoe) => {
        onAddShoe(newShoe);
        setNickname("");
        setSize("");
        setColor("");
        setPrice("");
        setImage("");
      })
  }

    return(
        <div className="new_shoe_form">
        <form className="add_shoe_form" onSubmit={handleShoeSubmit}>
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
          <br />
          <button type="submit">Add Shoe!</button>
        </form>
      </div>
    );
}

export default ShoeForm