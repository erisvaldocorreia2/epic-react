//import Exercise1 from "./react-hooks/Exercise1";
//import Exercise2 from "./react-hooks/Exercise2";
import Exercise3 from "./react-hooks/Exercise3";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title" data-testid="test-title">
        Curso Epic React
      </h1>
      {/* Instanciar aqui os Exercicios para validação */}

      {/* <Exercise1 /> */}
      {/* <Exercise2 /> */}
      <Exercise3 />
    </div>
  );
}
