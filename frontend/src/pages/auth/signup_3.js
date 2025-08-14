import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import NavbarOnlyBrand from "../../components/Navbar-only-brand";

const Signup_3 = () => {
  const location = useLocation();
  const { email, username, gender } = location.state || {};

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const requirements = {
    length: password.length >= 6,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (!requirements.length || !requirements.uppercase || !requirements.number) {
      setError("Please meet all password requirements before continuing.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/accounts/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, gender, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      // Save JWT token to localStorage
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setSuccess("Account created successfully!");
      setLoading(false);

      setTimeout(() => {
        navigate("/accountCreated", { state: { user: data.user } });
      }, 1500);

    } catch (err) {
      console.error(err);
      setError("Server error, please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarOnlyBrand />
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="sign-up-form-nav">
          <Link to="/signup_2" className="sign-up-form-nav-back">
            <i className="fi fi-rr-angle-left"></i>
          </Link>
          <div className="sign-up-form-nav-title">
            <p className="sign-up-form-nav-title-text">Step 3 of 3</p>
            <p className="sign-up-form-nav-title-subtext">Create a password</p>
          </div>
        </div>

        <label className="sign-up-label smallgap">
          <span>Password</span>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="sign-up-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fi fi-rr-${showPassword ? "eye-crossed" : "eye"}`}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#888",
                fontSize: "1.2rem",
              }}
              onClick={() => setShowPassword(prev => !prev)}
            ></i>
          </div>
        </label>

        <div className="password-requirements">
          <h1>Password requirements</h1>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <input type="checkbox" checked={requirements.length} readOnly /> At least 6 characters long
            </li>
            <li>
              <input type="checkbox" checked={requirements.uppercase} readOnly /> At least one uppercase letter
            </li>
            <li>
              <input type="checkbox" checked={requirements.number} readOnly /> At least one number
            </li>
          </ul>
        </div>

        {error && (
          <div className="error-message">
            <i className="fi fi-rr-octagon-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="success-message">
            <i className="fi fi-rr-check"></i>
            <span>{success}</span>
          </div>
        )}

        <button className="sign-up-button" type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>
    </>
  );
};

export default Signup_3;
