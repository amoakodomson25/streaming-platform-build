import Navbar2 from "../../components/Navbar-only-brand";
import { useState } from "react";

const UserProfile = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <Navbar2 />

      <div className="profile-container">
        <div className="profile-header">
          {/*<i className="fi fi-sr-settings"></i>*/}
          Settings
        </div>

        {/* Profile Settings */}
        <div className="collapsible" onClick={() => toggleSection("profile")}>
          Profile Settings
          <i
            className={`fi ${
              openSection === "profile"
                ? "fi-br-minus-small"
                : "fi-br-plus-small"
            }`}
          ></i>
        </div>
        <div className={`content ${openSection === "profile" ? "open" : ""}`}>
          <form className="settings-form">
            <label className="settings-label pp">
              <span>
                <img
                  src="https://source.boomplaymusic.com/group10/M00/04/08/d369f7cd8e17430ebe3c39b9741cbc6f_320_320.jpg"
                  alt="User profile"
                  className="pp-img"
                />
              </span>
              <input type="file" name="avatar" className="settings-input" />
            </label>
            <label className="settings-label">
              <span>Username</span>
              <input type="text" name="username" className="settings-input" />
            </label>
            <label className="settings-label">
              <span>Bio</span>
              <textarea
                name="bio"
                className="settings-input-bio"
                rows="4"
                placeholder="Write something about yourself..."
              />
            </label>
            <button>Accept Changes</button>
          </form>
        </div>

        {/* Account Management */}
        <div className="collapsible" onClick={() => toggleSection("account")}>
          Account Management
          <i
            className={`fi ${
              openSection === "account"
                ? "fi-br-minus-small"
                : "fi-br-plus-small"
            }`}
          ></i>
        </div>
        <div className={`content ${openSection === "account" ? "open" : ""}`}>
          <form className="settings-form">
            <label className="settings-label">
              <span>Email</span>
              <input type="email" name="email" className="settings-input" />
            </label>
            <label className="settings-label">
              <span>Password</span>
              <input
                type="password"
                name="password"
                className="settings-input"
              />
            </label>
            <button>Update Account</button>
          </form>
        </div>

        {/* Profile Settings */}
        <div className="collapsible" onClick={() => toggleSection("profile")}>
          Privacy & Security
          <i
            className={`fi ${
              openSection === "profile"
                ? "fi-br-minus-small"
                : "fi-br-plus-small"
            }`}
          ></i>
        </div>
        <div className={`content ${openSection === "profile" ? "open" : ""}`}>
          <form className="settings-form">
            <label className="settings-label pp">
              <span>
                <img
                  src="https://source.boomplaymusic.com/group10/M00/04/08/d369f7cd8e17430ebe3c39b9741cbc6f_320_320.jpg"
                  alt="User profile"
                  className="pp-img"
                />
              </span>
              <input type="file" name="avatar" className="settings-input" />
            </label>
            <label className="settings-label">
              <span>Username</span>
              <input type="text" name="username" className="settings-input" />
            </label>
            <label className="settings-label">
              <span>Bio</span>
              <textarea
                name="bio"
                className="settings-input-bio"
                rows="4"
                placeholder="Write something about yourself..."
              />
            </label>
            <button>Accept Changes</button>
          </form>
        </div>

        {/* Account Management */}
        <div className="collapsible" onClick={() => toggleSection("account")}>
          Notifications
          <i
            className={`fi ${
              openSection === "account"
                ? "fi-br-minus-small"
                : "fi-br-plus-small"
            }`}
          ></i>
        </div>
        <div className={`content ${openSection === "account" ? "open" : ""}`}>
          <form className="settings-form">
            <label className="settings-label">
              <span>Email</span>
              <input type="email" name="email" className="settings-input" />
            </label>
            <label className="settings-label">
              <span>Password</span>
              <input
                type="password"
                name="password"
                className="settings-input"
              />
            </label>
            <button>Update Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
