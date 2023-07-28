//4. Create a Footer.jsx component that renders a <footer> element
import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright © {currentYear}</p>
        </footer>
    )
}

export default Footer;