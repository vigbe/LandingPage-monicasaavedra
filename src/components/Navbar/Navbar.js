import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeCurrentPage } from "../../redux/actions/currentPageActions";
import { useMediaQuery } from "react-responsive";

function Navbar({ currentPage, changeCurrentPage }) {
  const [pageLink, setPageLink] = useState(window.location.href.split("/")[3]);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const isSmall768 = useMediaQuery({ query: "(max-width: 768px)" });
  const contactUsStyle = {
    backgroundColor: "#029837",
    color: "#fff",
  };
  const hamburgerStyle = { display: "flex" }
  useEffect(() => {
    changeCurrentPage(window.location.href.split("/")[3]);
  });
  useEffect(() => {
    setPageLink(currentPage);
  }, [currentPage]);

  return (
    <div>
      <div className="navbar">
        <img
          className="mainLogoImage"
          src="image/mainLogo.png"
          alt="mainLogo"
        ></img>
        <div className="navbar-right">
          <div className="links">
            <div>
              <Link
                onClick={() => changeCurrentPage("")}
                to="/"
              >
                Inicio
              </Link>
              {pageLink === "" ? (
                <div className="navbar-link-line"></div>
              ) : null}
            </div>
            <div>
              <Link
                to="/about"
                onClick={() => changeCurrentPage("about")}
              >
                Acerca de mí
              </Link>
              {pageLink === "about" ? (
                <div className="navbar-link-line"></div>
              ) : null}
            </div>
            <div>
              <Link
                to="/services"
                onClick={() => changeCurrentPage("services")}
              >
                Reseñas
              </Link>
              {pageLink === "services" ? (
                <div className="navbar-link-line"></div>
              ) : null}
            </div>
            <div>
              <Link
                to="/pricing"
                onClick={() => changeCurrentPage("pricing")}
              >
                Sobre los servicios
              </Link>
              {pageLink === "pricing" ? (
                <div className="navbar-link-line"></div>
              ) : null}
            </div>
            <div>

              <Link
                to="/webniar"
                onClick={() => changeCurrentPage("webniar")}
              >
                Cartera
              </Link>

              {pageLink === "webniar" ? (
                <div className="navbar-link-line"></div>
              ) : null}
            </div>
          </div>
          <Link
            className="contact-us-link"
            to="/contactus"
            onClick={() => changeCurrentPage("contactus")}
            style={pageLink === "contactus" ? contactUsStyle : null}
          >
            Contactame
          </Link>
        </div>
        <div
          className="burger-icon"
          onClick={() => setBurgerIsOpen(!burgerIsOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {burgerIsOpen ? <div
        className="hamburger"
        style={hamburgerStyle}
      >
        <div>
          {pageLink === "" ? <div className="hamburger-link-line"></div> : null}
          <Link to="/" onClick={() => changeCurrentPage("")}>
            Inici
          </Link>
          {pageLink === "" ? <div className="hamburger-link-line"></div> : null}
        </div>
        <div>
          {pageLink === "about" ? (
            <div className="hamburger-link-line"></div>
          ) : null}
          <Link to="/about" onClick={() => changeCurrentPage("about")}>
            Acerca de mí
          </Link>
          {pageLink === "about" ? (
            <div className="hamburger-link-line"></div>
          ) : null}
        </div>
        <div>
          {pageLink === "services" ? (
            <div className="hamburger-link-line"></div>
          ) : null}
          <Link to="/services" onClick={() => changeCurrentPage("services")}>
            Reseñas
          </Link>
          {pageLink === "services" ? (
            <div className="hamburger-link-line"></div>
          ) : null}
        </div>
        <div>
          {pageLink === "pricing" ? (
            <div className="hamburger-link-line"></div>
          ) : null}
          <Link to="/pricing" onClick={() => changeCurrentPage("pricing")}>
            Sobre los servicios
          </Link>
          {pageLink === "pricing" ? (
            <div className="hamburger-link-line"></div>
          ) : null}
        </div>
        <div>
          {pageLink === "webniar" ? (
            <div className="hamburger-link-line"></div>
          ) : null}
          <Link to="/webniar" onClick={() => changeCurrentPage("webniar")}>
            Cartera
          </Link>
          {pageLink === "webniar" ? (
            <div className="hamburger-link-line"></div>
          ) : null}
        </div>
        <Link
          className="contact-us-link"
          to="/contactus"
          onClick={() => changeCurrentPage("contactus")}
          style={pageLink === "contactus" ? contactUsStyle : null}
        >
          Contact Us
        </Link>
      </div> : null}

    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPageReducer,
  };
}

const mapDispatchToProps = {
  changeCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
