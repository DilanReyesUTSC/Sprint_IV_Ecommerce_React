import "../css/MenuAdmin.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import "../header.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductList from "../pages/Products/ProductsList/ProductsList";
import ProductView from "../pages/Products/ProductView/ProductView";
import ProductsNew from "../pages/Products/ProductsNew/ProductsNew";
import Header from "./Header";
import { DarkMode, DarkModeContext } from "../context/DarkModeContext";
import home from "../img/home.svg";
import caja from "../img/package-variant-closed.svg"
import tienda from "../img/store.svg"

const MenuAdmin = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);
  const [text, setText] = useState("Cambiar a modo oscuro");
  const [showNav, setShowNav] = useState(false);
  const handleOnClickDarkMode = () => {
    setDarkMode(!darkMode);
    darkMode
      ? setText("Cambiar a modo oscuro")
      : setText("Cambiar a modo claro");
  };
  return (
    <>
      <div className="menuAdmin">
        {/* <section className="sideBar2">
          <div className="App">
            <header>e
              <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
            </header>
            <Navbar show={showNav} />
          </div>
        </section> */}

        <section className={darkMode ? "sideBar--BgColorDark" : "sideBar"}>
          <h1>MiEcommerce</h1>

          <div className={darkMode ? "menus--BgColorDark" : "SbInicio"}>
            <img className="imagen" src={home} />
            <Link
              className={darkMode ? "navbar--link--BgColorDark" : "navbar--link"}
              to="/"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Inicio
            </Link>
          </div>
          <div className={darkMode ? "SbProductos--BgColorDark" : "SbProductos"}>
          <img className="imagen" src={caja} />
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Productos
            </Link>
          </div>
          <div className="menus SbTiendas">
          <img className="imagen" src={tienda} />
            <Link to="*" style={{ textDecoration: "none", color: "#000" }}>
              Tiendas
            </Link>
          </div>
          <div>
            <button onClick={handleOnClickDarkMode}>Modo Oscuro</button>
          </div>
        </section>

        <section className={darkMode ? "mainArea--BgColorDark" : "mainArea"}>
          <Header />
          {/* Aqui va el header */}

          <DarkModeContext>
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/products/new" element={<ProductsNew />} />
              <Route path="*" element={<p>Error 404</p>}/>
            </Routes>
          </DarkModeContext>
        </section>
      </div>
    </>
  );
};

export default MenuAdmin;
