import Form_signin from "../../components/form_signin";
import NavbarOnlyBrand from "../../components/Navbar-only-brand";

const Forgotpassword = () => {
  return (
    <>
      <NavbarOnlyBrand />
      <form className="sign-up-form">
        <h1>Forgot Password</h1>
        <p>Enter your email to reset your password.</p>
        <label className="sign-up-label">
          <input
            type="text"
            name="username"
            placeholder="Email"
            className="sign-up-input"
            required
          />
        </label>
        <div className="error-message">
          <i class="fi fi-rr-octagon-exclamation"></i>
          <span>Email does not exist</span>

        </div>
        <button className="sign-up-button">Confirm</button>

        <div className="line"></div>
        <div className="sign-in-prompt">
          <span>Remembered your password?</span>
          <a className="sign-in-link" href="/Signin">
            Sign In
          </a>
        </div>
      </form>
    </>
  );
};

export default Forgotpassword;
