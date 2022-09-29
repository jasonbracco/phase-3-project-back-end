import React from 'react'


function ShoeForm(){


    return(
        <div className="new_player_form">
        <form className="add_player_form" onSubmit>
          <h3>Create a player!</h3>
          <input
            type="text"
            name="first name"
            value
            onChange
            placeholder="First Name"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="last name"
            value
            onChange
            placeholder="Last Name"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="position"
            value
            onChange
            placeholder="Position"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="number"
            value
            onChange
            placeholder="Number"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="bats"
            value
            onChange
            placeholder="Bats"
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="throws"
            value
            onChange
            placeholder="Throws"
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
          <br />
          <input
            type="submit"
            name="submit"
            value="Create"
            className="submit"
          />
        </form>
      </div>
    );
}

export default ShoeForm