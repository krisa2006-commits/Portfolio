import React from "react";

const Header = () => {
  const header = [
    { id: 1, page: "Home" },
    { id: 2, page: "Work" },
    { id: 3, page: "Contact" },
  ];

  const nav = header.map((item) => {
    return <p key={item.id}>{item.page}</p>;
  });

  return (
    <header className="header">
      <div className="logo">
        <h2>KRISHA</h2>
      </div>

      <div className="navbar">{nav}</div>

      <div className="resume">
        <button>Resume</button>
      </div>
    </header>
  );
};

export default Header;
