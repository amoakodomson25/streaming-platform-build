const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="library-wrapper">
          <div className="library-header">
            <h1>Your Library</h1>
            <p>Explore your music library</p>
          </div>
          <div className="library-content">
            <p>Music library content will be displayed here.</p>
          </div>
        </div>

        <div className="main-wrapper">
          <div className="main-header">
            <h1>Trending songs</h1>
          </div>
          <div className="main-content">
            <a href="/song/1" className="song-card">
              <div className="song-card">
                <img
                  src="https://indiater.com/wp-content/uploads/2021/06/Free-Music-Album-Cover-Art-Banner-Photoshop-Template.jpg"
                  alt="Song Cover"
                />
                <div className="song-details">
                  <h2>Song Title</h2>
                  <p>Artist Name</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
