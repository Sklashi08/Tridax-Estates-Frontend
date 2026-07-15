import { useState } from "react";
import "./AuthPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const API: string = import.meta.env.VITE_BACKEND_URL;

  // REGISTER INPUT CHANGE

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // LOGIN INPUT CHANGE

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // REGISTER

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/api/auth/register`, {
        name: registerData.name,
        email: registerData.email,
        phoneNumber: registerData.phoneNumber,
        address: registerData.address,
        country: registerData.country,
        password: registerData.password,
      });

      alert(res.data.message || "Registration Successful");

      setRegisterData({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        country: "",
        password: "",
        confirmPassword: "",
      });

      setIsLogin(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Registration failed");
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  // LOGIN

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(`${API}/api/auth/login`, loginData);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message || "Login Successful");
      navigate("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.message || "Login Failed");
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* LEFT SIDE */}

        <div className="auth-left">
          <h1>Tridax Estates</h1>

          <h2>Find Your Dream Property</h2>

          <p>
            Buy, Sell and Invest in premium properties with confidence. Join
            thousands of satisfied customers today.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div className="auth-right">
          <h2>{isLogin ? "Login" : "Create Account"}</h2>

          {/* TOGGLE */}

          <div className="toggle">
            <button
  type="button"
  className={!isLogin ? "active" : ""}
  onClick={() => setIsLogin(false)}
>
  Register
</button>

           <button
  type="button"
  className={isLogin ? "active" : ""}
  onClick={() => setIsLogin(true)}
>
  Login
</button>

            <div className={`slider ${isLogin ? "login" : ""}`}></div>
          </div>

          {/* REGISTER */}

          {!isLogin && (
            <form onSubmit={handleRegister}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={registerData.name}
                onChange={handleRegisterChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={registerData.email}
                onChange={handleRegisterChange}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
                value={registerData.phoneNumber}
                onChange={handleRegisterChange}
              />

              <input
                type="text"
                name="address"
                placeholder="Residential Address"
                value={registerData.address}
                onChange={handleRegisterChange}
              />

              <input
                type="text"
                placeholder="Country"
                name="country"
                value={registerData.country}
                onChange={handleRegisterChange}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                required
              />

              <div className="show-password">
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                />
                Show Password
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
          )}

          {/* LOGIN */}

          {isLogin && (
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={loginData.email}
                onChange={handleLoginChange}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
              />

              <div className="login-options">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>

                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Logging In..." : "Login"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
