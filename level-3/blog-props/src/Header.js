import React from "react";
import Navbar from "./Navbar"

function Header() {
    return (
        <div id="colorContainer">    
            <div id="headerContainer">
                <Navbar />
                <h1 id="headerHeader">Clean Blog</h1>
                <h4 id="headerDesc">A Blog Theme by Start Bootstrap</h4>
            </div>
        </div>
    )
}

export default Header;