import Library from "../components/Library-Not";
import Songs from "../components/Songs";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/musicPlayer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Redirect if already logged in
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) navigate("/home");
    }, [navigate]);
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
