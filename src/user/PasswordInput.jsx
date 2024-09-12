import React from "react";

const PasswordInput = () => {
  return (
    <>
      <div className="form-group m-3 w-100">
        <input
          type="password"
          name="password"
          className="form-control mb-2"
          placeholder="Password"
        />
      </div>
    </>
  );
};

export default PasswordInput;
