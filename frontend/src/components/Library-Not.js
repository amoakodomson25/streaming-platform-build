import { useState, useEffect } from "react";

const Library0 = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showLibrary, setShowSearch] = useState(window.innerWidth<1160);
    const [showLibrary2, setShowSearch2] = useState(window.innerWidth<1160);
    
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1160) {
          setShowSearch(false);
          setShowSearch2(false);
        } else {
          setShowSearch(true);
          setShowSearch2(true);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
    <div
    className={`library-wrapper not-logged
    ${isCollapsed || showLibrary ? "collapsed" : ""} ${showLibrary2 ? "hide" : ""}`}
  >
    <div className="library-header">
      <h1>
        <span>Your Library</span>
        <i
          className="fi fi-rs-arrow-up-right-and-arrow-down-left-from-center"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        ></i>
      </h1>
      <p>Explore your music library</p>
    </div>

    <div className="library-content-not-logged">
      <a href="/Signin">Sign in to enjoy your music library</a>

    </div>
  </div>
    );
  };
  
  export default Library0;
  