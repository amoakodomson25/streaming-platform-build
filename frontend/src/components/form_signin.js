import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Form_signin = () => {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // only show when there’s an error
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset error on new submit

    try {
      const res = await fetch("http://localhost:4000/api/accounts/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json(); // always parse JSON

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      console.log("Login successful:", data);

      // Optionally save user info in localStorage/sessionStorage or JWT here

      // Redirect to homepage
      navigate("/");
    } catch (err) {
      setError("Server error");
      console.error(err);
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="sign-up-title">Sign in to start listening</h2>

      {/* Identifier */}
      <label className="sign-up-label">
        <span>Username or Email</span>
        <input
          type="text"
          name="identifier"
          placeholder="Username or email"
          className="sign-up-input"
          value={formData.identifier}
          onChange={handleChange}
          
        />
      </label>

      {/* Password */}
      <label className="sign-up-label" style={{ position: "relative", width: "100%" }}>
        <span>Password</span>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="sign-up-input"
          value={formData.password}
          onChange={handleChange}
          
        />
        <i
          className={`fi fi-rr-eye${showPassword ? "-crossed" : ""}`}
          onClick={() => setShowPassword(prev => !prev)}
          style={{
            position: "absolute",
            right: "10px",
            top: "70%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            fontSize: "1.2rem",
            color: "#888",
          }}
        />
      </label>

      {/* Error message */}
      {error && (
        <div className="error-message">
          <i className="fi fi-rr-octagon-exclamation"></i>
          <span>{error}</span>
        </div>
      )}

      <div className="Forgotpassword">
        <Link to="/Forgot_password">Forgot password?</Link>
      </div>

      <button className="sign-up-button" type="submit">
        Sign in
      </button>

      <div className="divider">
        <span>or</span>
      </div>

      <div className="other-sign-in-options">
        <a href="/" className="option-link">
          <img src="https://img.icons8.com/color/512/google-logo.png" alt="Google" />
          <span>Sign up with Google</span>
        </a>
        <a href="/" className="option-link">
          <img src="https://img.icons8.com/m_outlined/512/FFFFFF/mac-os--v2.png" alt="Apple" />
          <span>Sign up with Apple</span>
        </a>
      </div>

      <div className="line"></div>

      <div className="sign-in-prompt">
        <span>Don't have an account?</span>
        <Link className="sign-in-link" to="/Signup">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default Form_signin;
