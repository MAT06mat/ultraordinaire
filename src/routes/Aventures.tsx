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
                        <span className="complementary">L’ULTRA-TRAIL</span> ET
                        LE MONDE DE{" "}
                        <span className="complementary">L’ENTREPRISE</span>
                    </h1>
                    <p>
                        On s'interroge tous les jours sur ce fameux{" "}
                        <b>pourquoi</b>. Pourquoi souffrir pour une course ?
                        Pourquoi faire ce métier ? Pourquoi je n'arrive plus à
                        me motiver ? <b>Pourquoi, pourquoi, pourquoi…</b>
                        <br />
                        L’<b>ultra-trail</b> n’est pas une solution miracle,
                        mais il nous plonge dans une{" "}
                        <b>réflexion introspective constante</b>, en interaction
                        avec notre environnement, pour atteindre un objectif
                        fixé. Intriguant, non ? Et si en entreprise, le
                        processus était le même ?
                        <br />
                        Imaginez toutes les <b>pistes de réflexion</b> que nous
                        pourrions explorer ensemble en établissant des
                        parallèles entre ces deux mondes. Ce qui importe, ce
                        n’est pas tant la réponse en elle-même, mais{" "}
                        <b>le chemin pour y parvenir</b>.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <FadeIn className="cols">
                    <div>
                        <h1 className="complementary">TÉMOIGNAGES</h1>
                        <p className="separator padding">
                            <b>Inspirant et motivant</b> dans un esprit de
                            partage et d’échange ! Les projets de Julien
                            reposent sur <b>l’intelligence collective</b> et la{" "}
                            <b>force de la solidarité</b> au service d’une cause
                            commune : la collecte de fonds pour la{" "}
                            <b>Fondation Maladies Rares</b>. S’engager ensemble
                            et partager un objectif commun décuplent les chances
                            de réussite.
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
                            Au <b>centre gériatrique Champmaillot à Dijon</b>,{" "}
                            <b>200 personnes</b> se sont mobilisées dans un
                            véritable esprit <b>Téléthon</b>, en participant à
                            diverses activités (rameur, vélo, parcours
                            extérieur). Pendant <b>35 heures</b>, jour et nuit,
                            elles ont accompagné symboliquement la course de{" "}
                            <b>Julien Coindet à l’UTMB</b>, reliant
                            virtuellement ainsi Dijon à Chamonix, du départ à
                            l’arrivée.
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
                            La <b>Diagonale des CHU</b> (CHU Dijon – CHU La
                            Réunion) a rassemblé, sur deux jours,{" "}
                            <b>300 personnes</b> autour d’un esprit de partage
                            et de découverte à travers des ateliers variés : tir
                            à l’arc, réalité virtuelle, tir à la carabine laser,
                            rameurs, ergocycles, et expositions réalisées par
                            des résidents de l’île de La Réunion. Lors du{" "}
                            <b>Trail du CHU</b>, créé spécialement pour
                            l’événement (dont la <b>3ᵉ édition</b> aura lieu en
                            2025), <b>100 participants</b> ont pris le départ
                            simultanément avec celui du Grand Raid de La
                            Réunion, retransmis sur écran géant. En parallèle,
                            les cuisines du CHU ont adapté leurs menus en
                            version réunionnaise, permettant aux résidents du
                            centre gériatrique Champmaillot et aux visiteurs de
                            la cafétéria du CHU Dijon de vivre cette immersion,
                            touchant ainsi des <b>centaines de personnes</b> au
                            cours de ces deux journées.
                        </p>
                    </div>
                </FadeIn>
            </Section>
            <Section color="main-2" start>
                <TextImage source="chemin.jpg" alt="Le chemin" proportion={20}>
                    <blockquote>
                        <h3 className="padding">Le chemin, le processus</h3>
                        <p>
                            Tout projet débute souvent par une{" "}
                            <b>page blanche</b>, sur laquelle une idée prend
                            forme, tracée à l’encre de la volonté
                            d’entreprendre. On se lance sur un chemin, mais il
                            arrive de <b>s’égarer</b>. Alors, on s’arrête, on
                            réévalue la direction à suivre, on consulte la
                            carte, et parfois, on sollicite les conseils de ceux
                            qui nous entourent. Une fois l’
                            <b>itinéraire retrouvé</b>, on repart avec plus de
                            vigilance et d’attention, déterminé à ne plus perdre
                            de vue <b>l’objectif</b>.
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
                        d’informations sur le <b>corps</b>, l’<b>esprit</b>, les
                        témoignages, la recherche et l’expérience. Autant de
                        ressources précieuses pour bâtir et optimiser notre{" "}
                        <b>capital santé</b>.
                        <br />
                        <br />
                        Pourtant, il est souvent difficile de rester sur le bon
                        chemin, de pratiquer une activité sportive tout en
                        préservant sa santé, sans se perdre en route. Trouver l’
                        <b>équilibre</b> est un défi permanent, un ajustement
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
                        ressources vacille, ébranlant notre <b>pourquoi</b>.
                        <br />
                        C’est à ce moment que l’on commence, sans même s’en
                        rendre compte, à s’éloigner du chemin. Le doute
                        s’installe, le questionnement devient omniprésent et
                        notre <b>état d’esprit</b>, que l’on croyait
                        inébranlable, se transforme.
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
