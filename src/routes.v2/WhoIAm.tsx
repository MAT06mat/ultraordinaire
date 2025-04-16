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
                <TextImage
                    source="e9ae3025.jpg"
                    proportion={40}
                    alt="Photo d'un lac en montagne"
                    reverse
                >
                    <h1>Une vie singulière</h1>
                    <ul className="separator list list-gap">
                        <li>
                            d’un enfant débordant d’énergie, passionné de sport,
                            mais confronté à un stress inhibant et des émotions
                            difficiles à canaliser par moment (certaines
                            raquettes de tennis en portent encore les stigmates)
                        </li>
                        <li>
                            d’un adolescent en quête perpétuelle d’expériences
                            sportives avec une croissance qui a pris son temps.
                        </li>
                        <li>
                            d’un homme animé par l’envie de performer apprenant
                            peu à peu à transformer ce stress en une force
                            essentielle pour atteindre ses objectifs.
                        </li>
                        <li>
                            d’un homme pour qui les relations humaines sincères
                            et profondes prennent une place centrale.
                        </li>
                        <li>
                            entouré d’une mère bienveillante et d’un père
                            alpiniste inspirant, dont la passion et l’amour pour
                            la montagne a éveillé le désir de découvrir cet
                            univers.
                        </li>
                        <li>
                            d’un homme devenu papa de deux merveilleuses
                            princesses, décuplant son énergie pour traverser des
                            îles et des montagnes
                        </li>
                        <li>
                            d’un professionnel du secteur du handicap et de la
                            dépendance passionné d’ultra trail…
                        </li>
                    </ul>
                </TextImage>
            </Section>
        </>
    );
}

export default WhoIAm;
