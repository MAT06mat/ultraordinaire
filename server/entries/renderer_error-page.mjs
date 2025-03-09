import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import PropTypes from "prop-types";
import { L as Link } from "../chunks/chunk-8f73f92f.js";
import "../chunks/chunk-25bc6dbf.js";
import "react";
const ErrorPage = "";
Page.propTypes = {
  is404: PropTypes.bool
};
function Page({ is404 }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { id: "error-page", children: [
    /* @__PURE__ */ jsx("div", { children: is404 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Oups!" }),
      /* @__PURE__ */ jsx("p", { children: "Erreur 404: Désolé, la page que vous recherchez n'existe pas..." })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "Oups!" }),
      /* @__PURE__ */ jsx("p", { children: "Erreur 500: Désolé, une erreur inattendue s'est produite..." })
    ] }) }),
    /* @__PURE__ */ jsx(Link, { className: "link", href: "/", children: "Accueil" })
  ] }) });
}
export {
  Page
};
