import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { B as Bounce, S as Section, a as SocialsMedias } from "./chunk-d4e8412d.js";
import { motion } from "motion/react";
const Action$1 = "";
const ContactButton$1 = "";
function ContactButton() {
  function handleClick() {
    window.open(
      "mailto:julien.coindet21@icloud.com?subject=Mail%20depuis%20ultraordinaire.fr"
    );
  }
  return /* @__PURE__ */ jsx(
    Bounce,
    {
      className: "contact-button margin",
      onClick: handleClick,
      children: "Contactez moi maintenant"
    }
  );
}
function FadeIn({ children, ...props }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ...props,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      transition: { duration: 0.3 },
      variants: {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.95 }
      },
      children
    }
  );
}
function Action({ socialsMedias }) {
  return /* @__PURE__ */ jsx(Section, { color: "secondary", children: /* @__PURE__ */ jsx(
    FadeIn,
    {
      className: "cols action",
      children: socialsMedias ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { children: "SUIVRE MES AVENTURES" }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Voici les",
            " ",
            /* @__PURE__ */ jsx("span", { className: "complementary", children: "réseaux" }),
            " ",
            "de Julien"
          ] }),
          /* @__PURE__ */ jsx(SocialsMedias, {})
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: "/images/mobile.svg", alt: "" }),
          /* @__PURE__ */ jsx("h3", { className: "center", children: "Intéressé pour échanger ?" }),
          /* @__PURE__ */ jsx(ContactButton, {})
        ] })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { children: "COLLABORER AVEC JULIEN COINDET" }),
          /* @__PURE__ */ jsxs("h1", { children: [
            "Voici",
            " ",
            /* @__PURE__ */ jsx("span", { className: "complementary", children: "les offres" }),
            " ",
            "de Julien"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Vous avez besoin d’un intervenant, d’un accompagnement ?",
            /* @__PURE__ */ jsx("br", {}),
            "Quelque soit vos ",
            /* @__PURE__ */ jsx("b", { children: "besoins" }),
            ", entreprise, établissement public et privé, association ou fondation, indépendant ou particulier, vous trouverez, peut être, sur les 2 sentiers, un ",
            /* @__PURE__ */ jsx("b", { children: "levier de discussion" }),
            " qui fait sens pour vos équipes ou pour vous même. Le sport et vous ça fait deux ?",
            /* @__PURE__ */ jsx("br", {}),
            "Peut-être mais ",
            /* @__PURE__ */ jsx("b", { children: "votre santé" }),
            " et vous ne font qu’un !"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: "/images/mobile.svg", alt: "" }),
          /* @__PURE__ */ jsx("h3", { className: "center", children: "Vous êtes sur le bon chemin" }),
          /* @__PURE__ */ jsx(ContactButton, {})
        ] })
      ] })
    }
  ) });
}
export {
  Action as A,
  FadeIn as F
};
