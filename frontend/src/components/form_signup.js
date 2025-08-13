import { Link } from "react-router-dom";
const Form_signup = () => {
  return (
    <form className="sign-up-form">
      <h2 className="sign-up-title">Sign up to start listening</h2>

      <label className="sign-up-label">
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="sign-up-input"
          required
        />
      </label>
      <div className="error-message">
        <i class="fi fi-rr-octagon-exclamation"></i>
        <span>
          This email is already in use <Link to="/Signin">Sign in</Link> instead
        </span>
      </div>
      <button className="sign-up-button">Sign up</button>

      <div class="divider">
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
        <Link className="sign-in-link" to="/Signin">Sign In</Link>
      </div>
    </form>
  );
};

export default Form_signup;
