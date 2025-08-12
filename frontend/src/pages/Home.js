import { useState, useEffect } from "react";

const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="library-wrapper">
          <div className="library-header">
            <h1>Your Library</h1>
            <p>Explore your music library</p>
          </div>
          <div className="library-nav">
            <div className="library-search">
              <i class="fi fi-rr-search"></i>
              <input
                type="text"
                placeholder="Search your library"
                className="library-search-input"
              />
            </div>

            <div className="library-filter">
              <i
                className="fi fi-rr-filter"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              ></i>
              {isFilterOpen && (
                <select className="library-filter-select">
                  <option value="all">All</option>
                  <option value="songs">Songs</option>
                  <option value="albums">Albums</option>
                  <option value="artists">Artists</option>
                  <option value="playlists">Playlists</option>
                </select>
              )}
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
            </div>
          </div>
        </div>
        <div className="main-wrapper">
          <div className="main-header">
            <h1>Trending songs</h1>
          </div>

          <div className="songs-card-wrapper">
            <button
              className="scroll-btn left"
              onClick={() => {
                document
                  .querySelector(".songs-session")
                  .scrollBy({ left: -400, behavior: "smooth" });
              }}
            >
              <i class="fi fi-sr-angle-left"></i>
            </button>
            <div className="songs-session">
              <a href="/" className="song-card">
                <img
                  src="https://source.boomplaymusic.com/group10/M00/10/10/8e31a20080f14c1d9e30e8efbac470a9H3000W3000_320_320.jpg"
                  alt="Song Cover"
                  className="song-image"
                />
                <div className="song-details">
                  <h2>
                    <a href="/">Pretend (Feat. Tsemi)</a>
                  </h2>
                  <p>
                    <a href="/">ABALO!</a>
                  </p>
                </div>
              </a>
              <a href="/" className="song-card">
                <img
                  src="https://source.boomplaymusic.com/group10/M00/04/08/d369f7cd8e17430ebe3c39b9741cbc6f_320_320.jpg"
                  alt="Song Cover"
                  className="song-image"
                />
                <div className="song-details">
                  <h2>
                    <a href="/">Don't Let Go</a>
                  </h2>
                  <p>
                    <a href="/">ABALO!</a>
                  </p>
                </div>
              </a>
              <a href="/" className="song-card">
                <img
                  src="https://source.boomplaymusic.com/group10/M00/09/02/8f4e311823244a96925ae80868a7f097H3000W3000_320_320.jpg"
                  alt="Song Cover"
                  className="song-image"
                />
                <div className="song-details">
                  <h2>
                    <a href="/">No Love</a>
                  </h2>
                  <p>
                    <a href="/"> ABALO!</a>
                  </p>
                </div>
              </a>
              <a href="/" className="song-card">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/ac/80/a2/ac80a2f3-0068-a68e-db8a-7b4b7320162c/artwork.jpg/1200x630bb.jpg"
                  alt="Song Cover"
                  className="song-image"
                />
                <div className="song-details">
                  <h2>
                    <a href="/">Melissa [sped up]</a>
                  </h2>
                  <p>
                    <a href="/">ABALO!</a>
                  </p>
                </div>
              </a>
              <a href="/" className="song-card">
                <img
                  src="https://source.boomplaymusic.com/group10/M00/04/08/ac57c244894148dc8633de4b0efc266d_320_320.jpg"
                  alt="Song Cover"
                  className="song-image"
                />
                <div className="song-details">
                  <h2>
                    <a href="/">Pretend</a>
                  </h2>
                  <p>
                    <a href="/">ABALO!</a>
                  </p>
                </div>
              </a>
              <a href="/" className="song-card">
                <img
                  src="https://source.boomplaymusic.com/group10/M00/04/08/92ab4b44f2f4434da1a91f83f4f4d1e1_320_320.jpg"
                  alt="Song Cover"
                  className="song-image"
                />
                <div className="song-details">
                  <h2>
                    <a href="/">Hit & Run</a>
                  </h2>
                  <p>
                    <a href="/">ABALO!</a>
                  </p>
                </div>
              </a>
              <a href="/" className="song-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuzx7U0i3JrODKApMyNw54xOMWRhsU7o4Iw&s"
                  alt="Song Cover"
                  className="song-image"
                />
                <div className="song-details">
                  <h2>
                    <a href="/">PAID THE PRICE</a>
                  </h2>
                  <p>
                    <a href="/"> Ace Dopekid</a>
                  </p>
                </div>
              </a>
              <a href="/" className="song-card">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6d/d3/5a/6dd35aaf-a0c0-b266-22b5-bfbae6aab7d6/artwork.jpg/400x400bb.webp"
                  alt="Song Cover"
                  className="song-image"
                />
                <div className="song-details">
                  <h2>
                    <a href="/">Jorley (Feat. ABALO!)</a>
                  </h2>
                  <p>
                    <a href="/">aydeee</a>
                  </p>
                </div>
              </a>
            </div>
            <button
              className="scroll-btn right"
              onClick={() => {
                document
                  .querySelector(".songs-session")
                  .scrollBy({ left: 400, behavior: "smooth" });
              }}
            >
              <i class="fi fi-sr-angle-right"></i>
            </button>
          </div>

          <div className="main-header">
            <h1>Top artists</h1>
          </div>

          <div className="artiste-card-wrapper">
            <button
              className="scroll-btn left"
              onClick={() => {
                document
                  .querySelector(".artiste-session")
                  .scrollBy({ left: -400, behavior: "smooth" });
              }}
            >
              <i class="fi fi-sr-angle-left"></i>
            </button>
            <div className="artiste-session">
              <a href="/" className="artiste-card">
                <div className="artiste-image-wrapper">
                  <img
                    src="https://i.scdn.co/image/ab6761610000517432ff1f4bcb5d641741f930f2"
                    alt="artiste Cover"
                    className="artiste-image"
                  />
                </div>
                <div className="artiste-details">
                  <h2>
                    <a href="/">ABALO!</a>
                  </h2>
                  <p>
                    <a href="/">Artist</a>
                  </p>
                </div>
              </a>
              <a href="/" className="artiste-card">
                <div className="artiste-image-wrapper">
                  <img
                    src="https://i.scdn.co/image/ab676161000051748287c33c03bda0de0c8a60a2"
                    alt="Artiste Cover"
                    className="artiste-image"
                  />
                </div>

                <div className="artiste-details">
                  <h2>
                    <a href="/">aydeee</a>
                  </h2>
                  <p>
                    <a href="/">Artist</a>
                  </p>
                </div>
              </a>
              <a href="/" className="artiste-card">
                <div className="artiste-image-wrapper">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRuCVIkB5-95FmNU6xlv_KHKfIw7g1Eht_g&s"
                    alt="Artiste Cover"
                    className="artiste-image"
                  />
                </div>

                <div className="artiste-details">
                  <h2>
                    <a href="/">Ace Dopekid</a>
                  </h2>
                  <p>
                    <a href="/">Artist</a>
                  </p>
                </div>
              </a>
              <a href="/" className="artiste-card">
                <div className="artiste-image-wrapper">
                  <img
                    src="https://i.scdn.co/image/ab6761610000e5eb7e37dc3a2c39a0df946568fe"
                    alt="Artiste Cover"
                    className="artiste-image"
                  />
                </div>

                <div className="artiste-details">
                  <h2>
                    <a href="/">Tsemi</a>
                  </h2>
                  <p>
                    <a href="/">Artist</a>
                  </p>
                </div>
              </a>
              <a href="/" className="artiste-card">
                <div className="artiste-image-wrapper">
                  <img
                    src="https://assets.audiomack.com/maame-alpha-1/17008d96c45771a1f91e74511a8c50e10297df2c88d2debc89f026b37eff1e24.jpeg"
                    alt="Artiste Cover"
                    className="artiste-image"
                  />
                </div>

                <div className="artiste-details">
                  <h2>
                    <a href="/">Maame Alpha</a>
                  </h2>
                  <p>
                    <a href="/">Artist</a>
                  </p>
                </div>
              </a>
              <a href="/" className="artiste-card">
                <div className="artiste-image-wrapper">
                  <img
                    src="https://yt3.googleusercontent.com/bK-iKngyEmmQ3PalYN9wuNPwho1RPb-Ia8_SUukbdDZkqO3JM80Wrb0lONO-7DwlAHO9cLkd5Q=s900-c-k-c0x00ffffff-no-rj"
                    alt="Artiste Cover"
                    className="artiste-image"
                  />
                </div>

                <div className="artiste-details">
                  <h2>
                    <a href="/">Black Sherif</a>
                  </h2>
                  <p>
                    <a href="/">Artist</a>
                  </p>
                </div>
              </a>
              <a href="/" className="artiste-card">
                <div className="artiste-image-wrapper">
                  <img
                    src="https://thenativemag.com/wp-content/uploads/2022/11/Sarkodie.jpg"
                    alt="Artiste Cover"
                    className="artiste-image"
                  />
                </div>

                <div className="artiste-details">
                  <h2>
                    <a href="/">Sarkodie</a>
                  </h2>
                  <p>
                    <a href="/">Artist</a>
                  </p>
                </div>
              </a>
            </div>
            <button
              className="scroll-btn right"
              onClick={() => {
                document
                  .querySelector(".artiste-session")
                  .scrollBy({ left: 400, behavior: "smooth" });
              }}
            >
              <i class="fi fi-sr-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
