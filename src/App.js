import './App.css';
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="bg-light">
        <Header />
        <NavBar />
        <ItemListContainer greeting={"Lista de items"}/>
    </div>
  );
}

export default App;