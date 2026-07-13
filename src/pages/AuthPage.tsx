import { useState } from "react";
import "./AuthPage.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* LEFT SIDE */}

        <div className="auth-left">
          <h1>Tridax Estates</h1>

          <h2>
            Find Your Dream Property
          </h2>

          <p>
            Buy, Sell and Invest in premium
            properties with confidence.

            Join thousands of satisfied
            customers today.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div className="auth-right">

          <h2>
            {isLogin ? "Login" : "Create Account"}
          </h2>

          {/* TOGGLE */}

          <div className="toggle">

            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>

            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <div
              className={`slider ${
                isLogin ? "login" : ""
              }`}
            ></div>

          </div>

          {/* REGISTER */}

          {!isLogin && (

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
              />

              <input
                type="password"
                placeholder="Confirm Password"
              />

              <div className="show-password">

                <input
                  type="checkbox"
                  onChange={() =>
                    setShowPassword(!showPassword)
                  }
                />

                Show Password

              </div>

              <button className="submit-btn">
                Create Account
              </button>

            </form>

          )}

          {/* LOGIN */}

          {isLogin && (

            <form>

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
              />

              <div className="login-options">

                <label>

                  <input type="checkbox" />

                  Remember Me

                </label>

                <a href="#">
                  Forgot Password?
                </a>

              </div>

              <button className="submit-btn">
                Login
              </button>

            </form>

          )}

        </div>

      </div>
    </div>
  );
}

export default Auth;