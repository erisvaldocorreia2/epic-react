import React, { useState, useEffect } from "react";

// Creating a simple CustomHook
// Rules: in hooks, forever initialize with use...
function useLocalStorageState(key, value = "") {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || value
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
// End customHook

function Greeting({ initialValue = "" }) {
  const [name, setName] = useLocalStorageState("name", initialValue);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <strong>Uso do Hook useEffect e LocalStorage</strong>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function Exercise2() {
  return <Greeting />;
}

export default Exercise2;
