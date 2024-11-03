import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import TextImage from "../components/TextImage";
import Action from "../components/Action";

function Aventures() {
    return (
        <>
            <Helmet>
                <title>Aventures</title>
                <meta
                    name="description"
                    content="Page des projets ultra ordinaires de Julien Coindet sur son site web ultraordinaire.fr"
                />
                <link rel="canonical" href="/aventures" />
            </Helmet>
            <Section color="main-2">
                <TextImage reverse source="WA0040.jpg">
                    <h2>LE MONDE DE JULIEN</h2>
                    <h1 className="separator padding">
                        LE MONDE DE{" "}
                        <span className="complementary">L’ULTRATRAIL</span> ET
                        LE MONDE DE{" "}
                        <span className="complementary">L’ENTREPRISE</span>
                    </h1>
                    <p>
                        On s'interroge tous les jours sur ce fameux{" "}
                        <b>pourquoi</b>. Pourquoi souffrir pour une course ?
                        Pourquoi faire ce métier ? Pourquoi je n'arrive plus à
                        me motiver ? Pourquoi, pourquoi, pourquoi… <br />
                        L'ultra trail n'est évidemment pas la solution magique
                        mais en tout cas{" "}
                        <b>
                            son univers nous amène à un questionnement
                            introspectif
                        </b>{" "}
                        en interaction permanente avec son environnement pour
                        atteindre un objectif fixé au départ. Intéressant non ?
                        Et en entreprise, le processus n'est il pas le même ?{" "}
                        <br />
                        Imaginez le nombre de pistes de travail que{" "}
                        <b>nous pouvons activer ensemble</b> autour des
                        parallèles possibles entre ces 2 univers. <br />
                        Ce qui nous intéresse, ce n'est pas tant le résultat de
                        ces réponses qui nous intéresse mais{" "}
                        <b>le chemin pour y parvenir</b>.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <div className="cols">
                    <div>
                        <h1 className="complementary">TÉMOIGNAGES</h1>
                        <p className="separator padding">
                            Les projets de Julien illustrent{" "}
                            <b>l’intelligence collective</b> et l’importance de
                            la solidarité pour une cause commune :{" "}
                            <b>
                                la collecte de fonds pour la Fondation Maladies
                                Rares
                            </b>
                            . S’impliquer, s’engager, et s’identifier à un but
                            commun maximise les chances de succès.
                        </p>
                        <h3 className="padding">Projet 1 - Cham 22</h3>
                        <p>
                            Depuis le centre gériatrique{" "}
                            <b>Champmaillot à Dijon</b>
                            jusqu’à <b>Chamonix</b>, 200 personnes se sont
                            mobilisées, participant à des activités physiques
                            (rameur, vélo, parcours extérieur) en continu
                            pendant les <b>35 heures</b> de course de Julien
                            lors de l’<b>UTMB</b>.
                        </p>
                    </div>
                    <div>
                        <h3>Projet 2 - Diag 23</h3>
                        <p>
                            La Diagonale des CHU (CHU Dijon –CHU La Réunion){" "}
                            <br />
                            Pendant cet instant,{" "}
                            <b>300 personnes se sont rassemblées</b> dans un
                            esprit de partage d’expériences motrices et
                            sensorielles sur des ateliers tels que le tir à
                            l’arc, les casques réalité virtuelle, tir à la
                            carabine laser, rameurs, ergocycles, expositions de
                            contenus réalisés par les résidents sur la réunion,
                            etc… <br />
                            <br />
                            Durant le trail du CHU Dijon,{" "}
                            <b>2047 personnes ont participé</b> sur le Grand
                            Raid en direct de la Réunion sur un écran TV géant.
                            Les cuisines du CHU ont également travaillé leurs
                            menus en version réunionnais pour tous les résidents
                            du centre gériatrique de Champmaillot et à la
                            cafétéria du CHU Dijon. Julien à fini en 41h45 et
                            s'est placé 393ème.
                        </p>
                    </div>
                </div>
            </Section>
            <Section color="main-2">
                <blockquote>
                    <h3 className="padding">Le chemin, le processus</h3>
                    <p>
                        Un projet commence, la plupart du temps, d'une page
                        blanche d’où émerge une idée au stylo noir avec une
                        forte volonté d’entreprendre. Ce projet emprunte un
                        chemin mais parfois il se trompe. Il s’arrête pour faire
                        le point en regardant l’objectif à atteindre sur la
                        carte. Il demande autour quel chemin prendre car il est
                        un peu perdu. Un nouveau chemin se présente à lui et, il
                        devient alors plus vigilant, plus attentif pour ne plus
                        s’éloigner de l’objectif. Finalement, le résultat sera
                        la mise en couleur de toutes ces idées écrites, au fur
                        et à mesure sur cette page blanche au départ de ce
                        projet.
                    </p>
                </blockquote>
            </Section>
            <Action />
        </>
    );
}

/*
<Route path="temoignages" />
<Route path="ultra-trail" />
<Route path="capital-sante" />
<Route path="dynamique-collective" />
*/

export default Aventures;
