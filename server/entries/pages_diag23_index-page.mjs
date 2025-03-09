import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { P as PageLayout, S as Section } from "../chunks/chunk-d4e8412d.js";
import "react";
import "../chunks/chunk-8f73f92f.js";
import "prop-types";
import "../chunks/chunk-25bc6dbf.js";
import "motion/react";
function Page() {
  return /* @__PURE__ */ jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Diag23" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Page Diag23 de Julien Coindet de son site web ultraordinaire.fr"
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/diag23" })
    ] }),
    /* @__PURE__ */ jsx(Section, { color: "main-2", children: /* @__PURE__ */ jsxs("div", { className: "images-container", children: [
      /* @__PURE__ */ jsx("img", { src: "/images/WA0016.jpg", alt: "" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("img", { src: "/images/WA0017.jpg", alt: "" })
    ] }) })
  ] });
}
export {
  Page
};
