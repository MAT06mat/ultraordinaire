import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";
import TextDropList from "../components/ui/TextDropList";
import TextImage from "../components/layouts/TextImage";
import Action from "../components/layouts/Action";

function Home() {
    return (
        <>
            <Helmet>
                <title>Ultraordinaire</title>
                <meta
                    name="description"
                    content="Page d'accueil de Julien Coindet de son site web ultraordinaire.fr"
                />
                <link rel="canonical" href="" />
            </Helmet>
            <Section background="panorama.webp" noContainer color="secondary">
                <div className="section-title">
                    <h1 className="center">
                        Bienvenue sur les sentiers de Julien Coindet
                    </h1>
                    <blockquote className="center">
                        Tout seul je vais vite, Ensemble on va loin <br />
                        L’esprit d’équipe, Comme un besoin
                    </blockquote>
                </div>
            </Section>
            <Section color="main-2" end>
                <TextImage source="766f77b3.jpg" reverse>
                    <h2>
                        PASSIONNÉ D’ULTRA TRAIL, PROFESSIONNEL SPORT SANTÉ,
                        FONDATEUR ASSOCIATION CPHD
                    </h2>
                    <h1 className="separator padding">
                        Une vie en mouvement ultra ordinaire
                    </h1>
                    <p>
                        <b>Julien Coindet</b> vous invite à le suivre sur les
                        sentiers <b>de son univers</b>.<br />
                        Ultra traileur confirmé, il a construit 2 projets{" "}
                        <b>sportifs</b>, <b>solidaires</b> et de{" "}
                        <b>cohésions interprofessionnels</b> en faveur de la
                        fondation maladies rares au sein du pôle personnes âgées
                        du CHU Dijon (UTMB ultra trail mont blanc ) puis entre
                        deux CHU (Dijon et La réunion) éloignés par des{" "}
                        <b>milliers de kilomètres</b> (Grand Raid de la Réunion
                        « la diagonale des fous »).
                        <br />
                        Un <b>mouvement fédérateur</b> s’est mis en marche grâce
                        au soutien et à l’enthousiasme de ses collègues, des
                        résidents, des familles, de l’ensemble du personnel
                        hospitalier sans oublier les indispensables partenaires.
                        <br />
                        Professionnel APA <b>depuis 15 ans</b>, il s’engage sur
                        le chemin de l’auto-entreprise, dans le domaine du
                        conseil & développement offrant un{" "}
                        <b>accompagnement individuel</b> vers une pratique du{" "}
                        <b>sport en santé</b> et dans la mise en place de
                        dispositif prévention/action de la{" "}
                        <b>santé par le sport</b>.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <TextImage source="3782cdfc.jpg">
                    <h2>JULIEN COINDET</h2>
                    <h1 className="separator padding">
                        Portrait d’un{" "}
                        <span className="complementary">professionnel</span> de
                        santé actif et passionné
                    </h1>
                    <p>
                        En 2021, il décide d’associer{" "}
                        <b>sa passion de l’ultra endurance</b> avec son
                        environnement socioprofessionnel autour de deux
                        thématiques: Le <b>sport en santé</b> et la{" "}
                        <b>santé par le sport</b>.
                    </p>
                    <TextDropList
                        list={[
                            {
                                title: "PROACTIF, GAGNANT - GAGNANT",
                                content: (
                                    <p>
                                        Au démarrage d’une idée, on est
                                        confronté au « c'est compliqué » soit
                                        par ses propres pensées limitantes,
                                        parfois dévalorisantes ou par un
                                        environnement socioprofessionnel
                                        septique et inhibé par le système. La
                                        proactivité demande de l’engagement et
                                        du travail basée sur une grande part
                                        d'inconnues. Elle est guidée par une
                                        forte conviction sur la pertinence de
                                        son idée, de son projet. Une des
                                        solutions pour basculer d'une idée à
                                        l'état de projet collectif est de
                                        trouver des espaces de rencontre «
                                        gagnant - gagnant » entre les acteurs de
                                        ce projet dont les niveaux d'intérêt
                                        seront, certes différents, mais dirigés
                                        vers cet objectif commun. La motivation
                                        de chacun va venir remplir la jauge de
                                        l’émulation collective déterminante dans
                                        la réussite du projet.
                                    </p>
                                ),
                            },
                            {
                                title: "JULIEN COINDET, PASSIONNÉ ET ENTRAÎNANT",
                                content: (
                                    <p>
                                        La passion du sport individuel-collectif
                                        et indoor-outdoor a rythmé ma vie,
                                        depuis le plus jeune âge. Toutes ces
                                        expériences motrices et sociales ont
                                        participé à la construction du sportif,
                                        du professionnel et de l’homme que je
                                        suis aujourd’hui: un parcours sportif
                                        ordinaire et confirmé dans une recherche
                                        permanente d'être la meilleure version
                                        de soi-même sur chaque nouvelle
                                        expérience initiée.
                                    </p>
                                ),
                            },
                            {
                                title: "FÉDÉRER ÉNERGIES & COMPÉTENCES",
                                content: (
                                    <p>
                                        Quel que soit son métier et son statut,
                                        développer sa capacité à fédérer des
                                        énergies positives et compétentes est un
                                        véritable challenge. C'est un atout dans
                                        la construction collective d’un projet :
                                        savoir donner du sens à son action.
                                    </p>
                                ),
                            },
                        ]}
                    />
                </TextImage>
            </Section>
            <Action />
            <Section color="main-2" end>
                <h1 className="center">Avis</h1>
                <h3 className="padding">Responsable Relations Santé Social</h3>
                <p className="padding separator">
                    Ravi d’avoir collaboré avec Julien Coindet sur « la
                    diagonale des CHU » pour l’Ultra-trail de la diagonale des
                    fous à la Réunion.
                    <br />
                    J’y ai rencontré une personne « ultraordianaire », dynamique
                    et pleine d’ambition au service des projets qu’il mène.
                    <br />
                    Une force de persévérance, de dépassement de soi et un
                    engagement permanent pour des projets fédérateurs porteurs
                    de valeurs fortes qui font sens.
                    <br />
                    John Boardman
                </p>
            </Section>
            <Section>
                <TextImage source="e9ae3025.jpg" proportion={40} reverse>
                    <h1>Une vie singulière</h1>
                    <p className="padding separator">
                        Ce site est le combo d’une vie
                        <br />
                        <br />
                        d’un enfant pratiquant de multiples activités sportives
                        avec une énergie débordante mais en difficulté dans la
                        gestion du stress (peur de mal faire) et des émotions
                        (certaines raquettes de tennis s'en rappellent encore),
                        <br />
                        <br />
                        d’une mère bienveillante et d’un père inspirant de part
                        ses connaissances et sa passion pour la nature,
                        notamment la montagne à travers son passé d’alpiniste;
                        <br />
                        <br />
                        d’une jeunesse en quête perpétuelle d’expériences
                        sportives malgré une croissance complexante en décalage
                        avec les jeunes de son âge ;
                        <br />
                        <br />
                        d’un homme rêvant de performance dans l’idée d’atteindre
                        le maximum de ses capacités exploitables et acceptant,
                        finalement, le stress comme un élément moteur
                        indispensable à la réussite d’une action;
                        <br />
                        <br />
                        d’un homme où les relations humaines fortes et sincères
                        s’installent dans sa vie;
                        <br />
                        <br />
                        d’un homme devenu papa de deux magnifiques princesses
                        décuplant cette énergie originelle pour déplacer des
                        montagnes grâce, notamment au soutien de leur maman;
                        <br />
                        <br />
                        Ce site est une synthèse d’un chemin singulier où l’être
                        unique, que nous sommes, chemine entre joie et douleur
                        avec, malheureusement , la perte de proches, la
                        séparation, les blessures qui nous font basculer soit
                        dans le monde de la victimisation ou alors dans celui de
                        la résilience.
                    </p>
                </TextImage>
            </Section>
        </>
    );
}

export default Home;
