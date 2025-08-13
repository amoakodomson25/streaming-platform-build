import NavbarOnlyBrand from "../../components/Navbar-only-brand";
import { useState } from "react";

const Otp_page = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      // only allow single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next box if not empty
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp.join("")}`);
  };

  return (
    <>
      <NavbarOnlyBrand />
      <div className="Otp-page">
        <h1>Verify Account </h1>
        <p>Enter the 6-digit code sent to you at a******5@g*l.com.</p>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "10px", justifyContent: "center" }}
        >
          <div style={{ display: "flex",gap:"12px",margin: "0px 0 12px 0" }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
            ))}
          </div>

        </form>
      </div>
    </>
  );
};

export default Otp_page;
