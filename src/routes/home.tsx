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
                        été financé par des partenaires privées pour les
                        recherches fondation maladies rares !
                        <br />
                        La notion de <b>sport santé</b> est une base commune aux
                        3 sentiers développés sur ce site : aventures, réseau,
                        associations. <br />
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
                                        depuis les plus jeunes âges. Toutes ces
                                        expériences motrices et sociales ont
                                        participé à la construction du sportif,
                                        du professionnel et de l’homme que je
                                        suis aujourd’hui : un parcours de vie
                                        ordinaire sans expérience du haut niveau
                                        ou de l'élitisme mais en essayant d'être
                                        la meilleure version de moi même sur
                                        chaque nouvelle expérience initiée.
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
                                        collective de son projet : donner du
                                        sens à son projet action.
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
                            initiées. <br /> Le sport et Vous ça fait deux ?
                            Peut être mais votre santé et vous ne font qu'un !{" "}
                            <br /> Vous avez besoin d’une collaboration ultra
                            ordinaire ? Vous êtes sur le bon sentier.
                        </p>
                    </div>
                    <div style={{ width: "30%" }}>
                        <svg
                            fill="#000000"
                            height="800px"
                            width="800px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 275.072 275.072"
                            xmlSpace="preserve"
                        >
                            <g>
                                <path
                                    d="M195.69,0H79.379c-9.884,0-17.926,8.05-17.926,17.945v239.192c0,9.89,8.042,17.935,17.926,17.935h116.31
		c9.886,0,17.929-8.045,17.929-17.935V17.945C213.619,8.05,205.576,0,195.69,0z M76.454,61.934l122.165,0.003v133.423H76.454V61.934
		z M79.379,15h116.31c1.615,0,2.929,1.321,2.929,2.945v28.991L76.454,46.934V17.945C76.454,16.321,77.766,15,79.379,15z
		 M195.69,260.072H79.379c-1.586,0-2.926-1.344-2.926-2.935v-46.778h122.165v46.778C198.619,258.755,197.305,260.072,195.69,260.072
		z"
                                />
                                <path
                                    d="M137.536,217.458c-9.784,0-17.744,7.966-17.744,17.758c0,9.778,7.96,17.733,17.744,17.733
		c9.785,0,17.745-7.955,17.745-17.733C155.281,225.424,147.32,217.458,137.536,217.458z M137.536,242.949
		c-4.299,0-7.744-3.457-7.744-7.733c0-4.28,3.445-7.758,7.744-7.758c4.29,0,7.745,3.479,7.745,7.758
		C145.281,239.492,141.826,242.949,137.536,242.949z"
                                />
                                <path
                                    d="M122.45,35.967h30.174c2.761,0,5-2.239,5-5c0-2.761-2.239-5-5-5H122.45c-2.761,0-5,2.239-5,5
		C117.45,33.728,119.688,35.967,122.45,35.967z"
                                />
                            </g>
                        </svg>
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
