import Library from "../components/Library";
import Songs from "../components/Songs";
import Navbar from "../components/Navbar";
import MusicPlayer2 from "../components/musicPlayer2";

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
      <MusicPlayer2 />
    </>
  );
};

export default Home;
