import React from "react";
import  labels  from "../../labels";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import './Header.scss';

const Header = ()=>{

    const buttonType = 'button';
    const buttonClass= 'primary';
    const buttonLinkName = '=/register';
    return(
        <header>
            <h1>{labels.header.title}</h1>
            <ButtonPrimary
                // buttonLabel={labels.header.buttonLabel}
                customClassName={buttonClass}
                type={buttonType}
                linkLabel={labels.header.buttonLabelLink}
                linkName = {buttonLinkName}
/>
        </header>
    )
}

export default Header
