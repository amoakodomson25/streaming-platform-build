import Library from "../components/Library";
import Songs from "../components/Songs";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/musicPlayer";

const Home = () => {
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

export default Home;
