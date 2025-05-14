import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";
import TextImage from "../components/layouts/TextImage";
import Action from "../components/layouts/Action";
import { Link } from "react-router-dom";
import FadeIn from "../components/animations/FadeIn";
import Medias from "../assets/images/MediasSVG";

function Aventures() {
    return (
        <>
            <Helmet>
                <title>Mon chemin</title>
                <meta
                    name="description"
                    content="Page des projets ultra ordinaires de Julien Coindet sur son site web ultraordinaire.fr"
                />
                <link rel="canonical" href="/mon-chemin" />
            </Helmet>
            <Section color="main-3" end>
                <div className="center padding">
                    <h1 className="XXL padding">Mon chemin</h1>
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
                        me motiver ? Pourquoi, pourquoi, pourquoi…
                        <br />
                        <br />
                        L’<b>ultra-trail</b> n’est pas une solution miracle,
                        mais il nous plonge dans une{" "}
                        <b>réflexion introspective constante</b>, en interaction
                        avec notre environnement, pour atteindre un objectif
                        fixé. Intriguant, non ? Et si en entreprise, le
                        processus était le même ?
                        <br />
                        <br />
                        Imaginez toutes les <b>pistes de réflexion</b> que nous
                        pourrions explorer ensemble en établissant des
                        parallèles entre ces deux mondes. Ce qui importe, ce
                        n’est pas tant la réponse en elle-même, mais{" "}
                        <b>le chemin pour y parvenir</b>.
                        <br />
                        <br />
                        <Link to="diag23" className="link visible">
                            La Diagonale des CHU (CHU Dijon –CHU La Réunion)
                        </Link>
                    </p>
                </TextImage>
            </Section>
            <Section>
                <FadeIn className="cols">
                    <div>
                        <h1 className="complementary">TÉMOIGNAGES</h1>
                        <p className="separator padding">
                            <b>Inspirant et motivant</b> dans un esprit de{" "}
                            <b>partage et d’échange</b> ! Les projets de Julien
                            reposent, entre autres, sur l’intelligence
                            collective en faveur d’une cause solidaire : la
                            collecte de fonds pour la Fondation Maladies Rares.
                        </p>
                        <div className="infos padding">
                            <a
                                href="https://www.facebook.com/reel/3537453623207227"
                                target="_blank"
                                className="video-link"
                            >
                                {Medias.facebook}
                                <h3>Projet 1 - Cham 22</h3>
                            </a>
                            <div className="info">35h - 427ème/1789</div>
                        </div>
                        <p>
                            Au Pôle Personne Âgée (<b>Cham</b>pmaillot) du CHU
                            Dijon, 200 participants se sont mobilisés dans un
                            véritable <b>esprit téléthon</b>, en participant à
                            diverses activités (rameur, vélo, parcours
                            extérieur). Pendant 35 heures, <b>jour et nuit</b>,
                            ils ont accompagné symboliquement la course de
                            Julien Coindet à l’UTMB (<b>Cham</b>onix).{" "}
                            <a
                                href="https://www.facebook.com/reel/3537453623207227"
                                target="_blank"
                                className="link"
                            >
                                Voir la vidéo
                            </a>
                        </p>
                    </div>
                    <div>
                        <div className="infos">
                            <a
                                href="https://www.youtube.com/watch?v=gk1McQvHeD8"
                                target="_blank"
                                className="video-link"
                            >
                                {Medias.youtube}
                                <h3>Projet 2 - Diag 23</h3>
                            </a>
                            <div className="info">41h45 - 393ème/2047</div>{" "}
                        </div>
                        <p>
                            La <b>Diag</b>onale des CHU (CHU Dijon – CHU La
                            Réunion) a rassemblé, sur deux jours, 300 personnes
                            autour d’un <b>esprit de partage</b> et de
                            découverte à travers des ateliers variés : tir à
                            l’arc, réalité virtuelle, tir à la carabine laser,
                            rameurs, ergocycles... Un{" "}
                            <b>Trail Urbain Solidaire</b> CHU Dijon, créé
                            spécialement pour l’événement, a permis à une
                            centaine de participants de prendre le départ
                            simultanément avec celui du Grand Raid de La Réunion
                            retransmis en direct. En parallèle, les{" "}
                            <b>cuisines du CHU</b> se sont mises aux couleurs de
                            la Réunion en adaptant les menus pour les patients
                            et résidents. Des <b>aventures sportives</b>,{" "}
                            solidaires, collectives et de cohésion !{" "}
                            <a
                                href="https://www.youtube.com/watch?v=gk1McQvHeD8"
                                target="_blank"
                                className="link"
                            >
                                Voir la vidéo
                            </a>
                        </p>
                    </div>
                </FadeIn>
            </Section>
            <Section color="main-2" start>
                <TextImage
                    source="chemin.jpg"
                    alt="Le chemin, le processus"
                    proportion={20}
                >
                    <blockquote>
                        <h3 className="padding">Le chemin, le processus</h3>
                        <p>
                            Tout projet débute par une idée un peu floue animée
                            par une volonté d’entreprendre et de convaincre. On
                            se lance alors sur un chemin mais, parfois, on
                            s’égare. On s'arrête, on consulte la carte, on
                            demande conseil. Une fois le chemin trouvé, on
                            repart avec plus de vigilance et d’attention,
                            déterminé à ne plus perdre de vue l’objectif.
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
                <TextImage
                    source="8a3a2c9f.jpg"
                    alt="Paysage montagneux"
                    reverse
                >
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

export default Aventures;
