import Header from "./Header";
import BlogList from "./BlogList";
import Footer from "./Footer";
import React, {useState} from "react"

function App() {
  const [navClosed, setNavClosed] = useState(true)

  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    var hamburgers = document.getElementsByClassName("hamburger")
    for (let i = 0; i < hamburgers.length; i++) {
      hamburgers[i].style.backgroundColor = "white"
    }
    setNavClosed(prevNavClosed => !prevNavClosed)
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var hamburgers = document.getElementsByClassName("hamburger")
    for (let i = 0; i < hamburgers.length; i++) {
      hamburgers[i].style.backgroundColor = "black"
    }
    setNavClosed(prevNavClosed => !prevNavClosed)
  }

  return (
    <div>
      <div onClick={navClosed ? openNav : closeNav} id="navigation">
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <div id="mySidenav" class="sidenav">
        <a href="https://www.tylergthomas.com">Home</a>
        <a href="https://artic.tylergthomas.com">ArtIC Digital Gallery</a>
        <a href="https://blog-props.tylergthomas.com">Blog Props</a>
        <a href="https://ugly-things.tylergthomas.com">Ugly Things Forum</a>
        <a href="https://tropicalfav.tylergthomas.com">Tropical Fruits and Veggies</a>
        <a href="https://meme-generator.tylergthomas.com">Meme Generator</a>
        <a href="https://name-badge.tylergthomas.com">Name Badge Creator</a>
      </div>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;