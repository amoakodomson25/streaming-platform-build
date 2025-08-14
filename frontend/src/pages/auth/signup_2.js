import { Link, useNavigate, useLocation } from "react-router-dom";
import NavbarOnlyBrand from "../../components/Navbar-only-brand";
import { useState, useEffect } from "react";

const Signup_2 = () => {
  const location = useLocation();
  const emailFromState = location.state?.email || localStorage.getItem("signupEmail");
  const usernameFromState = location.state?.username || localStorage.getItem("signupUsername");

  const [gender, setGender] = useState(localStorage.getItem("signupGender") || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Save gender as user selects it
  useEffect(() => {
    localStorage.setItem("signupGender", gender);
  }, [gender]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gender) {
      setError("Please select a gender before proceeding.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      navigate("/signup_3", {
        state: { email: emailFromState, username: usernameFromState, gender }
      });
    }, 800);
  };

  return (
    <>
      <NavbarOnlyBrand />
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="sign-up-form-nav">
          <Link
            to="/signup_1"
            className="sign-up-form-nav-back"
          >
            <i className="fi fi-rr-angle-left"></i>
          </Link>
          <div className="sign-up-form-nav-title">
            <p className="sign-up-form-nav-title-text">Step 2 of 3</p>
            <p className="sign-up-form-nav-title-subtext">
              Tell us about yourself
            </p>
          </div>
        </div>

        <label className="sign-up-label smallgap">
          <span>Gender</span>
          <span className="sign-up-label-subtext">
            We use your gender to help personalize our content recommendations
            for you.
          </span>
          <div className="gender">
            <label>
              <div className="gender-check-option">
                <input
                  type="radio"
                  name="gender"
                  value="Man"
                  checked={gender === "Man"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Man</span>
              </div>
            </label>
            <label>
              <div className="gender-check-option">
                <input
                  type="radio"
                  name="gender"
                  value="Woman"
                  checked={gender === "Woman"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Woman</span>
              </div>
            </label>
            <label>
              <div className="gender-check-option">
                <input
                  type="radio"
                  name="gender"
                  value="Prefer not to say"
                  checked={gender === "Prefer not to say"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Prefer not to say</span>
              </div>
            </label>
          </div>
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

        <div className="line"></div>

        <div className="sign-in-prompt">
          <span>Already have an account?</span>
          <Link className="sign-in-link" to="/Signin">
            Sign In
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signup_2;
