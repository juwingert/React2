import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="quadrado"></div>
      <nav className="navigation">
        <ul className="nav_list">
          <button>
            <li className="nav_link">Home</li>
          </button>
          <button>
            <li className="nav_link">About</li>
          </button>
          <button>
            <li className="nav_link">Sale</li>
          </button>
          <button>
            <li className="nav_link">Contact</li>
          </button>
        </ul>
      </nav>
    </header>
  );
}
