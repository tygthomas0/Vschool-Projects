import React from "react";
import twitterLogo from "./blogPropsTwitterLogo.PNG";
import fbLogo from "./blogPropsFacebookLogo.PNG";
import githubLogo from "./blogPropsGithubLogo.PNG";

function Footer() {
    return (
        <div id="footer">
            <img src={twitterLogo}></img>
            <img src={fbLogo}></img>
            <img src={githubLogo}></img>
            <p>Copyright C Your Website 2021</p>
        </div>
    )
}

export default Footer;