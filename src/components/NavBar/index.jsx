import "./style.css";
import logo from "../../images_all/navBar/logo_jonas.png";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="row-menu">
          <input className="inputMenu" id="menu-hamburguer" type="checkbox" />
          <label for="menu-hamburguer">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>
          <ul className="container-link">
            <li>
              <NavLink
                to={"/"}
                className="menu-link"
                activeStyle={{ color: "#00FF87" }}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/About"}
                className="menu-link"
                activeStyle={{ color: "#FF8700" }}
              >
                Sobre mim
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Knowledge"}
                className="menu-link"
                activeStyle={{ color: "#FF8700" }}
              >
                Conhecimentos
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                className="menu-link"
                activeStyle={{ color: "#FF8700" }}
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="menu-link"
                activeStyle={{ color: "#FF8700" }}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="logo-top">
          <img className="logo" src={logo} alt="Icon with my name" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
