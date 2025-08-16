import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar2 = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 675) {
        setShowSearch(false); // close search if switching to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const token = localStorage.getItem("token");

let firstLetter = "?";

if (token) {
  try {
    const decoded = jwtDecode(token);
    // assuming your token payload looks like: { id, username, email, gender }
    firstLetter = decoded.username.charAt(0).toUpperCase();
  } catch (err) {
    console.error("Invalid token", err);
  }
}

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); 
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4jbXkWaYRcqw7zkFheo1YSlmlUSaEZyQFw&s"
              alt="App Logo"
              className="navbar-logo"
            />
          </a>
          <div className="navbar-icons">
            <div className="homeButton">
              <a href="/home">
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

          <div className="homeButton-searchForm">
            <div className="homeButton">
              <a href="/home">
                <i className="fi fi-ss-house-chimney"></i>
              </a>
            </div>
            <form className="searchForm">
              <i className="fi fi-rs-search"></i>
              <input type="text" placeholder="What do you want to play?" />
            </form>
          </div>
        </div>

        <div className="profileButton">
          <span className="name" href="#">{firstLetter}</span>
          <div className="profileDropdown">
            <span 
            className="profileDropdownText" 
            style={{ fontWeight: "600"}}>
              Account Settings
            </span>
            <p
              className="profileDropdownText link"
            >
              Profile Settings
            </p>
            <p
              className="profileDropdownText link"
            >
              Account Management
            </p>
            <p
              className="profileDropdownText link"
            >
              Privacy & Security
            </p>
            <p
              className="profileDropdownText link"
            >
              Notifications
            </p>
            <p
              className="profileDropdownText link"
              onClick={handleLogout}
            >
              Logout
            </p>
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

export default Navbar2;
