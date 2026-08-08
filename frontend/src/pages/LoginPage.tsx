import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
      rememberMe,
    });

    navigate("/dashboard");
  };

  const handleGoogleLogin = () => {
    console.log("Demo Google login");

    navigate("/dashboard");
  };

  return (
    <div className="vm-login-page">
      {/* Left Panel */}
      <div className="vm-login-left">
        <div className="vm-login-brand">
          VentureMind <span>AI</span>
        </div>

        <div className="vm-login-welcome">
          <h1>Welcome Back</h1>

          <p>
            Sign in to continue validating your business ideas with
            AI-powered insights, market analysis, and growth strategies.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="vm-login-right">
        <form
          className="vm-login-form"
          onSubmit={handleSubmit}
        >
          <h2>Login to Your Account</h2>

          <p className="vm-login-subtext">
            Enter your credentials to access your dashboard
          </p>

          {/* Email */}
          <div className="vm-form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          {/* Password */}
          <div className="vm-form-group">
            <label htmlFor="password">
              Password
            </label>

            <div className="vm-password-wrapper">
              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="vm-password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="vm-form-row">
            <label className="vm-checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
              />

              <span>Remember Me</span>
            </label>

            <a
              href="#"
              className="vm-forgot-link"
              onClick={(e) =>
                e.preventDefault()
              }
            >
              Forgot Password?
            </a>
          </div>

          {/* Login */}
          <button
            type="submit"
            className="vm-btn vm-btn-primary vm-btn-full"
          >
            Login
          </button>

          {/* Divider */}
          <div className="vm-divider">
            <span>or</span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="vm-btn vm-btn-google vm-btn-full"
            onClick={handleGoogleLogin}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
              />

              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.4 0-13.7 4.1-17 10.1z"
              />

              <path
                fill="#4CAF50"
                d="M24 44c5.5 0 10.4-1.8 14.2-5l-6.6-5.4c-2 1.4-4.6 2.3-7.6 2.3-5.3 0-9.7-3.4-11.3-8L6 32.5C9.3 38.9 16.1 44 24 44z"
              />

              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.6l6.6 5.4C41.5 36.3 44 30.6 44 24c0-1.2-.1-2.4-.4-3.5z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Sign Up */}
          <p className="vm-signup-text">
            Don't have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;