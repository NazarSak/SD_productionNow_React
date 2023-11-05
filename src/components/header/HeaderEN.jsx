import React from "react";
import { Link } from "react-router-dom";

export const HeaderEN = () => {
  return (
    <header>
      {/* <div>
        <a href="/en/home">
          <img  src="/img/logo.svg" alt="logo" />
        </a>
      </div> */}
      <ul>
        <li>
          <Link to="/en/home#projects">Projects</Link>
        </li>
        <li>
          <Link to="/en/home#services">Services</Link>
        </li>
        <li>
          <Link to="/en/home#ourTeam">Team</Link>
        </li>
        <li>
          <Link to="/en/home#contentUs">Contact us</Link>
        </li>
      </ul>
      <div>
        <ul>
          <li>EN</li>
          <li>
            <Link to="/de/home">DE</Link>
          </li>
        </ul>
        <img src="/img/Arrow.svg" alt="" />
      </div>
      <div>
        <img src="/img/HamburgerMenu.svg" alt="svg" />
        <div class="HamburgerMenuNav">
          <img
            class="HamburgerMenuButtonClose"
            src="/img/closeAction.svg"
            alt=""
          />
          <ul>
            <li>
              <Link to="/en/home#">Hero</Link>
            </li>
            <li>
              <Link to="/en/home#projects">Projects</Link>
            </li>
            <li>
              <Link to="/en/home#services">Services</Link>
            </li>
            <li>
              <Link to="/en/home#ourTeam">Team</Link>
            </li>
            <li>
              <Link to="/en/home#contentUs">Contact</Link>
            </li>
            <li>
              <div>
                <button>
                  <Link to="/">EN</Link>
                </button>
                <div></div>
                <button>
                  <Link to="/de/home">DE</Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
