import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FunctionalsContent } from "../context/contextApi";
export const LinkCotainer = styled.li`
  min-height: 40px;
  display: block;

  .children {
    padding-left: 0;
    overflow: hidden;
    height: 0;
    transition: 0.2s all;
  }

  .open-children.children {
    height: auto !important;
  }

  .enlace {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    cursor: pointer;
    .menu-button {
      min-height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .children-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 0%;
    }
    .children {
      padding-left: 0;
      overflow: hidden;
      height: auto;
    }
    span {
      font-size: 0px;
      transition: 0.2s all;
    }
  }
  .enlace.open-bar {
    span {
      font-size: 18px;
    }
    .children-button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 76%;
      .dropIcon {
        display: block !important;
        transition: 0.2s all;
      }
      .girar {
        transform: rotate(180deg);
      }
    }
  }
`;

function NavItem({ link }) {
  const { openBar } = React.useContext(FunctionalsContent);
  const [openChildren, setopenChildren] = React.useState(false);

  const handlerOpen = () => {
    if (openChildren) {
      setopenChildren(false);
    } else {
      setopenChildren(true);
    }
  };
  const fontClass = openBar ? "open-bar" : "";
  const openChildrenClass = openChildren ? "open-children" : "";
  const voltear = openChildren ? "girar" : "";
  if (link.children === null) {
    return (
      <LinkCotainer>
        <Link href={link.url}>
          <a className={`enlace ${fontClass}`}>
            <div className="menu-button">
              <i className={link.icon}></i>
            </div>{" "}
            <span> {link.page}</span>
          </a>
        </Link>
      </LinkCotainer>
    );
  } else {
    return (
      <LinkCotainer>
        <div onClick={handlerOpen} className={`enlace  ${fontClass}`}>
          <div className="menu-button">
            <i className={link.icon}></i>
          </div>
          <div className="children-button">
            <span> {link.page} </span>
            <div className={`dropIcon ${voltear}`}>
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <ul className={`children ${openChildrenClass}`}>
          {link.children.map((children, i) => {
            return (
              <LinkCotainer key={i}>
                <Link href={children.url}>
                  <a className={`enlace ${fontClass}`}>
                    <div className="menu-button">
                      <i className={children.icon}></i>
                    </div>{" "}
                    <span> {children.page} </span>{" "}
                  </a>
                </Link>
              </LinkCotainer>
            );
          })}
        </ul>
      </LinkCotainer>
    );
  }
}

export default NavItem;
