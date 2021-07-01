import * as React from "react";

import CloseIcon from "../svg/CloseIcon";

const HamburgerMenu = ({ fill, menu }) => {
  const [menuIsVisible, setMenuIsVisible] = React.useState(false);

  return (
    <>
      <span
        className="navbar__hamburger-menu"
        onClick={() => setMenuIsVisible(!menuIsVisible)}
      >
        {[0, 1, 2].map((_) => (
          <svg width="30" height="3">
            <rect width="30" height="3" fill={fill} />
          </svg>
        ))}
      </span>
      {menuIsVisible ? (
        <>
          <div
            className="navbar__mobile-menu-mask"
            onClick={() => setMenuIsVisible(false)}
          ></div>
          <div className="navbar__mobile-menu">
            <div className="navbar__icon-holder">
              <div className="navbar__icon-wrapper">
                <CloseIcon onClick={() => setMenuIsVisible(false)} size={23} />
              </div>
            </div>
            <ul className="navbar__mobile-menu-list">
              {menu?.map((item) => (
                <li className="navbar__list-item navbar__mobile-list-item">
                  <button aria-label={item} className="navbar__list-link">
                    <a
                      className="navbar__link navbar__mobile-link"
                      href={item.link}
                      onClick={() => setMenuIsVisible(false)}
                      rel="noreferrer"
                      target={item.link[0] === "#" ? "" : "_blank"}
                    >
                      {item.name}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HamburgerMenu;
