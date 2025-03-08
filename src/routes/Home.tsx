import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";
import TextDropList from "../components/ui/TextDropList";
import TextImage from "../components/layouts/TextImage";
import Action from "../components/layouts/Action";
import LinkImage from "../components/ui/LinkImage";
import FadeIn from "../components/animations/FadeIn";

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
            <Section background="panorama.webp" noContainer color="secondary">
                <div className="section-title">
                    <h1 className="center">
                        Bienvenue sur les sentiers de Julien Coindet
                    </h1>
                    <blockquote className="center">
                        Tout seul je vais vite, Ensemble on va loin <br />
                        L’esprit d’équipe, Comme un besoin
                    </blockquote>
                </div>
            </Section>
            <Section color="main-2" end>
                <TextImage source="766f77b3.jpg" reverse>
                    <h2>
                        PASSIONNÉ D’ULTRA TRAIL, PROFESSIONNEL SPORT SANTÉ,
                        FONDATEUR ASSOCIATION CPHD
                    </h2>
                    <h1 className="separator padding">
                        Une vie en mouvement ultra ordinaire
                    </h1>
                    <p>
                        <b>Julien Coindet</b> vous invite à explorer les
                        sentiers de son univers.
                        <br />
                        <b>Ultra-traileur aguerri</b>, il a initié deux projets
                        sportifs solidaires et interprofessionnels en soutien à
                        la <b>Fondation Maladies Rares</b>. Le premier, au sein
                        du pôle personnes âgées du CHU de Dijon, l’a conduit à
                        participer à l’<b>UTMB (Ultra-Trail du Mont-Blanc)</b>.
                        Le second a relié symboliquement deux CHU distants de
                        milliers de kilomètres, Dijon et La Réunion, à travers
                        le <b>Grand Raid de La Réunion</b>, aussi appelé “la
                        Diagonale des Fous”.
                        <br />
                        Porté par l’enthousiasme de ses collègues, des
                        résidents, des familles, du personnel hospitalier et de
                        précieux partenaires, un véritable élan fédérateur a vu
                        le jour.
                        <br />
                        Professionnel en Activité Physique Adaptée dans le
                        secteur du handicap et du vieillissement depuis plus de
                        15 ans, Julien se lance aujourd’hui dans
                        l’auto-entrepreneuriat. Il propose de partager son
                        expérience à travers des témoignages et conférences,
                        établissant des parallèles entre l’
                        <b>ultra-trail et le monde de l’entreprise</b>.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <TextImage source="3782cdfc.jpg">
                    <h2>JULIEN COINDET</h2>
                    <h1 className="separator padding">
                        Portrait d’un{" "}
                        <span className="complementary">professionnel</span> de
                        santé actif et passionné
                    </h1>
                    <p>
                        En <b>2021</b>, il décide de combiner sa passion pour l’
                        <b>ultra-endurance</b> avec son environnement
                        socio-professionnel en mettant l’accent sur deux axes :{" "}
                        <b>le sport au service de la santé</b> et{" "}
                        <b>la santé par le sport</b>.
                    </p>

                    <TextDropList
                        list={[
                            {
                                title: "PROACTIF, GAGNANT - GAGNANT",
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
            <Action />
            <Section color="main-2" end>
                <FadeIn>
                    <h1 className="center">Avis</h1>
                    <div className="profile-image">
                        <LinkImage
                            href="https://www.mgen.fr/"
                            src="partenariats/84cdc362.png"
                        />
                        <h3 className="padding">
                            Responsable Relations Santé Social
                        </h3>
                    </div>
                    <p className="padding separator">
                        Ravi d’avoir collaboré avec Julien Coindet sur « la
                        diagonale des CHU » pour l’Ultra-trail de la diagonale
                        des fous à la Réunion.
                        <br />
                        J’y ai rencontré une personne « ultraordinaire »,
                        dynamique et pleine d’ambition au service des projets
                        qu’il mène.
                        <br />
                        Une force de persévérance, de dépassement de soi et un
                        engagement permanent pour des projets fédérateurs
                        porteurs de valeurs fortes qui font sens.
                        <br />
                        John Boardman
                    </p>
                </FadeIn>
            </Section>
            <Section>
                <TextImage source="e9ae3025.jpg" proportion={40} reverse>
                    <h1>Une vie singulière</h1>
                    <p className="padding separator">
                        Ce site est le reflet d’un <b>parcours de vie unique</b>
                        , façonné par des{" "}
                        <b>expériences intenses et marquantes</b> :
                        <ul className="list list-gap">
                            <li>
                                Celui d’un <b>enfant débordant d’énergie</b>,
                                passionné de sport, mais confronté aux défis de
                                la gestion du stress et des émotions (certaines
                                raquettes de tennis en portent encore les
                                traces).
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
                                    adolescent en quête perpétuelle
                                    d’expériences sportives
                                </b>
                                , malgré une croissance qui l’éloignait des
                                standards de son âge.
                            </li>
                            <li>
                                Celui d’un{" "}
                                <b>homme poursuivant la performance</b> pour
                                exploiter pleinement ses capacités, apprenant
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
                                <b>père de deux merveilleuses princesses</b>,
                                dont l’énergie s’est démultipliée pour déplacer
                                des montagnes, soutenu par leur maman.
                            </li>
                        </ul>
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

export default Home;
