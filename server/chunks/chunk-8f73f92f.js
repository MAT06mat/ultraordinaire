import { jsx } from "react/jsx-runtime";
import PropTypes from "prop-types";
import { u as usePageContext } from "./chunk-25bc6dbf.js";
Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};
function Link(props) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && "is-active"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("a", { ...props, className });
}
export {
  Link as L
};
