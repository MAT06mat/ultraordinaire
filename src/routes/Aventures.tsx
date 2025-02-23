import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";
import TextImage from "../components/layouts/TextImage";
import Action from "../components/layouts/Action";
import { Link } from "react-router-dom";
import PlayButton from "../assets/images/PlayButton";
import FadeIn from "../components/animations/FadeIn";

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
                        L’ultra-trail n’est pas une solution miracle, mais il
                        nous plonge dans une réflexion introspective constante,
                        en interaction avec notre environnement, pour atteindre
                        un objectif fixé. Intriguant, non ? Et si en entreprise,
                        le processus était le même ?<br />
                        Imaginez toutes les pistes de réflexion que nous
                        pourrions explorer ensemble en établissant des
                        parallèles entre ces deux mondes. Ce qui importe, ce
                        n’est pas tant la réponse en elle-même, mais le chemin
                        pour y parvenir.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <FadeIn className="cols">
                    <div>
                        <h1 className="complementary">TÉMOIGNAGES</h1>
                        <p className="separator padding">
                            Inspirant et motivant dans un esprit de partage et
                            d’échange ! Les projets de Julien reposent sur
                            l’intelligence collective et la force de la
                            solidarité au service d’une cause commune : la
                            collecte de fonds pour la Fondation Maladies Rares.
                            S’engager ensemble et partager un objectif commun
                            décuplent les chances de réussite.
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
                            Au centre gériatrique Champmaillot à Dijon, 200
                            personnes se sont mobilisées dans un véritable
                            esprit Téléthon, en participant à diverses activités
                            (rameur, vélo, parcours extérieur). Pendant 35
                            heures, jour et nuit, elles ont accompagné
                            symboliquement la course de Julien Coindet à l’UTMB,
                            reliant virtuellement ainsi Dijon à Chamonix, du
                            départ à l’arrivée.
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
                            La Diagonale des CHU (CHU Dijon – CHU La Réunion) a
                            rassemblé, sur deux jours, 300 personnes autour d’un
                            esprit de partage et de découverte à travers des
                            ateliers variés : tir à l’arc, réalité virtuelle,
                            tir à la carabine laser, rameurs, ergocycles, et
                            expositions réalisées par des résidents de l’île de
                            La Réunion. Lors du Trail du CHU, créé spécialement
                            pour l’événement (dont la 3ᵉ édition aura lieu en
                            2025), 100 participants ont pris le départ
                            simultanément avec celui du Grand Raid de La
                            Réunion, retransmis sur écran géant. En parallèle,
                            les cuisines du CHU ont adapté leurs menus en
                            version réunionnaise, permettant aux résidents du
                            centre gériatrique Champmaillot et aux visiteurs de
                            la cafétéria du CHU Dijon de vivre cette immersion,
                            touchant ainsi des centaines de personnes au cours
                            de ces deux journées.
                        </p>
                    </div>
                </FadeIn>
            </Section>
            <Section color="main-2" start>
                <TextImage source="chemin.jpg" alt="Le chemin" proportion={20}>
                    <blockquote>
                        <h3 className="padding">Le chemin, le processus</h3>
                        <p>
                            Tout projet débute souvent par une page blanche, sur
                            laquelle une idée prend forme, tracée à l’encre de
                            la volonté d’entreprendre. On se lance sur un
                            chemin, mais il arrive de s’égarer. Alors, on
                            s’arrête, on réévalue la direction à suivre, on
                            consulte la carte, et parfois, on sollicite les
                            conseils de ceux qui nous entourent. Une fois
                            l’itinéraire retrouvé, on repart avec plus de
                            vigilance et d’attention, déterminé à ne plus perdre
                            de vue l’objectif.
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
                        Nous sommes tous uniques et entourés d’une multitude
                        d’informations sur le corps, l’esprit, les témoignages,
                        la recherche et l’expérience. Autant de ressources
                        précieuses pour bâtir et optimiser notre capital santé.
                        <br />
                        <br />
                        Pourtant, il est souvent difficile de rester sur le bon
                        chemin, de pratiquer une activité sportive tout en
                        préservant sa santé, sans se perdre en route. Trouver
                        l’équilibre est un défi permanent, un ajustement
                        constant entre six ressources essentielles, toutes
                        interdépendantes et en perpétuelle évolution :
                    </p>
                    <ul className="list">
                        <li>Entraînement physique & mental</li>
                        <li>Nutrition & hydratation</li>
                        <li>Expérience</li>
                        <li>Famille</li>
                        <li>Travail</li>
                        <li>Vie sociale</li>
                    </ul>
                </TextImage>
            </Section>
            <Section>
                <TextImage source="16d71a61.jpg" alt="Nuit étoilé">
                    <h1>INTERROGER SON MINDSET</h1>
                    <p className="separator padding">
                        Sur ce chemin, on peut croire n’avoir besoin de
                        personne. On se sent fort, physiquement, mentalement et
                        émotionnellement… jusqu’au jour où l’une de ces six
                        ressources vacille, ébranlant notre pourquoi.
                        <br />
                        C’est à ce moment que l’on commence, sans même s’en
                        rendre compte, à s’éloigner du chemin. Le doute
                        s’installe, le questionnement devient omniprésent et
                        notre état d’esprit, que l’on croyait inébranlable, se
                        transforme.
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
