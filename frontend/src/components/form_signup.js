import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Form_signup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Prefill from localStorage if available
  const [email, setEmail] = useState(
    location.state?.email || localStorage.getItem("signupEmail") || ""
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Store email in localStorage on change
  useEffect(() => {
    if (email.trim()) {
      localStorage.setItem("signupEmail", email);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email.trim()) {
      setError("Please enter your email before proceeding.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    // Small delay before navigating
    setTimeout(() => {
      navigate("/signup_1", {
        state: { ...location.state, email }, // Pass along email
      });
    }, 800);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="sign-up-title">Sign up to start listening</h2>

      <label className="sign-up-label">
        <span>Email</span>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="sign-up-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      {error && (
        <div className="error-message">
          <i className="fi fi-rr-octagon-exclamation"></i>
          <span>{error}</span>
        </div>
      )}

      <button className="sign-up-button" type="submit" disabled={loading}>
        {loading ? "Loading..." : "Sign up"}
      </button>

      <div className="divider">
        <span>or</span>
      </div>

      <div className="other-sign-in-options">
        <a href="/" className="option-link">
          <img src="https://img.icons8.com/color/512/google-logo.png" />
          <span>Sign up with Google</span>
        </a>
        <a href="/" className="option-link">
          <img src="https://img.icons8.com/m_outlined/512/FFFFFF/mac-os--v2.png" />
          <span>Sign up with Apple</span>
        </a>
      </div>

      <div className="line"></div>

      <div className="sign-in-prompt">
        <span>Already have an account?</span>
        <Link className="sign-in-link" to="/Signin">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default Form_signup;
