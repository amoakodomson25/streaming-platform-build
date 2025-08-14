import { Link, useNavigate, useLocation } from "react-router-dom";
import NavbarOnlyBrand from "../../components/Navbar-only-brand";
import { useState, useEffect } from "react";

const Signup_1 = () => {
  const location = useLocation();
  const emailFromState =
    location.state?.email || localStorage.getItem("signupEmail");

  const [username, setUsername] = useState(
    localStorage.getItem("signupUsername") || ""
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Save username in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("signupUsername", username);
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Please enter a name before proceeding.");
      return;
    }

    setError("");
    setLoading(true);

    // Delay for smooth loading effect
    setTimeout(() => {
      navigate("/signup_2", {
        state: { username, email: emailFromState },
      });
    }, 800);
  };

  return (
    <>
      <NavbarOnlyBrand />
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="sign-up-form-nav">
          <Link to="/Signup" className="sign-up-form-nav-back">
            <i className="fi fi-rr-angle-left"></i>
          </Link>
          <div className="sign-up-form-nav-title">
            <p className="sign-up-form-nav-title-text">Step 1 of 3</p>
            <p className="sign-up-form-nav-title-subtext">
              Tell us about yourself
            </p>
          </div>
        </div>

        <label className="sign-up-label smallgap">
          <span>Name</span>
          <span className="sign-up-label-subtext">
            This name will appear on your profile
          </span>
          <input
            type="text"
            name="Username"
            className="sign-up-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </label>

        {error && (
          <div className="error-message">
            <i className="fi fi-rr-octagon-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

        <button className="sign-up-button" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Next"}
        </button>
      </form>
    </>
  );
};

export default Signup_1;
