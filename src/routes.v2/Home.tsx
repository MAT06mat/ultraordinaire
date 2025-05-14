import { Helmet } from "react-helmet-async";
import Section from "../components.v2/layouts/Section";
import TextImage from "../components.v2/layouts/TextImage";
import FadeIn from "../components.v2/animations/FadeIn";
import AvisList from "../components.v2/ui/Avis";
import Action from "../components.v2/layouts/Action";
import Counter from "../components.v2/animations/Counter";
import Space from "../components.v2/ui/Space";

function Home() {
    return (
        <>
            <Helmet>
                <title>Accueil</title>
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
                        Un mec ULTRAordinaire
                    </blockquote>
                </div>
            </Section>
            <Section color="main-2" end>
                <TextImage source="766f77b3.jpg" reverse>
                    <h2>
                        PASSIONNÉ D’ULTRA TRAIL, PROFESSIONNEL DANS LE SECTEUR
                        DU HANDICAP ET DE LA DÉPENDANCE
                    </h2>
                    <h1 className="separator padding">
                        Une vie en{" "}
                        <span className="complementary">mouvement</span>
                    </h1>
                    <p>
                        Plongez dans une ambiance où la <b>passion</b> de
                        l’ultra trail et le <b>milieu professionnel</b> se
                        rencontrent. À travers ce chemin, Julien Coindet vous
                        invite à faire quelques pas avec lui.
                        <br />
                        La rencontre entre sa passion de l’ultra-trail et son
                        domaine professionnel en{" "}
                        <b>Activité Physique Adaptée</b> a permis d’initier 2
                        grands projets <b>sportifs solidaires</b> et de cohésion
                        au sein du CHU Dijon en faveur de la Fondation Maladies
                        Rares autour des plus grandes courses d’ultra-distance
                        mondialement connues.
                        <br />
                        L’<b>UTMB</b> (Ultra-Trail du Mont-Blanc) 171 km 10 000
                        Dénivelé
                        <br />
                        Le <b>Grand Raid de La Réunion</b> “la Diagonale des
                        Fous” 175 km 10 500 Dénivelé
                        <br />
                        Un véritable élan fédérateur a vu le jour grâce à
                        l’enthousiasme des patients, des résidents, des
                        familles, du personnel hospitalier et des{" "}
                        <b>partenaires privés</b>.
                        <br />
                        L’envie de partager ces expériences{" "}
                        <b>ULTRAordinaires</b> est une suite logique !
                    </p>
                </TextImage>
            </Section>
            <Section noPadding>
                <div className="counter-container">
                    <Counter target={8}>
                        courses 100K
                        <br />
                        (km)
                    </Counter>
                    <Counter className="bottom" target={5}>
                        courses 100M
                        <br />
                        (miles)
                    </Counter>
                    <Counter target={1083}>km parcouru</Counter>
                    <Counter className="bottom" target={80} extraText="+">
                        spectateurs
                        <br />
                        en conférence
                    </Counter>
                </div>
            </Section>
            <Section color="main-2" start>
                <TextImage videoLink="3af2e85a.mp4">
                    <h2>
                        QUAND UN MEC ORDINAIRE RENCONTRE L'ULTRA-TRAIL ET LE
                        MONDE DE L'ENTREPRISE
                    </h2>
                    <h1 className="separator padding">
                        Conférence{" "}
                        <span className="complementary">FREE Mobile</span> 2025
                    </h1>
                    <p>
                        Conférence du séminaire <b>FREE MOBILE 2025</b> auprès
                        des équipes de la zone Centre-Est (Radio, négociation,
                        travaux, RH)
                        <br />
                        Au <b>CityWork - CoWorking</b> à Lyon en février 2025,
                        <br />
                        <br />
                        Dans l’ultra-trail comme dans l’entreprise, la réussite
                        repose sur des <b>valeurs communes</b> : la préparation,
                        la résilience, la gestion de l’effort et l’adaptabilité.
                        <br />
                        Au cœur des <b>parallèles</b> entre ces deux univers
                        exigeants !
                        <br />
                        <br />
                        Une conférence <b>dynamique et motivante</b>
                    </p>
                </TextImage>
            </Section>
            <Action />
            <Section>
                <FadeIn>
                    <h1 className="center">Témoignages de nos partenaires</h1>
                </FadeIn>
                <Space value="3em" />
                <div className="avis-list">{AvisList}</div>
            </Section>
        </>
    );
}

export { Home };
