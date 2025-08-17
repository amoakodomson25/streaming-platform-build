import Navbar from "../components/navbar2";
import Library from "../components/Library";
import MusicPlayer2 from "../components/musicPlayer2";
const artist = () => {
  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        <Library />
        <div className="main-wrapper-artist">
          <div className="main-header">
            <div className="artist-details">
              <div className="artist-image-wrapper">
                <img
                    src="https://i.scdn.co/image/ab6761610000517432ff1f4bcb5d641741f930f2"
                    alt="Artist"
                  className="artist-image"
                />
              </div>
              <div className="artist-details-wrapper">
                <h1 className="artist-name">ABALO!</h1>
                <p className="artist-description">
                  ABALO! is a talented artist known for their unique sound and
                  captivating performances. With a blend of genres, they have
                  carved a niche in the music industry.
                </p>
                <p className="artist-followers">Followers: 1,234</p>
                <button className="follow-button">Follow</button>
              </div>
            </div>
          </div>
          <div className="main-body">
            <div className="Latest-Release">
              <h2 className="latest-release-title">Latest Release</h2>
              <div className="song-card-horizontal">
                <div className="song-image-wrapper">
                  <img
                    src="https://source.boomplaymusic.com/group10/M00/09/02/8f4e311823244a96925ae80868a7f097H3000W3000_320_320.jpg"
                    alt="Song"
                    className="song-image"
                  />
                </div>
                <div className="song-details">
                  <h3 className="song-title">NO LOVE</h3>
                  <p className="song-artist">2:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MusicPlayer2 />
    </>
  );
};

export default artist;
