import React from "react";

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <p> &#10031; &copy; {today.getFullYear()} Divine Developer  &#10031;</p>
        </footer>
    );
};

export default Footer;
