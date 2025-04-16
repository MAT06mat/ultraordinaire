import { Helmet } from "react-helmet-async";
import Section from "../components.v2/layouts/Section";
import TextImage from "../components.v2/layouts/TextImage";
import FadeIn from "../components.v2/animations/FadeIn";
import AvisList from "../components.v2/ui/Avis";
import Action from "../components/layouts/Action";
import Counter from "../components.v2/animations/Counter";

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
                    <h1 className="separator padding">Une vie en mouvement</h1>
                    <p>
                        Plongez dans une ambiance où la passion de l’ultra trail
                        et le milieu professionnel se rencontrent. A travers ce
                        chemin, Julien Coindet vous invite à faire quelques pas
                        avec lui.
                        <br />
                        La rencontre entre sa passion de l’ultra-trail et son
                        domaine professionnel en Activité Physique Adaptée a
                        permis d’initier 2 grands projets sportifs solidaires et
                        de cohésion au sein du CHU Dijon en faveur de la
                        Fondation Maladies Rares autour des plus grandes courses
                        d’ultra-distance mondialement connues.
                        <br />
                        L’ UTMB (Ultra-Trail du Mont-Blanc) 171 km 10 000
                        Dénivelé +
                        <br />
                        Le Grand Raid de La Réunion “la Diagonale des Fous” 175
                        km 10 500 Dénivelé +
                        <br />
                        Un véritable élan fédérateur a vu le jour grâce à
                        l’enthousiasme des patients, des résidents, des
                        familles, du personnel hospitalier et des indispensables
                        partenaires prives.
                        <br />
                        L’envie de partager ces expériences ULTRAordinaires est
                        une suite logique !
                    </p>
                </TextImage>
            </Section>
            <Section>
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
                <TextImage
                    videoLink="24378b25.mp4"
                    alt="Vidéo de Julien, de ses trails et de ses conférences"
                >
                    <h2>Conférence</h2>
                    <h1 className="separator padding">
                        Quand un mec ordinaire rencontre l’Ultra-trail et le
                        Monde de l’Entreprise
                    </h1>
                    <p>
                        Conférence du séminaire FREE MOBILE 2025 auprès des
                        équipes de la zone Centre-Est (Radio, négociation,
                        travaux, RH)
                        <br />
                        Au CityWork - CoWorking à Lyon en février 2025,
                        <br />
                        <br />
                        Dans l’ultra-trail comme dans l’entreprise, la réussite
                        repose sur des valeurs communes: la préparation, la
                        résilience, la gestion de l’effort et l’adaptabilité.
                        <br />
                        <br />
                        Au cœur des parallèles entre ces deux univers exigeants
                        !
                        <br />
                        <br />
                        Une conférence dynamique et motivante
                    </p>
                </TextImage>
            </Section>
            <Action />
            <Section>
                <FadeIn>
                    <h1 className="center">Témoignages de nos partenaires</h1>
                    <div className="avis-list padding">{AvisList}</div>
                </FadeIn>
            </Section>
        </>
    );
}

export { Home };
