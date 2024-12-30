import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";
import TextImage from "../components/layouts/TextImage";
import Action from "../components/layouts/Action";
import { Link } from "react-router-dom";
import PlayButton from "../assets/images/PlayButton";

function Aventures() {
    return (
        <>
            <Helmet>
                <title>Mes Sentiers</title>
                <meta
                    name="description"
                    content="Page des projets ultra ordinaires de Julien Coindet sur son site web ultraordinaire.fr"
                />
                <link rel="canonical" href="/aventures" />
            </Helmet>
            <Section color="main-3" end>
                <div className="center padding">
                    <h1 className="XXL padding">Aventures</h1>
                </div>
            </Section>
            <Section color="main-2" end noPadding>
                <TextImage
                    reverse
                    source="WA0040.jpg"
                    videoLink="https://www.youtube.com/embed/g1LzMYOnpBg"
                >
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
                        Et en entreprise, le processus n'est-il pas le même ?{" "}
                        <br />
                        Imaginez le nombre de pistes de travail que{" "}
                        <b>nous pouvons activer ensemble</b> autour des
                        parallèles possibles entre ces 2 univers. <br />
                        Ce qui nous intéresse, ce n'est pas tant le résultat de
                        ces réponses mais <b>le chemin pour y parvenir</b>.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <div className="cols">
                    <div>
                        <h1 className="complementary">TÉMOIGNAGES</h1>
                        <p className="separator padding">
                            Les projets de Julien s'appuient sur{" "}
                            <b>l’intelligence collective</b> et l’importance de
                            la solidarité pour une cause commune :{" "}
                            <b>
                                la collecte de fonds pour la Fondation Maladies
                                Rares
                            </b>
                            . S’engager et s’identifier, dans un but commun,
                            maximise les chances de succès.
                        </p>
                        <div className="infos padding">
                            <a
                                href="https://www.facebook.com/reel/3537453623207227"
                                target="_blank"
                                className="video-link"
                            >
                                <PlayButton />
                                <h3>Projet 1 - Cham 22</h3>
                            </a>
                            <div className="info">35h - 427ème/1789</div>
                        </div>
                        <p>
                            Au centre gériatrique <b>Champmaillot</b> à Dijon,
                            200 personnes se sont mobilisées et mis en mouvement
                            dans <b>un esprit Téléthon</b> (rameur, vélo,
                            parcours extérieur), en continu jour et nuit pendant
                            les 35h de course de Julien Coindet à l’UTMB dont le
                            départ et l’arrivée est à <b>Chamonix</b>.
                            <br />
                        </p>
                    </div>
                    <div>
                        <div className="infos">
                            <a
                                href="https://www.youtube.com/watch?v=gk1McQvHeD8"
                                target="_blank"
                                className="video-link"
                            >
                                <PlayButton />
                                <h3>Projet 2 - Diag 23</h3>
                            </a>
                            <div className="info">41h45 - 393ème/2047</div>{" "}
                        </div>
                        <p>
                            <Link to="diag23" className="link">
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
            <Section color="main-2" start>
                <TextImage source="chemin.jpg" alt="Le chemin" proportion={20}>
                    <blockquote>
                        <h3 className="padding">Le chemin, le processus</h3>
                        <p>
                            Un projet commence, la plupart du temps, d'une page
                            blanche d’où émerge une idée au stylo noir avec une
                            forte volonté d’entreprendre. On emprunte un chemin
                            mais parfois on s’égare. On s’arrête, on repère
                            l’objectif à atteindre sur la carte. On demande,
                            parfois, autour de nous le chemin à prendre. Le
                            chemin retrouvé, on repart avec un niveau de
                            vigilance et d'attention accru pour ne plus
                            s’éloigner de l’objectif.
                        </p>
                    </blockquote>
                </TextImage>
            </Section>
            <Action />
            <Section color="main-3" end>
                <div className="center padding">
                    <h1 className="XXL">Santé</h1>
                </div>
            </Section>
            <Section color="main-2" end noPadding>
                <TextImage source="8a3a2c9f.jpg" alt="Paysage" reverse>
                    <h1 className="">
                        CONSTRUIRE & OPTIMISER SON{" "}
                        <span className="complementary">CAPITAL SANTÉ</span>
                    </h1>
                    <p className="separator padding">
                        Nous sommes tous des <b>êtres uniques</b> avec sous nos
                        yeux, énormément d’informations sur le corps et
                        l’esprit, de témoignage, d’éléments de recherche,
                        d'expérience sur les différentes ressources à mobiliser
                        pour <b>construire</b> et <b>optimiser</b> son{" "}
                        <b>capital santé</b>. Pourtant, il est tellement{" "}
                        <b>difficile</b> de rester sur le chemin d’une pratique
                        sportive en <b>bonne santé</b> et ne pas se{" "}
                        <b>perdre</b>.
                        <br />
                        <br />
                        Cela exige de trouver un <b>équilibre complexe</b> entre
                        6 ressources qui sera constamment questionné et perturbé
                        demandant un ajustement systématique tout au long de sa
                        vie.
                    </p>
                    <ul className="list">
                        <li>Ressource Entraînement physique & mental</li>
                        <li>Ressource Nutrition / Hydratation</li>
                        <li>Ressource Expérience</li>
                        <li>Ressource Famille</li>
                        <li>Ressource Travail</li>
                        <li>Ressource Vie sociale</li>
                    </ul>
                </TextImage>
            </Section>
            <Section>
                <TextImage source="16d71a61.jpg" alt="Nuit étoilé">
                    <h1>INTERROGER SON MINDSET</h1>
                    <p className="separator padding">
                        Parfois sur ce <b>chemin</b>, on pense n’avoir besoin de
                        personne. On se sent fort physiquement, mentalement,
                        émotionnellement jusqu’au moment où un des 6 éléments se
                        met à vaciller{" "}
                        <b>remettant en question notre pourquoi</b>.<br />
                        Là, on commence à <b>quitter</b> doucement{" "}
                        <b>ce chemin</b>.<br />
                        Le questionnement s’invite dans notre tête laissant
                        entrer le doute et un changement de son état d’esprit{" "}
                        <b>qu'on pensait inébranlable</b>.<br />
                        Il est temps de demander son chemin autour de soi et de
                        se faire accompagner.
                    </p>
                </TextImage>
            </Section>
        </>
    );
}

/*
<Route path="ultra-trail" />
<Route path="temoignages" />
<Route path="capital-sante" />
<Route path="dynamique-collective" />
*/

export default Aventures;
