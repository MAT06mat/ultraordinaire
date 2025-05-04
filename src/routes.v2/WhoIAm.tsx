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
                                        Lorsqu’une idée émerge, elle se heurte
                                        souvent à des obstacles : des{" "}
                                        <b>pensées limitantes</b>, parfois
                                        dévalorisantes, ou encore un{" "}
                                        <b>
                                            environnement socioprofessionnel
                                            sceptique
                                        </b>{" "}
                                        et freiné par le système.
                                        <br />
                                        Être <b>proactif</b> implique un
                                        engagement fort et un travail basé sur
                                        de nombreuses inconnues. Cette démarche
                                        repose sur une{" "}
                                        <b>conviction profonde</b> quant à la
                                        pertinence de l’idée et du projet.
                                        <br />
                                        Pour transformer une simple idée en un{" "}
                                        <b>projet collectif</b>, il est
                                        essentiel de créer des espaces de
                                        rencontre où chaque acteur y trouve un
                                        bénéfice, même si leurs intérêts
                                        diffèrent. La motivation de chacun
                                        alimente alors une{" "}
                                        <b>dynamique collective</b>, facteur clé
                                        de la réussite.
                                    </p>
                                ),
                            },
                            {
                                title: "JULIEN COINDET, PASSIONNÉ ET ENTRAÎNANT",
                                content: (
                                    <p>
                                        Depuis mon plus jeune âge, le{" "}
                                        <b>sport</b>, qu’il soit individuel ou
                                        collectif, en intérieur ou en extérieur,
                                        a toujours été au cœur de ma vie. Ces
                                        multiples expériences, tant sur le plan{" "}
                                        <b>moteur</b> que <b>social</b>, ont
                                        façonné le{" "}
                                        <b>
                                            sportif, le professionnel et l’homme
                                        </b>{" "}
                                        que je suis aujourd’hui. Mon parcours, à
                                        la fois ordinaire et accompli, s’inscrit
                                        dans une{" "}
                                        <b>quête constante d’amélioration</b>,
                                        cherchant à devenir la meilleure version
                                        de moi-même à travers chaque nouvelle
                                        expérience.
                                    </p>
                                ),
                            },
                            {
                                title: "FÉDÉRER ÉNERGIES & COMPÉTENCES",
                                content: (
                                    <p>
                                        Peu importe son métier ou son statut, la
                                        capacité à{" "}
                                        <b>rassembler des énergies positives</b>{" "}
                                        et des <b>compétences</b> est un
                                        véritable défi, mais aussi un{" "}
                                        <b>atout essentiel</b> pour bâtir un
                                        projet collectif. Il s’agit avant tout
                                        de <b>donner du sens</b> à son action et
                                        d’insuffler une <b>dynamique commune</b>
                                        .
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
                            d’un homme devenu papa de deux magnifiques
                            princesses, dont la force s’est multipliée grâce à
                            elles et également au soutien constant de leur maman
                            durant de nombreuses années, pour relever les défis,
                            des îles aux montagnes.
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
