import * as React from "react";

import HamburgerMenu from "./HamburgerMenu";

const NavBar = ({ siteTitle, leftMenu, rightMenu }) => {
  let listener = null;
  const [scrollState, setScrollState] = React.useState("top");

  React.useEffect(() => {
    listener = document?.addEventListener("scroll", (e) => {
      var scrolled = document?.scrollingElement?.scrollTop;
      if (scrolled >= 10) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document?.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <div
      className={
        "navbar__holder" +
        " navbar__nav-" +
        (scrollState === "top" ? "top" : "scroll")
      }
    >
      <div className="navbar__wrapper">
        <nav className="navbar__left-menu">
          <ul className="navbar__list navbar__left-list">
            {leftMenu?.map((item) => (
              <li className="navbar__list-item">
                <button aria-label={item} className="navbar__list-link">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar__logo-wrapper">
          <a className="navbar__logo-link" href="/">
            <h1 className="navbar__logo">{siteTitle}</h1>
          </a>
        </div>
        <nav className="navbar__right-menu">
          <ul className="navbar__list navbar__right-list">
            {rightMenu?.map((item) => (
              <li className="navbar__list-item">
                <button aria-label={item} className="navbar__list-link">
                  <a
                    className="navbar__link"
                    href={item.link}
                    rel="noreferrer"
                    target={item.link[0] === "#" ? "" : "_blank"}
                  >
                    {item.name}
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar__mobile">
          <HamburgerMenu
            fill={scrollState === "top" ? "white" : "black"}
            menu={rightMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
