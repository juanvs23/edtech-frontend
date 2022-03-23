import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FotoUser from "./FotoUser";

/* styled component */
import styled from "styled-components";
import ButtonActive from "./ButtonActive";
import DarkButton from "./darkButton";
export const Header = styled.header`
  margin-left: 0;
  position:fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 60px;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  z-index:99;
  .navbar-brand {
    color: #fff !important;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .dropdown {
    .nav-link::after {
      border-bottom-color: #fff;
      border-top-color: #fff;
    }
  }
  &.main-header .logo {
    -webkit-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 0 15px;
    font-weight: 300;
    overflow: hidden;
  }
  .image-user {
    display: inline-block;
  }
  .dropdown-toggle::after {
  }
`;

const HeaderComponent = () => {
  return (
    <Header className="top-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-9 logo">
            <div className="row">
              <div className="col-3">
                <ButtonActive />
              </div>
              <div className="col-9">
                <Navbar.Brand href="#home">Full edtech</Navbar.Brand>
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-md-flex"></div>
          <div className="col-3">
            <NavDropdown
              title={<FotoUser image={"https://picsum.photos/30"} />}
              id="basic-nav-dropdown"
              className="d-flex justify-content-end "
            >
              <NavDropdown.Item>Action</NavDropdown.Item>
              <div className="dropdown-item" role="button">
                Perfil <i className="bi bi-gear"></i>{" "}
              </div>
              <div className="dropdown-item" role="button">
                Salir <i className="fa fa-running"></i>{" "}
              </div>

              <NavDropdown.Divider />

              <div className="dropdown-item" role="button">
                <DarkButton />{" "}
              </div>
            </NavDropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
