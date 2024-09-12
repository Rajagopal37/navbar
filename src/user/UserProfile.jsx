import React from "react";

const UserProfile = ({ onLogout }) => {
  const getInitial = (name) => {
    if (!name) return "";

    const words = name.split(" ");
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
      initials += words[i][0];
    }
    return initials.toUpperCase();
  };

  return (
    <>
      <div className="d-flex align-items-center mx-3">
        <div className="m-2 d-flex align-items-center border rounded-circle text-white bg-primary p-2 fs-5">
          {getInitial("Raji Gopal")}
        </div>
        <div className="">
          <span className="mx-1" style={{ display: "block" }}>
            Raji Gopal
          </span>
          <button
            className="text-danger fw-bold"
            style={{
              fontSize: "1rem",
              backgroundColor: "white",
              borderStyle: "none",
            }}
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
