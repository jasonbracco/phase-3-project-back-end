import React, {useState} from 'react'
import Select from 'react-select';


function ShoeForm({onAddShoe, brands}){

  const [nickname, setNickname] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [use, setUse] = useState("")
  const [newBrand, setNewBrand]=useState("")

  function onBrandSelection(event){
    console.log(event.target.value)
  }

  function handleShoeSubmit(event){
    event.preventDefault()

    fetch("http://localhost:9292/shoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: nickname,
        size: size,
        color: color,
        price: price,
        image_url: image,
        use: use
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
        setUse("");
      })
    }

    return(
      <div>
        <div className="brand_select">
        <form className="brand_form">
          <h3>Add a shoe to your collection!</h3>
          <p>First, select the brand for your new shoe, or create a new one:</p>
          Brand: <select>
              <option>Select</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>{brand.brand_name}</option>
              ))}
            </select>
            <br />
            <input
              type="text"
              name="new_brand"
              value={newBrand}
              onChange={(event) => setNewBrand(event.target.value)}
              placeholder="New Brand"
              className="input-text"
            />
            <br />
          <button type="submit">Add/Create Brand</button>
        </form>

        </div>
        <br />
        <br />
        <br />
        <div className="new_shoe_form">
          <form className="add_shoe_form" onSubmit={handleShoeSubmit}>
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
            <input
              type="text"
              name="use"
              value={use}
              onChange={(event) => setUse(event.target.value)}
              placeholder="Use"
              className="input-text"
            />
            <br />
            {/* Brand: <select>
              {brands.map((brand) => (
                <option key={brand.id} value="Brand">{brand.brand_name}</option>
              ))}
            </select> */}
            <br />
            <button type="submit">Add Shoe!</button>
          </form>
        </div>
      </div>
    );
}

export default ShoeForm