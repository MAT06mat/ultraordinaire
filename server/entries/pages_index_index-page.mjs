import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { P as PageLayout, S as Section, L as LinkImage } from "../chunks/chunk-d4e8412d.js";
import { useState } from "react";
import { T as TextImage } from "../chunks/chunk-52b2b936.js";
import { A as Action, F as FadeIn } from "../chunks/chunk-396624b1.js";
import "../chunks/chunk-8f73f92f.js";
import "prop-types";
import "../chunks/chunk-25bc6dbf.js";
import "motion/react";
function PlusButton() {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M20 37L20 3" }),
    /* @__PURE__ */ jsx("path", { d: "M3 20L37 20" })
  ] });
}
function MinusButton() {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 40 40", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M3 20L37 20" }) });
}
function TextDropItem({ title, content, active = false, onClick }) {
  return /* @__PURE__ */ jsxs("div", { className: active ? "text-drop active" : "text-drop", children: [
    /* @__PURE__ */ jsxs("div", { className: "drop-button", onClick, children: [
      /* @__PURE__ */ jsx("div", { className: "title", children: title }),
      /* @__PURE__ */ jsx("div", { className: "btn open", children: /* @__PURE__ */ jsx(PlusButton, {}) }),
      /* @__PURE__ */ jsx("div", { className: "btn close", children: /* @__PURE__ */ jsx(MinusButton, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-wrapper", children: /* @__PURE__ */ jsx("div", { className: "text", children: content }) })
  ] });
}
const TextDropList$1 = "";
function TextDropList({ list }) {
  const [textDropIndex, setTextDropIndex] = useState(-1);
  function newTextDropIndex(index) {
    if (index === textDropIndex)
      setTextDropIndex(-1);
    else
      setTextDropIndex(index);
  }
  return /* @__PURE__ */ jsx("div", { className: "text-drop-list padding", children: list.map((element, index) => {
    return /* @__PURE__ */ jsx(
      TextDropItem,
      {
        title: element.title,
        content: element.content,
        active: index === textDropIndex,
        onClick: () => {
          newTextDropIndex(index);
        }
      },
      index
    );
  }) });
}
function Page() {
  return /* @__PURE__ */ jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Accueil" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Page d'accueil de Julien Coindet de son site web ultraordinaire.fr"
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/" })
    ] }),
    /* @__PURE__ */ jsx(Section, { background: "panorama.webp", noContainer: true, color: "secondary", children: /* @__PURE__ */ jsxs("div", { className: "section-title", children: [
      /* @__PURE__ */ jsx("h1", { className: "center", children: "Bienvenue sur les sentiers de Julien Coindet" }),
      /* @__PURE__ */ jsxs("blockquote", { className: "center", children: [
        "Tout seul je vais vite, Ensemble on va loin ",
        /* @__PURE__ */ jsx("br", {}),
        "L’esprit d’équipe, Comme un besoin"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { color: "main-2", end: true, children: /* @__PURE__ */ jsxs(TextImage, { source: "766f77b3.jpg", reverse: true, children: [
      /* @__PURE__ */ jsx("h2", { children: "PASSIONNÉ D’ULTRA TRAIL, PROFESSIONNEL SPORT SANTÉ, FONDATEUR ASSOCIATION CPHD" }),
      /* @__PURE__ */ jsx("h1", { className: "separator padding", children: "Une vie en mouvement ultra ordinaire" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("b", { children: "Julien Coindet" }),
        " vous invite à explorer les sentiers de son univers.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("b", { children: "Ultra-traileur aguerri" }),
        ", il a initié deux projets sportifs solidaires et interprofessionnels en soutien à la ",
        /* @__PURE__ */ jsx("b", { children: "Fondation Maladies Rares" }),
        ". Le premier, au sein du pôle personnes âgées du CHU de Dijon, l’a conduit à participer à l’",
        /* @__PURE__ */ jsx("b", { children: "UTMB (Ultra-Trail du Mont-Blanc)" }),
        ". Le second a relié symboliquement deux CHU distants de milliers de kilomètres, Dijon et La Réunion, à travers le",
        " ",
        /* @__PURE__ */ jsx("b", { children: "Grand Raid de La Réunion" }),
        ", aussi appelé “la Diagonale des Fous”.",
        /* @__PURE__ */ jsx("br", {}),
        "Porté par l’enthousiasme de ses collègues, des résidents, des familles, du personnel hospitalier et de précieux partenaires, un véritable élan fédérateur a vu le jour.",
        /* @__PURE__ */ jsx("br", {}),
        "Professionnel en Activité Physique Adaptée dans le secteur du handicap et du vieillissement depuis plus de 15 ans, Julien se lance aujourd’hui dans l’auto-entrepreneuriat. Il propose de partager son expérience à travers des témoignages et conférences, établissant des parallèles entre l’",
        /* @__PURE__ */ jsx("b", { children: "ultra-trail et le monde de l’entreprise" }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs(TextImage, { source: "3782cdfc.jpg", children: [
      /* @__PURE__ */ jsx("h2", { children: "JULIEN COINDET" }),
      /* @__PURE__ */ jsxs("h1", { className: "separator padding", children: [
        "Portrait d’un",
        " ",
        /* @__PURE__ */ jsx("span", { className: "complementary", children: "professionnel" }),
        " de santé actif et passionné"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "En ",
        /* @__PURE__ */ jsx("b", { children: "2021" }),
        ", il décide de combiner sa passion pour l’",
        /* @__PURE__ */ jsx("b", { children: "ultra-endurance" }),
        " avec son environnement socio-professionnel en mettant l’accent sur deux axes :",
        " ",
        /* @__PURE__ */ jsx("b", { children: "le sport au service de la santé" }),
        " et",
        " ",
        /* @__PURE__ */ jsx("b", { children: "la santé par le sport" }),
        "."
      ] }),
      /* @__PURE__ */ jsx(
        TextDropList,
        {
          list: [
            {
              title: "PROACTIF, GAGNANT - GAGNANT",
              content: /* @__PURE__ */ jsxs("p", { children: [
                "Lorsqu’une idée émerge, elle se heurte souvent à des obstacles : des",
                " ",
                /* @__PURE__ */ jsx("b", { children: "pensées limitantes" }),
                ", parfois dévalorisantes, ou encore un",
                " ",
                /* @__PURE__ */ jsx("b", { children: "environnement socioprofessionnel sceptique" }),
                " ",
                "et freiné par le système.",
                /* @__PURE__ */ jsx("br", {}),
                "Être ",
                /* @__PURE__ */ jsx("b", { children: "proactif" }),
                " implique un engagement fort et un travail basé sur de nombreuses inconnues. Cette démarche repose sur une",
                " ",
                /* @__PURE__ */ jsx("b", { children: "conviction profonde" }),
                " quant à la pertinence de l’idée et du projet.",
                /* @__PURE__ */ jsx("br", {}),
                "Pour transformer une simple idée en un",
                " ",
                /* @__PURE__ */ jsx("b", { children: "projet collectif" }),
                ", il est essentiel de créer des espaces de rencontre où chaque acteur y trouve un bénéfice, même si leurs intérêts diffèrent. La motivation de chacun alimente alors une",
                " ",
                /* @__PURE__ */ jsx("b", { children: "dynamique collective" }),
                ", facteur clé de la réussite."
              ] })
            },
            {
              title: "JULIEN COINDET, PASSIONNÉ ET ENTRAÎNANT",
              content: /* @__PURE__ */ jsxs("p", { children: [
                "Depuis mon plus jeune âge, le",
                " ",
                /* @__PURE__ */ jsx("b", { children: "sport" }),
                ", qu’il soit individuel ou collectif, en intérieur ou en extérieur, a toujours été au cœur de ma vie. Ces multiples expériences, tant sur le plan",
                " ",
                /* @__PURE__ */ jsx("b", { children: "moteur" }),
                " que ",
                /* @__PURE__ */ jsx("b", { children: "social" }),
                ", ont façonné le",
                " ",
                /* @__PURE__ */ jsx("b", { children: "sportif, le professionnel et l’homme" }),
                " ",
                "que je suis aujourd’hui. Mon parcours, à la fois ordinaire et accompli, s’inscrit dans une",
                " ",
                /* @__PURE__ */ jsx("b", { children: "quête constante d’amélioration" }),
                ", cherchant à devenir la meilleure version de moi-même à travers chaque nouvelle expérience."
              ] })
            },
            {
              title: "FÉDÉRER ÉNERGIES & COMPÉTENCES",
              content: /* @__PURE__ */ jsxs("p", { children: [
                "Peu importe son métier ou son statut, la capacité à",
                " ",
                /* @__PURE__ */ jsx("b", { children: "rassembler des énergies positives" }),
                " ",
                "et des ",
                /* @__PURE__ */ jsx("b", { children: "compétences" }),
                " est un véritable défi, mais aussi un",
                " ",
                /* @__PURE__ */ jsx("b", { children: "atout essentiel" }),
                " pour bâtir un projet collectif. Il s’agit avant tout de ",
                /* @__PURE__ */ jsx("b", { children: "donner du sens" }),
                " à son action et d’insuffler une ",
                /* @__PURE__ */ jsx("b", { children: "dynamique commune" }),
                "."
              ] })
            }
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Action, {}),
    /* @__PURE__ */ jsx(Section, { color: "main-2", end: true, children: /* @__PURE__ */ jsxs(FadeIn, { children: [
      /* @__PURE__ */ jsx("h1", { className: "center", children: "Avis" }),
      /* @__PURE__ */ jsxs("div", { className: "profile-image", children: [
        /* @__PURE__ */ jsx(
          LinkImage,
          {
            href: "https://www.mgen.fr/",
            src: "partenariats/84cdc362.png"
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "padding", children: "Responsable Relations Santé Social" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "padding separator", children: [
        "Ravi d’avoir collaboré avec Julien Coindet sur « la diagonale des CHU » pour l’Ultra-trail de la diagonale des fous à la Réunion.",
        /* @__PURE__ */ jsx("br", {}),
        "J’y ai rencontré une personne « ultraordinaire », dynamique et pleine d’ambition au service des projets qu’il mène.",
        /* @__PURE__ */ jsx("br", {}),
        "Une force de persévérance, de dépassement de soi et un engagement permanent pour des projets fédérateurs porteurs de valeurs fortes qui font sens.",
        /* @__PURE__ */ jsx("br", {}),
        "John Boardman"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs(TextImage, { source: "e9ae3025.jpg", proportion: 40, reverse: true, children: [
      /* @__PURE__ */ jsx("h1", { children: "Une vie singulière" }),
      /* @__PURE__ */ jsxs("p", { className: "padding separator", children: [
        "Ce site est le reflet d’un ",
        /* @__PURE__ */ jsx("b", { children: "parcours de vie unique" }),
        ", façonné par des",
        " ",
        /* @__PURE__ */ jsx("b", { children: "expériences intenses et marquantes" }),
        " :"
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "list list-gap", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "Celui d’un ",
          /* @__PURE__ */ jsx("b", { children: "enfant débordant d’énergie" }),
          ", passionné de sport, mais confronté aux défis de la gestion du stress et des émotions (certaines raquettes de tennis en portent encore les traces)."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Celui d’une ",
          /* @__PURE__ */ jsx("b", { children: "mère bienveillante" }),
          " et d’un",
          " ",
          /* @__PURE__ */ jsx("b", { children: "père inspirant" }),
          ", dont la passion pour la nature et la montagne, héritée de son passé d’alpiniste, a laissé une empreinte profonde."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Celui d’un",
          " ",
          /* @__PURE__ */ jsx("b", { children: "adolescent en quête perpétuelle d’expériences sportives" }),
          ", malgré une croissance qui l’éloignait des standards de son âge."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Celui d’un ",
          /* @__PURE__ */ jsx("b", { children: "homme poursuivant la performance" }),
          " ",
          "pour exploiter pleinement ses capacités, apprenant peu à peu à transformer le stress en un",
          " ",
          /* @__PURE__ */ jsx("b", { children: "moteur essentiel à la réussite" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Celui d’un homme pour qui les",
          " ",
          /* @__PURE__ */ jsx("b", { children: "relations humaines sincères et profondes" }),
          " ",
          "prennent une place centrale."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Celui d’un",
          " ",
          /* @__PURE__ */ jsx("b", { children: "père de deux merveilleuses princesses" }),
          ", dont l’énergie s’est démultipliée pour déplacer des montagnes, soutenu par leur maman."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Ce site est la synthèse d’un",
        " ",
        /* @__PURE__ */ jsx("b", { children: "chemin de vie singulier" }),
        ", où chacun oscille entre joie et douleur, marqué par la perte, la séparation et les blessures. Des épreuves qui nous confrontent à un choix : ",
        /* @__PURE__ */ jsx("b", { children: "sombrer dans la victimisation" }),
        " ou",
        " ",
        /* @__PURE__ */ jsx("b", { children: "embrasser la résilience" }),
        "."
      ] })
    ] }) })
  ] });
}
export {
  Page
};
