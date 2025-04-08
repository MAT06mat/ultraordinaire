import { Helmet } from "react-helmet-async";
import Section from "../components.v2/layouts/Section";
import TextImage from "../components.v2/layouts/TextImage";
import TextDropList from "../components.v2/ui/TextDropList";
import Action from "../components/layouts/Action";

function WhoIAm() {
    return (
        <>
            <Helmet>
                <title>Qui je suis ?</title>
                <meta
                    name="description"
                    content="Page décrivant Julien Coindet sur son site web ultraordinaire.fr"
                />
                <link rel="canonical" href="/qui-je-suis" />
            </Helmet>
            <Section color="main-3" end>
                <div className="center padding">
                    <h1 className="XXL padding">Qui je suis ?</h1>
                </div>
            </Section>
            <Section color="main-2">
                <TextImage source="3782cdfc.jpg">
                    <h2>JULIEN COINDET</h2>
                    <h1 className="separator padding">
                        Portrait d’un{" "}
                        <span className="complementary">professionnel</span> de
                        santé actif et passionné
                    </h1>
                    <p>
                        En 2022, il décide de lier sa passion de l’ultra-trail
                        avec son environnement socio-professionnel.
                    </p>

                    <TextDropList
                        list={[
                            {
                                title: "PROACTIVITÉ",
                                content: (
                                    <p>
                                        Un engagement et une conviction profonde
                                        pour affronter les pensées limitantes et
                                        parfois le scepticisme de
                                        l’environnement socioprofessionnel.
                                    </p>
                                ),
                            },
                            {
                                title: "JULIEN COINDET, PASSIONNÉ ET ENTRAÎNANT",
                                content: (
                                    <p>
                                        Sport et Nature comme boussole depuis
                                        son plus jeune âge. Une envie d’explorer
                                        au maximum ses capacités physiques et
                                        mentales Devenir la meilleure version de
                                        soi-même Convaincu par la citation du
                                        chanteur Grand Corps Malade « Tout seul
                                        je vais vite, Ensemble on va loin
                                        L’esprit d’équipe, Comme un besoin »
                                    </p>
                                ),
                            },
                            {
                                title: "FÉDÉRER ÉNERGIES & COMPÉTENCES",
                                content: (
                                    <p>
                                        En donnant du sens à son action pour
                                        enclencher une dynamique collective vers
                                        un but commun.
                                    </p>
                                ),
                            },
                        ]}
                    />
                </TextImage>
            </Section>
            <Action socialsMedias />
            <Section>
                <TextImage source="e9ae3025.jpg" proportion={40} reverse>
                    <h1>Une vie singulière</h1>
                    <p className="padding separator">
                        Ce site est le reflet d’un <b>parcours de vie unique</b>
                        , façonné par des{" "}
                        <b>expériences intenses et marquantes</b> :{" "}
                    </p>
                    <ul className="list list-gap">
                        <li>
                            Celui d’un <b>enfant débordant d’énergie</b>,
                            passionné de sport, mais confronté aux défis de la
                            gestion du stress et des émotions (certaines
                            raquettes de tennis en portent encore les traces).
                        </li>
                        <li>
                            Celui d’une <b>mère bienveillante</b> et d’un{" "}
                            <b>père inspirant</b>, dont la passion pour la
                            nature et la montagne, héritée de son passé
                            d’alpiniste, a laissé une empreinte profonde.
                        </li>
                        <li>
                            Celui d’un{" "}
                            <b>
                                adolescent en quête perpétuelle d’expériences
                                sportives
                            </b>
                            , malgré une croissance qui l’éloignait des
                            standards de son âge.
                        </li>
                        <li>
                            Celui d’un <b>homme poursuivant la performance</b>{" "}
                            pour exploiter pleinement ses capacités, apprenant
                            peu à peu à transformer le stress en un{" "}
                            <b>moteur essentiel à la réussite</b>.
                        </li>
                        <li>
                            Celui d’un homme pour qui les{" "}
                            <b>relations humaines sincères et profondes</b>{" "}
                            prennent une place centrale.
                        </li>
                        <li>
                            Celui d’un{" "}
                            <b>père de deux merveilleuses princesses</b>, dont
                            l’énergie s’est démultipliée pour déplacer des
                            montagnes, soutenu par leur maman.
                        </li>
                    </ul>{" "}
                    <p>
                        Ce site est la synthèse d’un{" "}
                        <b>chemin de vie singulier</b>, où chacun oscille entre
                        joie et douleur, marqué par la perte, la séparation et
                        les blessures. Des épreuves qui nous confrontent à un
                        choix : <b>sombrer dans la victimisation</b> ou{" "}
                        <b>embrasser la résilience</b>.
                    </p>
                </TextImage>
            </Section>
        </>
    );
}

export default WhoIAm;
