import { Link } from "react-router-dom";
const Form_signin = () => {
  return (
    <form className="sign-up-form">
      <h2 className="sign-up-title">Sign in to start listening</h2>

      <label className="sign-up-label">
        <span>Username or Email</span>
        <input
          type="text"
          name="username"
          placeholder="Username or email"
          className="sign-up-input"
          required
        />
      </label>
      <label className="sign-up-label">
        <span>Password</span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="sign-up-input"
          required
        />
      </label>
      <div className="error-message">
        <i class="fi fi-rr-octagon-exclamation"></i>
        <span>Invalid Credentials </span>
      </div>
      <div className="Forgotpassword">
        <Link to="/Forgot_password">Forgot password?</Link>
      </div>

      <button className="sign-up-button">Sign in</button>

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
        <span>Don't have an account?</span>
        <Link className="sign-in-link" to="/Signup">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default Form_signin;
