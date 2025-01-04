import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";
import List from "../components/ui/List";
import SocialsMedias from "../assets/images/SocialsMedias";
import "../assets/css/Action.scss";

function About() {
    return (
        <>
            <Helmet>
                <title>À Propos</title>
                <meta
                    name="description"
                    content="Page d'accueil de Julien Coindet de son site web ultraordinaire.fr"
                />
                <link rel="canonical" href="" />
            </Helmet>
            <Section color="main-3" end>
                <div className="center padding">
                    <h1 className="XXL padding">À Propos</h1>
                    <p className="padding">
                        Ultraordinaire est le site de Julien Coindet, et a été
                        réalisé par{" "}
                        <a
                            href="https://mat06mat.github.io/MAT06mat"
                            target="_blank"
                        >
                            MAT06mat
                        </a>
                        .
                    </p>
                </div>
            </Section>
            <Section color="main-2" noPadding>
                <h1 className="complementary">Sources et Infos</h1>
                <div className="cols no-align">
                    <List
                        title="Podcasts :"
                        items={[
                            <a
                                href="https://youtube.com/@danslateteduncoureur?si=Eb9kxNFBNjon61Y9"
                                target="_blank"
                            >
                                Dans la tête d’un coureur
                            </a>,
                            <a
                                href="https://youtube.com/playlist?list=PLpBiTQ0HpFBdz5soA5TndcxvU9v0_k0M9&si=tAwzereimIBkX3ie"
                                target="_blank"
                            >
                                La bande à Distance +
                            </a>,
                            <a
                                href="https://youtube.com/@courseepique?si=SQ-Ns4adIu6o0yIC"
                                target="_blank"
                            >
                                Course épique
                            </a>,
                            <a
                                href="https://open.spotify.com/show/3KsNbDdbkrtqH7USQOhT8t?si=ddQo75lpSjeUDuTNfYN7gA"
                                target="_blank"
                            >
                                Dans mon bain de Mathieu Blanchard sur spotify
                            </a>,
                            <a
                                href="https://youtube.com/playlist?list=PLPISp8WxBuwUcpCRyGTmQKUEoU7A_2W8Q&si=ATVLpooWmJuawbys"
                                target="_blank"
                            >
                                Secret d’endurance Eric Lacroix et Hugo Ferrari
                            </a>,
                        ]}
                    />
                    <List
                        title="Chaînes Youtube :"
                        items={[
                            <a
                                href="https://youtube.com/@mikehornexplorer?si=srLa1F6c89zxVJAc"
                                target="_blank"
                            >
                                Mike Horne
                            </a>,
                            <a
                                href="https://youtube.com/channel/UCC6dDz3eOnTbqVDHW_Qd0Fg?si=OnJb3q1nUGcNzD7Z"
                                target="_blank"
                            >
                                François d’haene
                            </a>,
                            <a
                                href="https://youtube.com/@kilianjornet?si=K3yiiCfFWESexIh5"
                                target="_blank"
                            >
                                Kilian Jornet
                            </a>,
                            <a
                                href="https://youtube.com/@mathieu_blanchard?si=IsyokF5kw3R6ET40"
                                target="_blank"
                            >
                                Mathieu Blanchard
                            </a>,
                            <a
                                href="https://youtu.be/NEg_p1Lw2l4?si=BLftpZ1FUT_Syv2b"
                                target="_blank"
                            >
                                Courtney Dauwalter
                            </a>,
                            <a
                                href="https://youtu.be/NvsySSlx0HQ?si=V-KRFQWwGtJqGvgR"
                                target="_blank"
                            >
                                Sissi Cussot
                            </a>,
                        ]}
                    />
                    <List
                        title="Livres & articles :"
                        items={[
                            <>Kilian jornet</>,
                            <>Mathieu Blanchard</>,
                            <>La préparation physique</>,
                            <>Eric Lacroix</>,
                            <>La clinique du coureur</>,
                            <>Le Grand Raid de Eric Lacroix</>,
                            <>Moins courir Mieux courir</>,
                        ]}
                    />
                </div>
            </Section>
            <Section color="secondary">
                <div className="cols action">
                    <div>
                        <h2>SUIVRE MES AVENTURES</h2>
                        <h1>
                            Les <span className="complementary">réseaux</span>{" "}
                            sociaux de Julien
                        </h1>
                        <SocialsMedias className="cols padding" />
                    </div>
                    <div>
                        <img src="/images/mobile.svg" alt="" />
                        <h3 className="center">Vous êtes sur le bon chemin</h3>
                        <button className="margin">
                            Contactez moi maintenant
                        </button>
                    </div>
                </div>
            </Section>
            <Section>
                <h1>Partenariats Réseau Entreprise</h1>
                <div className="image-list"></div>
                <h1>Partenariats Sportif Annuel</h1>
                <div className="image-list"></div>
                <h1>Partenariats Aventures CHAM22 & DIAG23</h1>
                <div className="image-list"></div>
                <h1>Partenariats Financiers</h1>
                <div className="image-list"></div>
            </Section>
        </>
    );
}

export default About;
