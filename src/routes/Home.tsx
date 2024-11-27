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
            <Section color="main-2">
                <TextImage source="766f77b3.jpg" reverse>
                    <h2>
                        PASSIONNÉ D’ULTRA TRAIL, PROFESSIONNEL SPORT SANTÉ,
                        FONDATEUR ASSOCIATION CPHD
                    </h2>
                    <h1 className="separator padding">
                        LES 3 SENTIERS DE JULIEN COINDET
                    </h1>
                    <p>
                        Une vie en mouvement ultra ordinaire !<br />
                        <b>Julien Coindet</b> vous invite à le suivre sur le
                        sentier de ses aventures sportives, solidaires et de
                        cohésion interprofessionnelle.{" "}
                        <b>Ultra traileur confirmé</b>, il a réussi à mobiliser
                        avec lui plusieurs CHU en embarquant dans le mouvement,
                        ses collègues, les résidents, les patients et leurs
                        familles sur 2 courses d'ultra distance{" "}
                        <b>mondialement connues</b> pour être les plus
                        difficiles au monde : <b>UTMB</b> et{" "}
                        <b>le grand raid de la réunion</b> (la Diagonale des
                        Fous). <br /> À chaque course, un dossard solidaire a
                        été financé par des partenaires en faveur de la
                        Fondation Maladies Rares! <br /> La notion de{" "}
                        <b>sport santé</b> est une base commune aux 3 sentiers
                        développés sur ce site : aventures, réseau,
                        associations. <br /> Ce <b>professionnel hospitalier</b>
                        , diplômé en activité physique adaptée et aux multiples
                        casquettes professionnelles (enseignant/coordinateur
                        APA, formateur, auto-entrepreneur conseil &
                        développement sport santé) est à votre écoute pour{" "}
                        <b>vous accompagner</b> sur ces 3 sentiers.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <TextImage source="3782cdfc.jpg">
                    <h2>JULIEN COINDET</h2>
                    <h1 className="separator padding">
                        Portrait d’un professionnel de santé actif et passionné
                    </h1>
                    <p>
                        En 2021, il décide d’associer{" "}
                        <b>sa passion de l’ultra endurance</b> avec son
                        environnement socioprofessionnel autour de 2 grands
                        domaines de vie : Le <b>sport en santé</b> et la{" "}
                        <b>santé par le sport</b>.
                    </p>
                    <TextDropList
                        list={[
                            {
                                title: "PROACTIF, GAGNANT - GAGNANT",
                                content: (
                                    <p>
                                        Au démarrage d’une idée, on va être
                                        confronté au « c'est compliqué » soit
                                        par ses propres pensées limitantes,
                                        parfois dévalorisantes ou par un
                                        environnement socioprofessionnel
                                        septique. Une des solutions pour
                                        basculer d'une idée à l'état de projet
                                        viable est de trouver des espaces
                                        communs « gagnant - gagnant » entre les
                                        acteurs de ce projet avec des niveaux
                                        d'intérêt différents.
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
                                        suis aujourd’hui : un parcours sportif
                                        ordinaire en dehors de l’élitisme mais
                                        en essayant d'être la meilleure version
                                        de moi-même sur chaque nouvelle
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
                                        véritable atout dans la construction
                                        collective du projet : donner du sens à
                                        son action.
                                    </p>
                                ),
                            },
                        ]}
                    />
                </TextImage>
            </Section>
            <Action />
            <Section>
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
                            groupe aura une incidence fondamentale pour mener à
                            terme celui-ci.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Home;
