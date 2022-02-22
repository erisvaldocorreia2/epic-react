import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <div>
        <h3>React Hooks</h3>
        <Link to="/exe1">Exercicio 1 - useState</Link>
        <br />
        <Link to="/exe2">Exercicio 2 - useEffect e LocalStorage</Link>
        <br />
        <Link to="/exe3">Exercicio 3 - useStates</Link>
        <br />
      </div>
    </div>
  );
}
