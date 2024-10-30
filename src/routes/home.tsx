import { Helmet } from "react-helmet-async";
import Section from "../components/Section";
import TextDropList from "../components/TextDropList";
import TextImage from "../components/TextImage";

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
            <Section background="panorama.webp" noContainer>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Section>
            <Section color="main-2">
                <TextImage source="766f77b3.jpg" reverse>
                    <h2>
                        PASSIONNÉ D’ULTRA TRAIL, ENSEIGNANT APA, FONDATEUR
                        ASSOCIATION CPHD
                    </h2>
                    <h1 className="separator padding">
                        BIENVENUE SUR LES SENTIERS AVEC JULIEN COINDET
                    </h1>
                    <p>
                        Une vie en mouvement ultra ordinaire !<br />
                        <b>Julien Coindet</b> vous invite à le suivre sur les
                        sentiers de ses aventures sportives, solidaires et de
                        cohésion interprofessionnelle.{" "}
                        <b>Ultra traileur confirmé</b>, il a réussi à mobiliser
                        avec lui plusieurs CHU en embarquant ses collègues, les
                        résidents, les patients et leurs familles sur 2 courses
                        d'ultra distance <b>mondialement connues</b> pour être
                        les plus difficiles au monde : <b>UTMB</b> et{" "}
                        <b>le grand raid de la réunion</b> (la Diagonale des
                        Fous). <br /> À chaque course, un dossard solidaire a
                        été financé par des partenaires en faveur de la
                        Fondation Maladies Rares!
                        <br />
                        La notion de <b>sport santé</b> est une base commune aux
                        3 sentiers développés sur ce site : aventures, réseau,
                        association. <br />
                        Ce <b>professionnel hospitalier</b>, diplômé en activité
                        physique adaptée et aux multiples casquettes
                        professionnelles (enseignant/coordinateur APA,
                        formateur, auto-entrepreneur) est à votre écoute pour{" "}
                        <b>vous accompagner</b> sur ces 3 sentiers.
                    </p>
                </TextImage>
            </Section>
            <Section>
                <TextImage source="3782cdfc.jpg">
                    <h2>JULIEN COINDET</h2>
                    <h1 className="separator padding">
                        Portrait d’un professionnel de santé actif passionné
                    </h1>
                    <p>
                        En 2021, il décide d’associer{" "}
                        <b>sa passion de l’ultra endurance</b> avec son
                        environnement socioprofessionnel autour de 2 grands
                        domaines de vie aux déclinaisons diverses :{" "}
                        <b>sport en santé</b> et <b>santé par le sport</b>.
                    </p>
                    <TextDropList
                        list={[
                            {
                                title: "PROACTIF, GAGNANT - GAGNANT",
                                content: (
                                    <p>
                                        Au démarrage d’une idée, on va être
                                        confronté au « c'est compliqué » soit
                                        par ses propres pensées limitantes,
                                        parfois dévalorisantes ou par un
                                        environnement socioprofessionnel
                                        septique. Une des solutions pour
                                        basculer d'une idée à l'état de projet
                                        viable est de trouver des espaces
                                        communs « gagnant - gagnant » entre les
                                        acteurs de ce projet avec des niveaux
                                        d'intérêt différents.`,
                                    </p>
                                ),
                            },
                            {
                                title: "JULIEN COINDET, PASSIONNÉ ET ENTRAÎNANT",
                                content: (
                                    <p>
                                        La passion du sport individuel-collectif
                                        et indoor-outdoor a rythmé ma vie,
                                        depuis le plus jeune âge. Toutes ces
                                        expériences motrices et sociales ont
                                        participé à la construction du sportif,
                                        du professionnel et de l’homme que je
                                        suis aujourd’hui : un parcours sportif
                                        ordinaire en dehors de l’élitisme mais
                                        en essayant d'être la meilleure version
                                        de moi même sur chaque nouvelle
                                        expérience initiée.
                                    </p>
                                ),
                            },
                            {
                                title: "FÉDÉRER ÉNERGIES & COMPÉTENCES",
                                content: (
                                    <p>
                                        Quelque soit son métier et son statut,
                                        développer sa capacité à fédérer des
                                        énergies positives et compétentes est un
                                        véritable atout dans la construction
                                        collective du projet : donner du sens à
                                        son action.
                                    </p>
                                ),
                            },
                        ]}
                    />
                </TextImage>
            </Section>
            <Section color="main-2">
                <div className="cols">
                    <div style={{ width: "50%" }}>
                        <blockquote>
                            Tout seul je vais vite <br />
                            Ensemble on va loin <br />
                            L’esprit d’équipe <br />
                            Comme un besoin
                        </blockquote>
                    </div>
                    <div style={{ width: "50%" }}>
                        <p>Cette citation de Grand Corps Malade ...</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione deleniti aspernatur perspiciatis ex
                            quaerat, iste sequi aut, possimus rerum consectetur
                            veniam incidunt!
                        </p>
                    </div>
                </div>
            </Section>
            <Section color="secondary">
                <div className="cols action">
                    <div style={{ width: "70%" }}>
                        <h2>
                            PRÉSENTATION DES COLLABORATIONS AVEC JULIEN COINDET
                        </h2>
                        <h1>
                            Voici{" "}
                            <span className="complementary">les offres</span> de
                            Julien
                        </h1>
                        <p>
                            Quelque soit vos besoins, entreprise, établissement
                            public et privé, association ou fondation,
                            indépendant, particulier vous trouverez, peut être,
                            dans mes 3 sentiers un levier de discussion qui fait
                            sens pour vos équipes ou pour vous même. <br />
                            Mes différentes casquettes m'offrent l’opportunité
                            de rencontrer de nombreux professionnels dans des
                            domaines d’activités variées et un ensemble de
                            réseaux indispensables à la réussite des actions
                            initiées. <br /> Le sport et vous ça fait deux ?
                            Peut être, mais votre santé et vous ne font qu'un !{" "}
                            <br /> Vous avez besoin d’une collaboration ultra
                            ordinaire ? Vous êtes sur le bon sentier.
                        </p>
                    </div>
                    <div style={{ width: "30%" }}>
                        <img src="/images/mobile.svg" alt="" />
                        <h3>Contactez moi pour votre projet !</h3>
                        <button>Contactez moi maintenant</button>
                    </div>
                </div>
            </Section>
            <Section color="main-2">
                <div className="cols center">
                    <div>
                        <h1>
                            Texte <span className="complementary">1</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                    <div>
                        <h1>
                            Texte <span className="complementary">2</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                    <div>
                        <h1>
                            Texte <span className="complementary">3</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio temporibus, dolorum quis molestiae
                            sequi, numquam quia accusantium magnam
                            necessitatibus sit tempore odio ipsam iste dolores,
                            veritatis accusamus esse aliquam porro ea ex
                            debitis. Consectetur, aperiam doloribus! Obcaecati
                            consequuntur, sapiente veniam nemo repellat in
                            provident, repellendus molestiae minima accusantium
                            harum atque.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <h1 className="center">FAQ</h1>
                <p className="text-cols">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit explicabo, suscipit ut dolores aperiam
                    ducimus. Porro pariatur provident ipsam voluptates
                    temporibus! Numquam laboriosam veritatis repellendus laborum
                    officiis error qui cupiditate aperiam ea voluptatum
                    assumenda magnam eaque veniam, eum dolore quia quisquam unde
                    nobis, nisi voluptatibus alias. Repudiandae adipisci ducimus
                    esse deleniti perspiciatis quaerat voluptatibus. Recusandae
                    porro quia dolores, nobis tempore nisi veniam maiores cum
                    corporis. At, non vel sunt enim velit ratione! Maxime
                    quaerat, fugit quia et suscipit sunt animi nesciunt eum est
                    corporis quis ipsam repellat unde at expedita aliquam minima
                    tempora facere excepturi pariatur? Corporis quae quas quis
                    sapiente aut distinctio fugiat culpa quaerat, sunt dolorem
                    eaque iusto commodi ducimus possimus, velit aliquam quam
                    sint odio iste molestiae obcaecati nostrum totam. Facilis
                    quasi rem nobis? Aspernatur soluta accusantium magnam
                    corrupti minima, eos hic, a harum repellat placeat itaque
                    nesciunt totam ea alias cupiditate facilis! Consequuntur
                    fuga illum ad eaque exercitationem distinctio vero labore
                    maiores laboriosam nam ullam dolorum facere repellat, non
                    dolorem inventore delectus at cumque reiciendis, sequi quod
                    necessitatibus earum quidem accusantium? Odit facilis
                    molestias, itaque eum sed libero quaerat nulla, soluta
                    debitis eveniet cupiditate porro alias placeat. Est,
                    expedita dicta excepturi sed eum magnam consequatur iste?
                </p>
            </Section>
        </>
    );
}

export default Home;
