import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer text="Hola Coders!" />
    </>
  );
}

export default App;
