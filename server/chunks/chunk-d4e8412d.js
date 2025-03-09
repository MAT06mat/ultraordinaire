import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { L as Link } from "./chunk-8f73f92f.js";
import { motion } from "motion/react";
const Section$1 = "";
function TriangleStartWhite() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 923 85",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      style: { marginTop: "-1px" },
      children: /* @__PURE__ */ jsx(
        "g",
        {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ jsx(
            "g",
            {
              id: "Page-principale",
              transform: "translate(0.000000, 0.000000)",
              fill: "#FFFFFF",
              children: /* @__PURE__ */ jsx("polygon", { id: "triangle1", points: "0 0 0 85 923 0" })
            }
          )
        }
      )
    }
  );
}
function TriangleEndWhite() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 923 85",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      style: { marginBottom: "-1px" },
      children: /* @__PURE__ */ jsx(
        "g",
        {
          id: "Page-1",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ jsx(
            "g",
            {
              id: "Page-principale",
              transform: "translate(0.000000, 0.000000)",
              fill: "#FFFFFF",
              children: /* @__PURE__ */ jsx(
                "polygon",
                {
                  id: "triangle2",
                  points: "923 0 923 85 0 85"
                }
              )
            }
          )
        }
      )
    }
  );
}
function Section({
  children = "",
  color = "main",
  background = "",
  noContainer,
  noPadding,
  start,
  end
}) {
  let className = color.toString();
  if (background) {
    className += " background-image";
    background = `images/${background}`;
  }
  className = noContainer ? className + " no-container" : className;
  className = start || noPadding ? className : className + " padding-top";
  className = end || noPadding ? className : className + " padding-bottom";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    start ? /* @__PURE__ */ jsx("div", { className: "triangle", children: /* @__PURE__ */ jsx(TriangleStartWhite, {}) }) : null,
    /* @__PURE__ */ jsx(
      "section",
      {
        className,
        style: {
          backgroundColor: `var(--${color})`,
          backgroundImage: `url('${background}')`
        },
        children: /* @__PURE__ */ jsx("div", { className: "container", children })
      }
    ),
    end ? /* @__PURE__ */ jsx(
      "div",
      {
        className: color === "main-3" ? "triangle dark" : "triangle",
        children: /* @__PURE__ */ jsx(TriangleEndWhite, {})
      }
    ) : null
  ] });
}
function LinkImage({ className, href, src, alt, _blank = true }) {
  return /* @__PURE__ */ jsx(
    motion.a,
    {
      className,
      href,
      target: _blank ? "_blank" : "",
      whileHover: { scale: 1.2 },
      whileTap: { scale: 0.9 },
      children: /* @__PURE__ */ jsx("img", { src: "/images/" + src, alt })
    }
  );
}
function Bounce({ children, ...props }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ...props,
      whileHover: { scale: 1.2 },
      whileTap: { scale: 0.9 },
      children
    }
  );
}
function SocialMedia({ url, path }) {
  return /* @__PURE__ */ jsx(Bounce, { children: /* @__PURE__ */ jsx("a", { href: url, target: "_blank", children: /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx("path", { d: path })
    }
  ) }) });
}
function SocialsMedias() {
  return /* @__PURE__ */ jsxs("div", { className: "socials-medias", children: [
    /* @__PURE__ */ jsx(
      SocialMedia,
      {
        url: "https://www.youtube.com/@juliencoindetaltore",
        path: "M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"
      }
    ),
    /* @__PURE__ */ jsx(
      SocialMedia,
      {
        url: "https://urlr.me/mjhRuP",
        path: "M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z"
      }
    ),
    /* @__PURE__ */ jsx(
      SocialMedia,
      {
        url: "https://urlr.me/krS4hB",
        path: "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
      }
    ),
    /* @__PURE__ */ jsx(
      SocialMedia,
      {
        url: "https://urlr.me/86yeCG",
        path: "M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"
      }
    )
  ] });
}
const Header$1 = "";
function MenuButton() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M3 6L37 6" }),
    /* @__PURE__ */ jsx("path", { d: "M3 34L37 34" }),
    /* @__PURE__ */ jsx("path", { d: "M3 20L37 20" })
  ] });
}
function CloseButton() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M3 37L37 3" }),
    /* @__PURE__ */ jsx("path", { d: "M37 37L3 3" })
  ] });
}
function Header() {
  const [showed, setShowed] = useState(false);
  useEffect(() => {
    const header = document.getElementById("header");
    function handleScroll() {
      if (header) {
        if (window.scrollY > header.offsetHeight * 2) {
          setShowed(true);
        } else {
          setShowed(false);
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
  });
  const [menuState, setMenuState] = useState(false);
  function handleOpen() {
    var _a;
    setMenuState(true);
    (_a = document.querySelector("body")) == null ? void 0 : _a.classList.add("stop-scrolling");
  }
  function handleClose() {
    var _a;
    setMenuState(false);
    (_a = document.querySelector("body")) == null ? void 0 : _a.classList.remove("stop-scrolling");
  }
  return /* @__PURE__ */ jsx("header", { className: showed ? "showed" : "", id: "header", children: /* @__PURE__ */ jsxs("nav", { children: [
    /* @__PURE__ */ jsx("div", { className: "btn menu-btn", onClick: handleOpen, children: /* @__PURE__ */ jsx(MenuButton, {}) }),
    /* @__PURE__ */ jsxs(Link, { href: "/", className: "logo", children: [
      /* @__PURE__ */ jsx("span", { className: "complementary", children: "ULTRA" }),
      "ORDINAIRE"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "background-button", onClick: handleClose }),
    /* @__PURE__ */ jsxs("ul", { className: menuState ? "nav-links open" : "nav-links", children: [
      /* @__PURE__ */ jsx("div", { className: "btn close-btn", onClick: handleClose, children: /* @__PURE__ */ jsx(CloseButton, {}) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", onClick: handleClose, children: "Accueil" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/mes-sentiers", onClick: handleClose, children: "Mes Sentiers" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", onClick: handleClose, children: "À Propos" }) })
    ] })
  ] }) });
}
const Footer$1 = "";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "sponsor", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        LinkImage,
        {
          href: "https://altore.corsica/",
          src: "fc540aad.jpg"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        LinkImage,
        {
          href: "https://naturalorigins.me/",
          src: "partenariats/1445x.webp"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "copyright separator", children: [
      /* @__PURE__ */ jsx("div", { children: "© 2024 Julien Coindet" }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Tous droits réservés - Site réalisé par",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "link",
            href: "https://mat06mat.github.io/MAT06mat",
            children: "MAT06mat"
          }
        )
      ] })
    ] })
  ] }) });
}
const SideMedias$1 = "";
function SideMedias() {
  return /* @__PURE__ */ jsx("div", { className: "side-medias", children: /* @__PURE__ */ jsx(SocialsMedias, {}) });
}
function PageLayout({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SideMedias, {}),
    /* @__PURE__ */ jsx(Header, {}),
    children,
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Bounce as B,
  LinkImage as L,
  PageLayout as P,
  Section as S,
  SocialsMedias as a
};
