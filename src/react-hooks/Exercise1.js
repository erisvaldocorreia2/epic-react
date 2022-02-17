import React, { useState } from "react";

function Greeting() {
  const [name, setName] = useState();

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function Exercise1() {
  return <Greeting />;
}

export default Exercise1;
