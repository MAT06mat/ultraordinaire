import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import TextImage from "../components/TextImage";
import Action from "../components/Action";
import { Link } from "react-router-dom";

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
                            Au centre gériatrique <b>Champmaillot</b> à Dijon,
                            200 personnes se sont mobilisées et mis en mouvement
                            dans <b>un esprit Téléthon</b> (rameur, vélo,
                            parcours extérieur), en continu jour et nuit pendant
                            les 35h de course de Julien Coindet à l’UTMB dont le
                            départ et l’arrivée est à <b>Chamonix</b>.
                        </p>
                    </div>
                    <div>
                        <h3>Projet 2 - Diag 23</h3>
                        <p>
                            <Link to={"diag23"} className="link">
                                La Diagonale des CHU (CHU Dijon –CHU La Réunion)
                            </Link>
                            <br />
                            <br />
                            Sur 2 jours de course, <b>300 personnes</b> se sont
                            rassemblées dans un esprit de partage, d’expériences
                            motrices et sensorielles sur des ateliers tels que
                            le tir à l’arc, les casques de réalité virtuelle,
                            tir à la carabine laser, rameurs, ergocycles,
                            expositions de contenus réalisés par les résidents
                            sur l’île de la réunion, etc. Durant{" "}
                            <b>le trail du chu</b> créé à cette occasion,{" "}
                            <b>100 personnes</b> sont partis simultanément au
                            départ en direct de la Réunion transmis sur un écran
                            géant. Les cuisines du CHU ont également travaillé
                            leurs menus en version réunionnais pour tous les
                            résidents du centre gériatrique de Champmaillot et à
                            la cafétéria du CHU Dijon.
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
