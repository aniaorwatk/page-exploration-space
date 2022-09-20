import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import { links } from "./NavigationHandler";

// const Navigation =({links}: {links: IPropsLink[] })=>{
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

        <div className={`${showLinks ? "settings blur" : "settings"}`}>
          <div className="settings__block" ref={linksContainerRef}>
            <nav className="settings__navigation container">
              <button
                 className="settings__navigation-closeMenuBtn"
                onClick={closeMenu}
              >
                XXXXX
              </button>
              <ul className="settings__navigation-list" ref={linksRef}>
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
                 className="settings__navigation-closeMenuBtn"
                 onClick={toggleMenu}
              >
                XXXXX
              </button>
        </div>

  );
};

export default Navigation;
