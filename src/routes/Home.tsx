import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import TextDropList from "../components/TextDropList";
import TextImage from "../components/TextImage";
import Action from "../components/Action";

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
            <Section background="panorama.webp" noContainer>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Section>
            <Section color="main-2" end>
                <TextImage source="766f77b3.jpg" reverse>
                    <h2>
                        PASSIONNÉ D’ULTRA TRAIL, PROFESSIONNEL SPORT SANTÉ,
                        FONDATEUR ASSOCIATION CPHD
                    </h2>
                    <h1 className="separator padding">
                        LES SENTIERS DE JULIEN COINDET
                    </h1>
                    <p>
                        Une vie en mouvement ultra ordinaire !<br />
                        <b>Julien Coindet</b> vous invite à le suivre sur le
                        sentier <b>Aventure</b>. Ultra traileur confirmé, il a
                        construit 2 projets <b>sportifs</b>, <b>solidaires</b>{" "}
                        et de <b>cohésions interprofessionnels</b> en faveur de
                        la fondation maladies rares au sein du pôle personnes
                        âgées du CHU Dijon (UTMB ultra trail mont blanc ) puis
                        entre deux CHU (Dijon - La réunion) éloignés par des
                        milliers de kilomètres (Grand Raid de la Réunion « la
                        diagonale des fous »).
                        <br />
                        Un mouvement fédérateur s’est mis en marche grâce au
                        soutien et l’enthousiasme de ses collègues, des
                        résidents, des familles, de l’ensemble du personnel
                        hospitalier et des partenaires.
                        <br />
                        Le <b>réseau</b> est un second sentier orienté autour de
                        deux axes en conseil & développement pour pratiquer le{" "}
                        <b>sport en santé</b> et pour mettre en place des
                        dispositifs interprofessionnels de{" "}
                        <b>santé par le sport</b>.
                        <br />
                        Julien Coindet, un <b>professionnel hospitalier</b>,
                        diplômé en activité physique adaptée
                        (enseignant/coordinateur APA, formateur,
                        auto-entrepreneur conseil & développement sport santé)
                        est à votre écoute pour <b>vous accompagner</b> sur le
                        sentier de votre choix.
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
                                        véritable challenge et un atout dans la
                                        construction collective d’un projet :
                                        savoir donner du sens à son action.
                                    </p>
                                ),
                            },
                        ]}
                    />
                </TextImage>
            </Section>
            <Action />
            <Section noPadding>
                <div className="cols">
                    <div>
                        <blockquote>
                            Tout seul je vais vite <br />
                            Ensemble on va loin <br />
                            L’esprit d’équipe <br />
                            Comme un besoin
                        </blockquote>
                    </div>
                    <div>
                        <p>
                            Rien de nouveau sous le soleil, l’addition des
                            énergies et des compétences de chacun augmente les
                            chances de réussite du projet. L’état d’esprit du
                            groupe aura une incidence fondamentale.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Home;
