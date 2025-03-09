import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { P as PageLayout, S as Section, L as LinkImage } from "../chunks/chunk-d4e8412d.js";
import { F as FadeIn, A as Action } from "../chunks/chunk-396624b1.js";
import { L as Link } from "../chunks/chunk-8f73f92f.js";
import "react";
import "motion/react";
import "prop-types";
import "../chunks/chunk-25bc6dbf.js";
function List({ title, items }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    title ? /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("b", { children: title }) }) : null,
    /* @__PURE__ */ jsx("ul", { className: "list", children: items.map((element, index) => {
      return /* @__PURE__ */ jsx("li", { children: element }, index);
    }) })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "À Propos" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Page à propos de Julien Coindet de son site web ultraordinaire.fr"
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/about" })
    ] }),
    /* @__PURE__ */ jsx(Section, { color: "main-3", end: true, children: /* @__PURE__ */ jsxs("div", { className: "center padding", children: [
      /* @__PURE__ */ jsx("h1", { className: "XXL padding", children: "À Propos" }),
      /* @__PURE__ */ jsxs("p", { className: "padding", children: [
        "Ultraordinaire est le site de Julien Coindet, et a été réalisé par",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://mat06mat.github.io/MAT06mat",
            rel: "noreferrer",
            target: "_blank",
            children: "MAT06mat"
          }
        ),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { color: "main-2", noPadding: true, children: /* @__PURE__ */ jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsx("h1", { className: "complementary", children: "Sources et Infos" }),
      /* @__PURE__ */ jsxs("div", { className: "cols no-align", children: [
        /* @__PURE__ */ jsx(
          List,
          {
            title: "Podcasts :",
            items: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtube.com/@danslateteduncoureur?si=Eb9kxNFBNjon61Y9",
                  target: "_blank",
                  children: "Dans la tête d’un coureur"
                },
                0
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtube.com/playlist?list=PLpBiTQ0HpFBdz5soA5TndcxvU9v0_k0M9&si=tAwzereimIBkX3ie",
                  target: "_blank",
                  children: "La bande à Distance +"
                },
                1
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtube.com/@courseepique?si=SQ-Ns4adIu6o0yIC",
                  target: "_blank",
                  children: "Course épique"
                },
                2
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://open.spotify.com/show/3KsNbDdbkrtqH7USQOhT8t?si=ddQo75lpSjeUDuTNfYN7gA",
                  target: "_blank",
                  children: "Dans mon bain de Mathieu Blanchard sur spotify"
                },
                3
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtube.com/playlist?list=PLPISp8WxBuwUcpCRyGTmQKUEoU7A_2W8Q&si=ATVLpooWmJuawbys",
                  target: "_blank",
                  children: "Secret d’endurance Eric Lacroix et Hugo Ferrari"
                },
                4
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          List,
          {
            title: "Chaînes Youtube :",
            items: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtube.com/@mikehornexplorer?si=srLa1F6c89zxVJAc",
                  target: "_blank",
                  children: "Mike Horne"
                },
                0
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtube.com/channel/UCC6dDz3eOnTbqVDHW_Qd0Fg?si=OnJb3q1nUGcNzD7Z",
                  target: "_blank",
                  children: "François d’haene"
                },
                1
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtube.com/@kilianjornet?si=K3yiiCfFWESexIh5",
                  target: "_blank",
                  children: "Kilian Jornet"
                },
                2
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtube.com/@mathieu_blanchard?si=IsyokF5kw3R6ET40",
                  target: "_blank",
                  children: "Mathieu Blanchard"
                },
                3
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtu.be/NEg_p1Lw2l4?si=BLftpZ1FUT_Syv2b",
                  target: "_blank",
                  children: "Courtney Dauwalter"
                },
                4
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "https://youtu.be/NvsySSlx0HQ?si=V-KRFQWwGtJqGvgR",
                  target: "_blank",
                  children: "Sissi Cussot"
                },
                5
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          List,
          {
            title: "Livres & articles :",
            items: [
              /* @__PURE__ */ jsx(Fragment, { children: "Kilian jornet" }),
              /* @__PURE__ */ jsx(Fragment, { children: "Mathieu Blanchard" }),
              /* @__PURE__ */ jsx(Fragment, { children: "La préparation physique" }),
              /* @__PURE__ */ jsx(Fragment, { children: "Eric Lacroix" }),
              /* @__PURE__ */ jsx(Fragment, { children: "La clinique du coureur" }),
              /* @__PURE__ */ jsx(Fragment, { children: "Le Grand Raid de Eric Lacroix" }),
              /* @__PURE__ */ jsx(Fragment, { children: "Moins courir Mieux courir" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Action, { socialsMedias: true }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx("h1", { children: "Partenariats Réseau Entreprise" }),
        /* @__PURE__ */ jsxs("div", { className: "image-list", children: [
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.mvvp.fr/",
              src: "partenariats/ncjclxomd.avif"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://sites.google.com/view/dcsport/accueil",
              src: "partenariats/2e9911da.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.dynaforma.fr/",
              src: "partenariats/7fcdfb19.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://lemicrodantho.fr/",
              src: "partenariats/25fb201b.jpg"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx("h1", { className: "padding", children: "Partenariats Sportif Annuel" }),
        /* @__PURE__ */ jsxs("div", { className: "image-list", children: [
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://altore.corsica/",
              src: "partenariats/bc4ab58d.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://naturalorigins.me/",
              src: "partenariats/1445x.webp"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.instagram.com/jozbikeandrun?igsh=MW8wNGw2aHBlZWVpdQ==",
              src: "partenariats/72840987.jpg"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx("h1", { className: "padding", children: "Partenariats Aventures CHAM22 & DIAG23" }),
        /* @__PURE__ */ jsx("h3", { children: "Organisationnels" }),
        /* @__PURE__ */ jsxs("div", { className: "image-list", children: [
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://urlr.me/VFSgRs",
              src: "partenariats/d3fc26a5.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.chu-dijon.fr/",
              src: "partenariats/a012f21f.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.chu-reunion.fr/",
              src: "partenariats/b08b568b.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "http://www.chu-dijon.fr/service/plateforme-dexpertise-maladies-rares-bfc/plateforme-dexpertise-maladies-rares-bfc",
              src: "partenariats/aecd09f9.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.remarares.re/",
              src: "partenariats/bbc77696.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://fondation-maladiesrares.org/",
              src: "partenariats/3fcebed0.jpg"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h3", { children: "Financiers" }),
        /* @__PURE__ */ jsxs("div", { className: "image-list", style: { margin: 0 }, children: [
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.mgen.fr/",
              src: "partenariats/84cdc361.png"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.acef.com/com/page/1460",
              src: "partenariats/6fcb7a38.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.mnh.fr/",
              src: "partenariats/9e5171e8.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.chematech-mdt.com/",
              src: "partenariats/jfcbsbhj.png"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.ma.cuisinella/fr-fr/magasins/cote-d-or/dijon-quetigny",
              src: "partenariats/1b454dfe.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.dijonchauffage.fr/a-propos/",
              src: "partenariats/a9743777.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://concessions.peugeot.fr/marsannay-la-cote/nous-contacter/contactez-nous/",
              src: "partenariats/42e3ff33.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://negocialfinance.fr/",
              src: "partenariats/hvhjsbcs.png"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://urlr.me/jQMERu",
              src: "partenariats/6c349048.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "http://www.atelierlambert.fr/",
              src: "partenariats/bb9cc5ec.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://securama.fr/",
              src: "partenariats/b502d641.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://urlr.me/M4rUuY",
              src: "partenariats/4fbf9530.jpg"
            }
          ),
          /* @__PURE__ */ jsx(
            LinkImage,
            {
              href: "https://www.prospactive.com/",
              src: "partenariats/f033cfcc.jpg"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  Page
};
