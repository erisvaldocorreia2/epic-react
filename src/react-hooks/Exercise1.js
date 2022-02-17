import React, { useState } from "react";

function Greeting({ initialValue = "" }) {
  const [name, setName] = useState(initialValue);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <strong>Uso do Hook useState</strong>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function Exercise1() {
  return <Greeting />;
}

export default Exercise1;
