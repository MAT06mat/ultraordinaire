import { jsx } from "react/jsx-runtime";
import React, { useContext } from "react";
import PropTypes from "prop-types";
let childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]).isRequired;
const Context = React.createContext(void 0);
PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
export {
  PageContextProvider as P,
  childrenPropType as c,
  usePageContext as u
};
