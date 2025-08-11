import { useState, useEffect } from "react";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
  
   
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 630) {
          setShowSearch(false); // close search if switching to desktop
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
              alt="App Logo"
              className="navbar-logo"
            />
          </a>
          <div className="navbar-icons">
            <div className="homeButton">
              <a href="/">
                <i className="fi fi-ss-house-chimney"></i>
              </a>
            </div>
            <div
              className="homeButton"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <i className="fi fi-rs-search"></i>
            </div>
          </div>
        </div>

        <div className="homeButton-searchForm">
          <div className="homeButton">
            <a href="/">
              <i className="fi fi-ss-house-chimney"></i>
            </a>
          </div>
          <form className="searchForm">
            <i className="fi fi-rs-search"></i>
            <input type="text" placeholder="What do you want to play?" />
          </form>
        </div>

        <div className="profileButton">
          <a href="#">A</a>
          <div className="profileDropdown">
            <span className="profileDropdownText">Amoako Domson Wahab</span>
          </div>
        </div>
      </nav>

      {showSearch && (
        <div className="searchBarBelow">
          <form className="searchForm">
            <i className="fi fi-rs-search"></i>
            <input type="text" placeholder="What do you want to play?" />
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
