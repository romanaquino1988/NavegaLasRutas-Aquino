import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="Bienvenido a Gordo Random" />
    </div>
  );
}

export default App;
