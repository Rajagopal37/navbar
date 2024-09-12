import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // For password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      errors.name = "Name is required.";
    }

    if (!email.trim() || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    alert("Account created successfully!");
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center ">
        <div className="m-3 p-3 w-25 border border-3 border-primary rounded d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="m-3 p-1 w-75">
            <h3 className="mb-4 d-flex justify-content-center text-primary">
              Create an Account
            </h3>

            <div className="form-group m-3 w-100">
              <input
                type="text"
                name="name"
                className="form-control mb-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>

            <div className="form-group m-3 w-100">
              <input
                type="email"
                name="email"
                className="form-control mb-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="form-group m-3 w-100 position-relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password type
                name="password"
                className="form-control mb-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                type="button"
                className="position-absolute end-0 top-0 mt-2 me-2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <i className="bi bi-eye-slash "></i>
                ) : (
                  <i className="bi bi-eye text-primary"></i>
                )}
              </span>
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>

            <div className="mt-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary text-white fw-normal rounded"
              >
                Submit
              </button>
            </div>

            <div className="text-center my-3">
              Already Have an Account?{" "}
              <Link to="/login" className="text-decoration-none">
                <span className="text-success fs-4 fw-semibold"> Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
