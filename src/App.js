import './App.css';
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <div className="mainContainer">
          <Header />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer />
              }
            />
            <Route
              path="/item/:id"
              element={
                <ItemDetailContainer />
              }
            />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;