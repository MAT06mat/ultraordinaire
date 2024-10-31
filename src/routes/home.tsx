import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import TextDropList from "../components/TextDropList";
import TextImage from "../components/TextImage";

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
                        PASSIONNÉ D’ULTRA TRAIL, ENSEIGNANT APA, FONDATEUR
                        ASSOCIATION CPHD
                    </h2>
                    <h1 className="separator padding">
                        BIENVENUE SUR LES SENTIERS AVEC JULIEN COINDET
                    </h1>
                    <p>
                        Une vie en mouvement ultra ordinaire !<br />
                        <b>Julien Coindet</b> vous invite à le suivre sur les
                        sentiers de ses aventures sportives, solidaires et de
                        cohésion interprofessionnelle.{" "}
                        <b>Ultra traileur confirmé</b>, il a réussi à mobiliser
                        avec lui plusieurs CHU en embarquant ses collègues, les
                        résidents, les patients et leurs familles sur 2 courses
                        d'ultra distance <b>mondialement connues</b> pour être
                        les plus difficiles au monde : <b>UTMB</b> et{" "}
                        <b>le grand raid de la réunion</b> (la Diagonale des
                        Fous). <br /> À chaque course, un dossard solidaire a
                        été financé par des partenaires en faveur de la
                        Fondation Maladies Rares!
                        <br />
                        La notion de <b>sport santé</b> est une base commune aux
                        3 sentiers développés sur ce site : aventures, réseau,
                        association. <br />
                        Ce <b>professionnel hospitalier</b>, diplômé en activité
                        physique adaptée et aux multiples casquettes
                        professionnelles (enseignant/coordinateur APA,
                        formateur, auto-entrepreneur) est à votre écoute pour{" "}
                        <b>vous accompagner</b> sur ces 3 sentiers.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <TextImage source="3782cdfc.jpg">
                    <h2>JULIEN COINDET</h2>
                    <h1 className="separator padding">
                        Portrait d’un professionnel de santé actif passionné
                    </h1>
                    <p>
                        En 2021, il décide d’associer{" "}
                        <b>sa passion de l’ultra endurance</b> avec son
                        environnement socioprofessionnel autour de 2 grands
                        domaines de vie aux déclinaisons diverses :{" "}
                        <b>sport en santé</b> et <b>santé par le sport</b>.
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
                                        d'intérêt différents.`,
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
                                        de moi même sur chaque nouvelle
                                        expérience initiée.
                                    </p>
                                ),
                            },
                            {
                                title: "FÉDÉRER ÉNERGIES & COMPÉTENCES",
                                content: (
                                    <p>
                                        Quelque soit son métier et son statut,
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
            <Section color="main-2">
                <div className="cols">
                    <div style={{ width: "50%" }}>
                        <blockquote>
                            Tout seul je vais vite <br />
                            Ensemble on va loin <br />
                            L’esprit d’équipe <br />
                            Comme un besoin
                        </blockquote>
                    </div>
                    <div style={{ width: "50%" }}>
                        <p>Cette citation de Grand Corps Malade ...</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione deleniti aspernatur perspiciatis ex
                            quaerat, iste sequi aut, possimus rerum consectetur
                            veniam incidunt!
                        </p>
                    </div>
                </div>
            </Section>
            <Section color="secondary">
                <div className="cols action">
                    <div style={{ width: "70%" }}>
                        <h2>
                            PRÉSENTATION DES COLLABORATIONS AVEC JULIEN COINDET
                        </h2>
                        <h1>
                            Voici{" "}
                            <span className="complementary">les offres</span> de
                            Julien
                        </h1>
                        <p>
                            Quelque soit vos besoins, entreprise, établissement
                            public et privé, association ou fondation,
                            indépendant, particulier vous trouverez, peut être,
                            dans mes 3 sentiers un levier de discussion qui fait
                            sens pour vos équipes ou pour vous même. <br />
                            Mes différentes casquettes m'offrent l’opportunité
                            de rencontrer de nombreux professionnels dans des
                            domaines d’activités variées et un ensemble de
                            réseaux indispensables à la réussite des actions
                            initiées. <br /> Le sport et vous ça fait deux ?
                            Peut être, mais votre santé et vous ne font qu'un !{" "}
                            <br /> Vous avez besoin d’une collaboration ultra
                            ordinaire ? Vous êtes sur le bon sentier.
                        </p>
                    </div>
                    <div style={{ width: "30%" }}>
                        <img src="/images/mobile.svg" alt="" />
                        <h3 className="center">
                            Contactez moi pour votre projet !
                        </h3>
                        <button>Contactez moi maintenant</button>
                    </div>
                </div>
            </Section>
            <Section color="main-2">
                <div className="cols">
                    <div>
                        <h1 className="complementary">TÉMOIGNAGES</h1>
                        <p className="separator padding">
                            2 aventures sportives, collectives, solidaires et de
                            cohésion interprofessionnelle pour une cause
                            commune,{" "}
                            <b>
                                collecter des fonds pour la fondation maladies
                                rares
                            </b>
                            .{" "}
                        </p>
                        <p>
                            Un récit inspirant et motivant dans un esprit de
                            partage et d’échange !
                        </p>
                        <p>
                            Des projets basés sur l’intelligence collective
                            Incluant toute personne investie dans une dynamique
                            positive vers un même but :{" "}
                            <b>
                                être ensemble dans le mouvement en direction
                                d’une cause commune
                            </b>
                            . S’impliquer, s'engager et s’identifier sont des
                            comportements fondamentaux{" "}
                            <b>pour maximiser les chances de réussite</b> du
                            projet.
                        </p>
                        <h3 className="padding">Projet 1</h3>
                        <p>
                            Cham 22 : CHAMpmaillot (nom du centre gériatrique
                            CHU Dijon) - CHAMonix (ville départ/Arrivée de
                            l'UTMB){" "}
                        </p>
                        <p>
                            200 personnes se sont mis en mouvement dans un
                            esprit telethon (rameur, vélo, parcours extérieur),
                            jour et nuit pendant{" "}
                            <b>les 35h de course de Julien Coindet</b> à l’UTMB.{" "}
                        </p>
                    </div>
                    <div>
                        <h3>Projet 2</h3>
                        <p>
                            Diag 23: La Diagonale des CHU (CHU Dijon –CHU La
                            Réunion){" "}
                        </p>
                        <p>
                            300 personnes se sont rassemblées dans un esprit de
                            partage, d’expériences motrices et sensorielles sur
                            des ateliers tels que le tir à l’arc, les casques
                            réalité virtuelle, tir à la carabine laser, rameurs,
                            ergocycles, expositions de contenus réalisés par les
                            résidents sur la réunion, etc…{" "}
                        </p>
                        <p>
                            100 personnes ont participé au trail du CHU Dijon
                            avec un départ donné juste après celui de Julien
                            Coindet sur le Grand Raid en direct de la Réunion
                            sur un écran TV géant. Les cuisines du CHU ont
                            également travaillé leurs menus en version
                            réunionnais pour tous les résidents du centre
                            gériatrique de Champmaillot et à la cafétéria du CHU
                            Dijon.{" "}
                        </p>
                        <h3 className="padding">Titre</h3>
                        <p>
                            Les projets commencent, la plupart du temps, d'une
                            page blanche d’où émerge une idée avec une forte
                            volonté d’entreprendre.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="cols center">
                    <div>
                        <h1>
                            Texte <span className="complementary">1</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                    <div>
                        <h1>
                            Texte <span className="complementary">2</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                    <div>
                        <h1>
                            Texte <span className="complementary">3</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Home;
