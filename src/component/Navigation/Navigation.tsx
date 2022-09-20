import React from "react";
import { Link } from "react-router-dom";
import './Navigation.scss';
import { IPropsLink, links } from "./NavigationHandler";


// const Navigation =({links}: {links: IPropsLink[] })=>{
    const Navigation =()=>{   
    return(
       <div className="navigation">
<div className="navigation__box">
    <nav>
    <button
                        className="settings__navigation-closeMenuBtn"
                        // onClick={closeMenu}
                    >
                        X
                    </button>
                    <ul className="navigation__box-list" >
                        {links.map((link) => {
                            const {id, url, text} = link;
                            return (
                                <li key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
    </nav>
</div>

       </div> 
    )
}

export default Navigation