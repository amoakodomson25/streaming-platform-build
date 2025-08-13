import { useState, useEffect } from "react";

const Library = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showLibrary, setShowSearch] = useState(window.innerWidth<1160);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1160) {
          setShowSearch(false);
        } else {
          setShowSearch(true);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
    <div
    className={`library-wrapper 
    ${isCollapsed || showLibrary ? "collapsed" : ""}`}
  >
    <div className="library-header">
      <h1>
        <span>Your Library</span>
        <i
          className="fi fi-rs-arrow-up-right-and-arrow-down-left-from-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
        ></i>
      </h1>
      <p>Explore your music library</p>
    </div>
    <div className="library-nav">
      

      <div className="library-search">
        <i className="fi fi-rr-search"></i>
        <input
          type="text"
          placeholder="Search your library"
          className="library-search-input"
        />
      </div>
      <div className="library-filter-wrapper">
        <div
          className="library-filter"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <i className="fi fi-rr-filter"></i>
        </div>
        <div
          id="library-filter-checkboxes"
          className={`library-filter-select ${
            isFilterOpen ? "visible" : "hidden"
          }`}
        >
          <div className="library-filter-header">
            <h2>Filter by</h2>
            <hr />
          </div>
          <label>
            <input type="checkbox" name="libraryFilter" value="artists" />
            Artists
          </label>
          <label>
            <input type="checkbox" name="libraryFilter" value="songs" />
            Songs
          </label>
          <label>
            <input type="checkbox" name="libraryFilter" value="albums" />
            Albums
          </label>
          <label>
            <input
              type="checkbox"
              name="libraryFilter"
              value="playlists"
            />
            Playlists
          </label>
        </div>
      </div>
    </div>
    <div className="library-content">
      <div className="library-cards">
        <a href="/" className="library-card">
          <div className="library-image-wrapper">
            <img
              src="https://i.scdn.co/image/ab6761610000517432ff1f4bcb5d641741f930f2"
              alt="Library Cover"
              className="library-image"
            />
          </div>
          <div className="library-details">
            <h2>
              <a href="/">ABALO!</a>
            </h2>
            <p>Artist</p>
          </div>
        </a>
        <a href="/" className="library-card">
          <div className="library-image-wrapper">
            <img
              src="https://source.boomplaymusic.com/group10/M00/10/10/8e31a20080f14c1d9e30e8efbac470a9H3000W3000_320_320.jpg"
              alt="Library Cover"
              className="library-image"
            />
          </div>
          <div className="library-details">
            <h2>
              <a href="/">Pretend (Feat. Tsemi)</a>
            </h2>
            <p>
              <a href="/">ABALO!</a>
            </p>
          </div>
        </a>
        <a href="/" className="library-card">
          <div className="library-image-wrapper">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6d/d3/5a/6dd35aaf-a0c0-b266-22b5-bfbae6aab7d6/artwork.jpg/400x400bb.webp"
              alt="Library Cover"
              className="library-image"
            />
          </div>
          <div className="library-details">
            <h2>
              <a href="/">Jorley (Feat. ABALO!)</a>
            </h2>
            <p>
              <a href="/">aydeee</a>
            </p>
          </div>
        </a>
        <a href="/" className="library-card">
          <div className="library-image-wrapper">
            <img
              src="https://i.scdn.co/image/ab6761610000517432ff1f4bcb5d641741f930f2"
              alt="Library Cover"
              className="library-image"
            />
          </div>
          <div className="library-details">
            <h2>
              <a href="/">ABALO!</a>
            </h2>
            <p>Artist</p>
          </div>
        </a>
        <a href="/" className="library-card">
          <div className="library-image-wrapper">
            <img
              src="https://source.boomplaymusic.com/group10/M00/10/10/8e31a20080f14c1d9e30e8efbac470a9H3000W3000_320_320.jpg"
              alt="Library Cover"
              className="library-image"
            />
          </div>
          <div className="library-details">
            <h2>
              <a href="/">Pretend (Feat. Tsemi)</a>
            </h2>
            <p>
              <a href="/">ABALO!</a>
            </p>
          </div>
        </a>
        <a href="/" className="library-card">
          <div className="library-image-wrapper">
            <img
              src="https://i.scdn.co/image/ab6761610000517432ff1f4bcb5d641741f930f2"
              alt="Library Cover"
              className="library-image"
            />
          </div>
          <div className="library-details">
            <h2>
              <a href="/">ABALO!</a>
            </h2>
            <p>Artist</p>
          </div>
        </a>
      </div>
    </div>
  </div>
    );
  };
  
  export default Library;
  