import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import { bars, closeMenuImg, links } from "./NavigationHandler";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const linksHeight = linksRef.current?.getBoundingClientRect().height;
    if (null !== linksContainerRef.current) {
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
        linksContainerRef.current.style.visibility = "visible";
      } else {
        linksContainerRef.current.style.height = "0px";
        linksContainerRef.current.style.visibility = "hidden";
      }
    }
  }, [showLinks]);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };
  const closeMenu = () => {
    setShowLinks(false);
  };
  return (
    <div className={`${showLinks ? "navigation blur" : "navigation"}`}>
      <div className="navigation__block" ref={linksContainerRef}>
        <nav className="navigation__box container">
          <button
            className="navigation__box-closeMenuBtn"
            onClick={closeMenu}
          >
            <img src={closeMenuImg} />
          </button>
          <ul className="navigation__box-list" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <button
        className="navigation__box-openMenuBtn"
        onClick={toggleMenu}
      >
        <img src={bars} />
      </button>
    </div>
  );
};

export default Navigation;
