import React,{useState} from "react";
import PropTypes from "prop-types";
//import {Link} from "react-router-dom";

export default function Navbar(props) {

  return (
    <div>
      <nav className = {`navbar navbar-expand-lg bg-${props.mode} text-white`} >
        <div className="container-fluid">
          <a className="navbar-brand text-light fs-4 fw-bolder " href="/" >
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href= "/"  className="nav-link active text-light mx-4" aria-current="page">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a href ="/about" className="nav-link text-light">
                  {props.about}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  className="form-check-input text-light"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.click}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.txt}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};
Navbar.defaultProps = { title: "enter title", about: "write about textUtils" }; 