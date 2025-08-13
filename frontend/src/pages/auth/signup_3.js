import { Link } from "react-router-dom";
import NavbarOnlyBrand from "../../components/Navbar-only-brand";

const signup_3= () => {
  return (
    <>
      <NavbarOnlyBrand />
      <form className="sign-up-form">
        <div className="sign-up-form-nav">
          <Link to="/signup_2" className="sign-up-form-nav-back">
            <i className="fi fi-rr-angle-left"></i>
          </Link>
          <div className="sign-up-form-nav-title">
            <p className="sign-up-form-nav-title-text">Step 3 of 3</p>
            <p className="sign-up-form-nav-title-subtext">
              Create a password
            </p>
          </div>
        </div>
        <label className="sign-up-label smallgap">
          <span>Password</span>

          <input type="email" name="email" className="sign-up-input" required />
        </label>

        <div className="error-message">
          <i class="fi fi-rr-octagon-exclamation"></i>
          <span>
            This email is already in use <Link to="/Signin">Sign in</Link>{" "}
            instead
          </span>
        </div>
        <button className="sign-up-button">Create account</button>


       
      </form>
    </>
  );
};

export default signup_3;
