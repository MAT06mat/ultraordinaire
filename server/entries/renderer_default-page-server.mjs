import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import React from "react";
import PropTypes from "prop-types";
import { c as childrenPropType, P as PageContextProvider } from "../chunks/chunk-25bc6dbf.js";
import { HelmetProvider } from "react-helmet-async";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
const PageShell$1 = "";
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsx(HelmetProvider, { context: {}, children }) }) });
}
const logoUrl = "/icon.svg";
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      "My render() hook expects pageContext.Page to be defined"
    );
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Ultraordinaire";
  const desc = documentProps && documentProps.description || "Site de Julien Coindet";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
