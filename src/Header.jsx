import React from "react";
import Display from "./Display";

const Header = ({ resultOnEqual }) => {
    return (
        <header className="Header">
            <Display resultOnEqual={resultOnEqual} />
        </header>
    );
};

export default Header;
