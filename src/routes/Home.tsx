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
                        Julien Coindet vous invite à explorer le chemin de son
                        univers.
                        <br />
                        Ultra-traileur aguerri, il a initié deux projets
                        sportifs solidaires et interprofessionnels en soutien à
                        la Fondation Maladies Rares. Le premier, au sein du pôle
                        personnes âgées du CHU de Dijon, l’a conduit à
                        participer à l’UTMB (Ultra-Trail du Mont-Blanc). Le
                        second a relié symboliquement deux CHU distants de
                        milliers de kilomètres, Dijon et La Réunion, à travers
                        le Grand Raid de La Réunion, aussi appelé “la Diagonale
                        des Fous”.
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
                        établissant des parallèles entre l’ultra-trail et le
                        monde de l’entreprise.
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
                        En 2021, il décide de combiner sa passion pour
                        l’ultra-endurance avec son environnement
                        socio-professionnel en mettant l’accent sur deux axes :
                        le sport au service de la santé et la santé par le
                        sport.
                    </p>
                    <TextDropList
                        list={[
                            {
                                title: "PROACTIF, GAGNANT - GAGNANT",
                                content: (
                                    <p>
                                        Lorsqu’une idée émerge, elle se heurte
                                        souvent à des obstacles : des pensées
                                        limitantes, parfois dévalorisantes, ou
                                        encore un environnement
                                        socioprofessionnel sceptique et freiné
                                        par le système.
                                        <br />
                                        Être proactif implique un engagement
                                        fort et un travail basé sur de
                                        nombreuses inconnues. Cette démarche
                                        repose sur une conviction profonde quant
                                        à la pertinence de l’idée et du projet.
                                        <br />
                                        Pour transformer une simple idée en un
                                        projet collectif, il est essentiel de
                                        créer des espaces de rencontre où chaque
                                        acteur y trouve un bénéfice, même si
                                        leurs intérêts diffèrent. La motivation
                                        de chacun alimente alors une dynamique
                                        collective, facteur clé de la réussite.
                                    </p>
                                ),
                            },
                            {
                                title: "JULIEN COINDET, PASSIONNÉ ET ENTRAÎNANT",
                                content: (
                                    <p>
                                        Depuis mon plus jeune âge, le sport,
                                        qu’il soit individuel ou collectif, en
                                        intérieur ou en extérieur, a toujours
                                        été au cœur de ma vie. Ces multiples
                                        expériences, tant sur le plan moteur que
                                        social, ont façonné le sportif, le
                                        professionnel et l’homme que je suis
                                        aujourd’hui. Mon parcours, à la fois
                                        ordinaire et accompli, s’inscrit dans
                                        une quête constante d’amélioration,
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
                                        capacité à rassembler des énergies
                                        positives et des compétences est un
                                        véritable défi, mais aussi un atout
                                        essentiel pour bâtir un projet
                                        collectif. Il s’agit avant tout de
                                        donner du sens à son action et
                                        d’insuffler une dynamique commune.
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
                        J’y ai rencontré une personne « ultraordianaire »,
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
                        Ce site est le reflet d’un parcours de vie unique,
                        façonné par des expériences intenses et marquantes :
                        <ul className="list list-gap">
                            <li>
                                Celui d’un enfant débordant d’énergie, passionné
                                de sport, mais confronté aux défis de la gestion
                                du stress et des émotions (certaines raquettes
                                de tennis en portent encore les traces).
                            </li>
                            <li>
                                Celui d’une mère bienveillante et d’un père
                                inspirant, dont la passion pour la nature et la
                                montagne, héritée de son passé d’alpiniste, a
                                laissé une empreinte profonde.
                            </li>
                            <li>
                                Celui d’un adolescent en quête perpétuelle
                                d’expériences sportives, malgré une croissance
                                qui l’éloignait des standards de son âge.
                            </li>
                            <li>
                                Celui d’un homme poursuivant la performance pour
                                exploiter pleinement ses capacités, apprenant
                                peu à peu à transformer le stress en un moteur
                                essentiel à la réussite.
                            </li>
                            <li>
                                Celui d’un homme pour qui les relations humaines
                                sincères et profondes prennent une place
                                centrale.
                            </li>
                            <li>
                                Celui d’un père de deux merveilleuses
                                princesses, dont l’énergie s’est démultipliée
                                pour déplacer des montagnes, soutenu par leur
                                maman.
                            </li>
                        </ul>
                        Ce site est la synthèse d’un chemin de vie singulier, où
                        chacun oscille entre joie et douleur, marqué par la
                        perte, la séparation et les blessures. Des épreuves qui
                        nous confrontent à un choix : sombrer dans la
                        victimisation ou embrasser la résilience.
                    </p>
                </TextImage>
            </Section>
        </>
    );
}

export default Home;
