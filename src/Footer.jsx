import React from "react";

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <p> &#10031; Copyright &copy; Divine Developer {today.getFullYear()} &#10031;</p>
        </footer>
    );
};

export default Footer;
