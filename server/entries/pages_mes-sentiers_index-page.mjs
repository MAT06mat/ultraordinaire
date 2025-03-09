import { jsx, jsxs } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { P as PageLayout, S as Section } from "../chunks/chunk-d4e8412d.js";
import { T as TextImage } from "../chunks/chunk-52b2b936.js";
import { F as FadeIn, A as Action } from "../chunks/chunk-396624b1.js";
import { L as Link } from "../chunks/chunk-8f73f92f.js";
import "react";
import "motion/react";
import "prop-types";
import "../chunks/chunk-25bc6dbf.js";
function PlayButton() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: "play-icon",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"
        }
      )
    }
  );
}
function Page() {
  return /* @__PURE__ */ jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Mes Sentiers" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Page des projets ultra ordinaires de Julien Coindet sur son site web ultraordinaire.fr"
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/mes-sentiers" })
    ] }),
    /* @__PURE__ */ jsx(Section, { color: "main-3", end: true, children: /* @__PURE__ */ jsx("div", { className: "center padding", children: /* @__PURE__ */ jsx("h1", { className: "XXL padding", children: "Aventures" }) }) }),
    /* @__PURE__ */ jsx(Section, { color: "main-2", end: true, noPadding: true, children: /* @__PURE__ */ jsxs(
      TextImage,
      {
        reverse: true,
        source: "WA0040.jpg",
        videoLink: "https://www.youtube.com/embed/g1LzMYOnpBg",
        children: [
          /* @__PURE__ */ jsx("h2", { children: "LE MONDE DE JULIEN" }),
          /* @__PURE__ */ jsxs("h1", { className: "separator padding", children: [
            "LE MONDE DE",
            " ",
            /* @__PURE__ */ jsx("span", { className: "complementary", children: "L’ULTRATRAIL" }),
            " ET LE MONDE DE",
            " ",
            /* @__PURE__ */ jsx("span", { className: "complementary", children: "L’ENTREPRISE" })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "On s'interroge tous les jours sur ce fameux",
            " ",
            /* @__PURE__ */ jsx("b", { children: "pourquoi" }),
            ". Pourquoi souffrir pour une course ? Pourquoi faire ce métier ? Pourquoi je n'arrive plus à me motiver ? ",
            /* @__PURE__ */ jsx("b", { children: "Pourquoi, pourquoi, pourquoi…" }),
            /* @__PURE__ */ jsx("br", {}),
            "L’",
            /* @__PURE__ */ jsx("b", { children: "ultra-trail" }),
            " n’est pas une solution miracle, mais il nous plonge dans une",
            " ",
            /* @__PURE__ */ jsx("b", { children: "réflexion introspective constante" }),
            ", en interaction avec notre environnement, pour atteindre un objectif fixé. Intriguant, non ? Et si en entreprise, le processus était le même ?",
            /* @__PURE__ */ jsx("br", {}),
            "Imaginez toutes les ",
            /* @__PURE__ */ jsx("b", { children: "pistes de réflexion" }),
            " que nous pourrions explorer ensemble en établissant des parallèles entre ces deux mondes. Ce qui importe, ce n’est pas tant la réponse en elle-même, mais",
            " ",
            /* @__PURE__ */ jsx("b", { children: "le chemin pour y parvenir" }),
            "."
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs(FadeIn, { className: "cols", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "complementary", children: "TÉMOIGNAGES" }),
        /* @__PURE__ */ jsxs("p", { className: "separator padding", children: [
          /* @__PURE__ */ jsx("b", { children: "Inspirant et motivant" }),
          " dans un esprit de partage et d’échange ! Les projets de Julien reposent sur ",
          /* @__PURE__ */ jsx("b", { children: "l’intelligence collective" }),
          " et la",
          " ",
          /* @__PURE__ */ jsx("b", { children: "force de la solidarité" }),
          " au service d’une cause commune : la collecte de fonds pour la",
          " ",
          /* @__PURE__ */ jsx("b", { children: "Fondation Maladies Rares" }),
          ". S’engager ensemble et partager un objectif commun décuplent les chances de réussite."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "infos padding", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.facebook.com/reel/3537453623207227",
              target: "_blank",
              rel: "noreferrer",
              className: "video-link",
              children: [
                /* @__PURE__ */ jsx(PlayButton, {}),
                /* @__PURE__ */ jsx("h3", { children: "Projet 1 - Cham 22" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "info", children: "35h - 427ème/1789" })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Au ",
          /* @__PURE__ */ jsx("b", { children: "centre gériatrique Champmaillot à Dijon" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("b", { children: "200 personnes" }),
          " se sont mobilisées dans un véritable esprit ",
          /* @__PURE__ */ jsx("b", { children: "Téléthon" }),
          ", en participant à diverses activités (rameur, vélo, parcours extérieur). Pendant ",
          /* @__PURE__ */ jsx("b", { children: "35 heures" }),
          ", jour et nuit, elles ont accompagné symboliquement la course de",
          " ",
          /* @__PURE__ */ jsx("b", { children: "Julien Coindet à l’UTMB" }),
          ", reliant virtuellement ainsi Dijon à Chamonix, du départ à l’arrivée."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "infos", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.youtube.com/watch?v=gk1McQvHeD8",
              target: "_blank",
              rel: "noreferrer",
              className: "video-link",
              children: [
                /* @__PURE__ */ jsx(PlayButton, {}),
                /* @__PURE__ */ jsx("h3", { children: "Projet 2 - Diag 23" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "info", children: "41h45 - 393ème/2047" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx(Link, { href: "diag23", className: "link", children: "La Diagonale des CHU (CHU Dijon –CHU La Réunion)" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "La ",
          /* @__PURE__ */ jsx("b", { children: "Diagonale des CHU" }),
          " (CHU Dijon – CHU La Réunion) a rassemblé, sur deux jours,",
          " ",
          /* @__PURE__ */ jsx("b", { children: "300 personnes" }),
          " autour d’un esprit de partage et de découverte à travers des ateliers variés : tir à l’arc, réalité virtuelle, tir à la carabine laser, rameurs, ergocycles, et expositions réalisées par des résidents de l’île de La Réunion. Lors du",
          " ",
          /* @__PURE__ */ jsx("b", { children: "Trail du CHU" }),
          ", créé spécialement pour l’événement (dont la ",
          /* @__PURE__ */ jsx("b", { children: "3ᵉ édition" }),
          " aura lieu en 2025), ",
          /* @__PURE__ */ jsx("b", { children: "100 participants" }),
          " ont pris le départ simultanément avec celui du Grand Raid de La Réunion, retransmis sur écran géant. En parallèle, les cuisines du CHU ont adapté leurs menus en version réunionnaise, permettant aux résidents du centre gériatrique Champmaillot et aux visiteurs de la cafétéria du CHU Dijon de vivre cette immersion, touchant ainsi des ",
          /* @__PURE__ */ jsx("b", { children: "centaines de personnes" }),
          " au cours de ces deux journées."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { color: "main-2", start: true, children: /* @__PURE__ */ jsx(TextImage, { source: "chemin.jpg", alt: "Le chemin", proportion: 20, children: /* @__PURE__ */ jsxs("blockquote", { children: [
      /* @__PURE__ */ jsx("h3", { className: "padding", children: "Le chemin, le processus" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Tout projet débute souvent par une",
        " ",
        /* @__PURE__ */ jsx("b", { children: "page blanche" }),
        ", sur laquelle une idée prend forme, tracée à l’encre de la volonté d’entreprendre. On se lance sur un chemin, mais il arrive de ",
        /* @__PURE__ */ jsx("b", { children: "s’égarer" }),
        ". Alors, on s’arrête, on réévalue la direction à suivre, on consulte la carte, et parfois, on sollicite les conseils de ceux qui nous entourent. Une fois l’",
        /* @__PURE__ */ jsx("b", { children: "itinéraire retrouvé" }),
        ", on repart avec plus de vigilance et d’attention, déterminé à ne plus perdre de vue ",
        /* @__PURE__ */ jsx("b", { children: "l’objectif" }),
        "."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(Action, {}),
    /* @__PURE__ */ jsx(Section, { color: "main-3", end: true, children: /* @__PURE__ */ jsx("div", { className: "center padding", children: /* @__PURE__ */ jsx("h1", { className: "XXL", children: "Santé" }) }) }),
    /* @__PURE__ */ jsx(Section, { color: "main-2", end: true, noPadding: true, children: /* @__PURE__ */ jsxs(TextImage, { source: "8a3a2c9f.jpg", alt: "Paysage", reverse: true, children: [
      /* @__PURE__ */ jsxs("h1", { className: "", children: [
        "CONSTRUIRE & OPTIMISER SON",
        " ",
        /* @__PURE__ */ jsx("span", { className: "complementary", children: "CAPITAL SANTÉ" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "separator padding", children: [
        "Nous sommes tous uniques et entourés d’une multitude d’informations sur le ",
        /* @__PURE__ */ jsx("b", { children: "corps" }),
        ", l’",
        /* @__PURE__ */ jsx("b", { children: "esprit" }),
        ", les témoignages, la recherche et l’expérience. Autant de ressources précieuses pour bâtir et optimiser notre",
        " ",
        /* @__PURE__ */ jsx("b", { children: "capital santé" }),
        ".",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "Pourtant, il est souvent difficile de rester sur le bon chemin, de pratiquer une activité sportive tout en préservant sa santé, sans se perdre en route. Trouver l’",
        /* @__PURE__ */ jsx("b", { children: "équilibre" }),
        " est un défi permanent, un ajustement constant entre six ressources essentielles, toutes interdépendantes et en perpétuelle évolution :"
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "list", children: [
        /* @__PURE__ */ jsx("li", { children: "Entraînement physique & mental" }),
        /* @__PURE__ */ jsx("li", { children: "Nutrition & hydratation" }),
        /* @__PURE__ */ jsx("li", { children: "Expérience" }),
        /* @__PURE__ */ jsx("li", { children: "Famille" }),
        /* @__PURE__ */ jsx("li", { children: "Travail" }),
        /* @__PURE__ */ jsx("li", { children: "Vie sociale" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs(TextImage, { source: "16d71a61.jpg", alt: "Nuit étoilé", children: [
      /* @__PURE__ */ jsx("h1", { children: "INTERROGER SON MINDSET" }),
      /* @__PURE__ */ jsxs("p", { className: "separator padding", children: [
        "Sur ce chemin, on peut croire n’avoir besoin de personne. On se sent fort, physiquement, mentalement et émotionnellement… jusqu’au jour où l’une de ces six ressources vacille, ébranlant notre ",
        /* @__PURE__ */ jsx("b", { children: "pourquoi" }),
        ".",
        /* @__PURE__ */ jsx("br", {}),
        "C’est à ce moment que l’on commence, sans même s’en rendre compte, à s’éloigner du chemin. Le doute s’installe, le questionnement devient omniprésent et notre ",
        /* @__PURE__ */ jsx("b", { children: "état d’esprit" }),
        ", que l’on croyait inébranlable, se transforme."
      ] })
    ] }) })
  ] });
}
export {
  Page
};
