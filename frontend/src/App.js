import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/home-logged-in";
import AccountCreated from "./pages/accountCreated";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import OtpPage from "./pages/auth/OTP";
import Forgotpassword from "./pages/auth/Forgot_password";
import Signup_1 from "./pages/auth/signup_1";
import Signup_2 from "./pages/auth/signup_2";
import Signup_3 from "./pages/auth/signup_3";
import Profile from "./pages/profile/UserProfile";
import Artist from "./pages/artist";

import "@flaticon/flaticon-uicons/css/all/all.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home2 />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/OTP" element={<OtpPage />} />
            <Route path="/Forgot_password" element={<Forgotpassword />} />
            <Route path="/signup_1" element={<Signup_1 />} />
            <Route path="/signup_2" element={<Signup_2 />} />
            <Route path="/signup_3" element={<Signup_3 />} />
            <Route path="/accountCreated" element={<AccountCreated />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/artist" element={<Artist />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
