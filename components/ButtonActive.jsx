import React, { useContext } from "react";
import { FunctionalsContent } from "../context/contextApi";
import styled from "styled-components";

const ActiveContainer = styled.div`
  button {
    appearance: none;
    background: transparent;
    border: none;

    color: white;
    position: relative;
    padding: 0;
    padding-top: 7px;
    span {
      background: white;
      width: 25px;
      height: 2px;
      display: block;
      left: 0;
      transition: 0.2s 0.2s all;
    }
    span:nth-of-type(1) {
      margin-top: 0px;
    }
    span:nth-of-type(2) {
      margin-top: 5px;
    }
    span:nth-of-type(3) {
      margin-top: 5px;
    }
  }
  .is_active {
    span:nth-of-type(1) {
      visibility: hidden;
    }
    span:nth-of-type(2) {
      margin-top: 0px;
      transform: rotate(45deg);
    }
    span:nth-of-type(3) {
      margin-top: -1px;
      transform: rotate(-45deg);
    }
  }
  @media (max-width: 992px) {
    button {
      appearance: none;
      background: transparent;
      border: none;
      width: 27px;
      color: white;
      position: relative;
      padding: 0;
      padding-top: 10px;
      span {
        background: white;
        width: 25px;
        height: 2px;
        display: block;
        left: 0;
        transition: 0.2s 0.2s all;
      }
      span:nth-of-type(1) {
        margin-top: 0px;
      }
      span:nth-of-type(2) {
        margin-top: 3px;
      }
      span:nth-of-type(3) {
        margin-top: 3px;
      }
    }
    .is_active {
      span:nth-of-type(1) {
        visibility: visible;
        position: absolute;
        margin-top: 1px;
      }
      span:nth-of-type(2) {
        transform: rotate(36deg);
        width: 15px;
        margin-top: 6px;
        position: absolute;
      }
      span:nth-of-type(3) {
        transform: rotate(-36deg);
        position: absolute;
        width: 16px;
        margin-top: -3px;
        margin-left: -1px;
      }
    }
  }
`;

const ButtonActive = () => {
  const { openBar, setopenBar } = useContext(FunctionalsContent);
  const activeHandler = (e) => {
    if (openBar) {
      setopenBar(false);
    } else {
      setopenBar(true);
    }
  };
  const active = openBar ? "is_active" : "";
  return (
    <ActiveContainer>
      <button className={active} onClick={activeHandler}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </ActiveContainer>
  );
};

export default ButtonActive;
