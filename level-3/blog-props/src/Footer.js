import React from "react";
import twitterLogo from "./blogPropsTwitterLogo.PNG";
import fbLogo from "./blogPropsFacebookLogo.PNG";
import githubLogo from "./blogPropsGithubLogo.PNG";

function Footer() {
    return (
        <div id="footer">
            <img src={twitterLogo} alt="twitter"></img>
            <img src={fbLogo} alt="facebook"></img>
            <img src={githubLogo} alt="github"></img>
            <p>Copyright C Your Website 2021</p>
        </div>
    )
}

export default Footer;