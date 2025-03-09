import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { F as FadeIn } from "./chunk-396624b1.js";
const ImageVideo$1 = "";
function PlayButton2() {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 40 43", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("path", { d: "M34 18.2679C35.3333 19.0377 35.3333 20.9623 34 21.7321L11.5 34.7224C10.1667 35.4922 8.5 34.53 8.5 32.9904V7.00962C8.5 5.47002 10.1667 4.50777 11.5 5.27757L34 18.2679Z" }) }) });
}
function ImageVideo({ src, alt = "", link }) {
  const [videoActivated, setVideoActivated] = useState(false);
  function handleClick() {
    setVideoActivated(true);
  }
  return /* @__PURE__ */ jsxs("div", { className: "image-video", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/images/" + src,
        alt,
        style: { opacity: videoActivated ? 0 : 1 }
      }
    ),
    !videoActivated ? /* @__PURE__ */ jsx("div", { className: "svg-container", onClick: handleClick, children: /* @__PURE__ */ jsx(PlayButton2, {}) }) : /* @__PURE__ */ jsx(
      "iframe",
      {
        src: link,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: true,
        height: "315",
        referrerPolicy: "strict-origin-when-cross-origin",
        title: "YouTube video player",
        width: "560"
      }
    )
  ] });
}
function TextImage({
  children,
  source,
  videoLink,
  reverse = false,
  proportion = 50,
  alt = "Photo de Julien"
}) {
  return /* @__PURE__ */ jsx(
    FadeIn,
    {
      className: reverse ? "cols reverse" : "cols",
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text",
            style: { width: (100 - proportion).toString() + "%" },
            children
          }
        ),
        source && !videoLink ? /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/" + source,
            alt,
            style: { width: proportion.toString() + "%" },
            className: "shadow"
          }
        ) : null,
        source && videoLink ? /* @__PURE__ */ jsx(ImageVideo, { src: source, link: videoLink }) : null
      ] })
    }
  );
}
export {
  TextImage as T
};
