import Library from "../components/Library";
import Songs from "../components/Songs";
import Navbar from "../components/navbar2";
import MusicPlayer from "../components/musicPlayer2";

const Home2 = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home-wrapper">
          <Library />
          <Songs />
        </div>
      </div>
      <MusicPlayer />
    </>
  );
};

export default Home2;
