import React from "react";
import  labels  from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import './Header.scss';

const Header = ()=>{

    const buttonType = 'button';
    const buttonClass= 'primary'
    return(
        <header>
            <h1>{labels.header.title}</h1>
            <ButtonPrimary
                buttonLabel={labels.header.buttonLabel}
                customClassName={buttonClass}
                type={buttonType}
/>
        </header>
    )
}

export default Header
