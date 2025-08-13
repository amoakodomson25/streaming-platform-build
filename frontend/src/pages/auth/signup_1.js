import { Link } from "react-router-dom";
import NavbarOnlyBrand from "../../components/Navbar-only-brand";

const signup_1 = () => {
  return (
    <>
      <NavbarOnlyBrand />
      <form className="sign-up-form">
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
          <input type="email" name="email" className="sign-up-input" required />
        </label>

        <div className="error-message">
          <i class="fi fi-rr-octagon-exclamation"></i>
          <span>
            This email is already in use <Link to="/Signin">Sign in</Link>{" "}
            instead
          </span>
        </div>
        <button className="sign-up-button">Next</button>

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

export default signup_1;
