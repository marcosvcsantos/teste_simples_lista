import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <center>
        <img src="./senai_branco.png" />

        <ul className="lista">
          <li>Informação Curso</li>
          <li>Oficina Dev apps</li>
          <li>Crítica ou sugestão</li>
          <li>Contato e Materiais</li>
        </ul>
      </center>
    </div>
  );
}
