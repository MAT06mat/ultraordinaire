import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";
import List from "../components/ui/List";
import "../assets/css/Action.scss";
import LinkImage from "../components/ui/LinkImage";
import Action from "../components/layouts/Action";
import FadeIn from "../components/animations/FadeIn";

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
                <FadeIn>
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
                                    Dans mon bain de Mathieu Blanchard sur
                                    spotify
                                </a>,
                                <a
                                    href="https://youtube.com/playlist?list=PLPISp8WxBuwUcpCRyGTmQKUEoU7A_2W8Q&si=ATVLpooWmJuawbys"
                                    target="_blank"
                                >
                                    Secret d’endurance Eric Lacroix et Hugo
                                    Ferrari
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
                </FadeIn>
            </Section>
            <Action socialsMedias />
            <Section>
                <FadeIn>
                    <h1>Partenariats Réseau Entreprise</h1>
                    <div className="image-list">
                        <LinkImage
                            href="https://www.mvvp.fr/"
                            src="partenariats/ncjclxomd.avif"
                        />
                        <LinkImage
                            href="https://sites.google.com/view/dcsport/accueil"
                            src="partenariats/2e9911da.jpg"
                        />
                        <LinkImage
                            href="https://www.dynaforma.fr/"
                            src="partenariats/7fcdfb19.jpg"
                        />
                        <LinkImage
                            href="https://lemicrodantho.fr/"
                            src="partenariats/25fb201b.jpg"
                        />
                    </div>
                </FadeIn>
                <FadeIn>
                    <h1 className="padding">Partenariats Sportif Annuel</h1>
                    <div className="image-list">
                        <LinkImage
                            href="https://altore.corsica/"
                            src="partenariats/bc4ab58d.jpg"
                        />
                        <LinkImage
                            href="https://naturalorigins.me/"
                            src="partenariats/1445x.webp"
                        />
                        <LinkImage
                            href="https://www.instagram.com/jozbikeandrun?igsh=MW8wNGw2aHBlZWVpdQ=="
                            src="partenariats/72840987.jpg"
                        />
                    </div>
                </FadeIn>
                <FadeIn>
                    <h1 className="padding">
                        Partenariats Aventures CHAM22 & DIAG23
                    </h1>
                    <h3>Organisationnels</h3>
                    <div className="image-list">
                        <LinkImage
                            href="https://urlr.me/VFSgRs"
                            src="partenariats/d3fc26a5.jpg"
                        />
                        <LinkImage
                            href="https://www.chu-dijon.fr/"
                            src="partenariats/a012f21f.jpg"
                        />
                        <LinkImage
                            href="https://www.chu-reunion.fr/"
                            src="partenariats/b08b568b.jpg"
                        />
                        <LinkImage
                            href="http://www.chu-dijon.fr/service/plateforme-dexpertise-maladies-rares-bfc/plateforme-dexpertise-maladies-rares-bfc"
                            src="partenariats/aecd09f9.jpg"
                        />
                        <LinkImage
                            href="https://www.remarares.re/"
                            src="partenariats/bbc77696.jpg"
                        />
                        <LinkImage
                            href="https://fondation-maladiesrares.org/"
                            src="partenariats/3fcebed0.jpg"
                        />
                    </div>
                    <h3>Financiers</h3>
                    <div className="image-list" style={{ margin: 0 }}>
                        <LinkImage
                            href="https://www.mgen.fr/"
                            src="partenariats/84cdc361.png"
                        />
                        <LinkImage
                            href="https://www.acef.com/com/page/1460"
                            src="partenariats/6fcb7a38.jpg"
                        />
                        <LinkImage
                            href="https://www.mnh.fr/"
                            src="partenariats/9e5171e8.jpg"
                        />
                        <LinkImage
                            href="https://www.chematech-mdt.com/"
                            src="partenariats/jfcbsbhj.png"
                        />
                        <LinkImage
                            href="https://www.ma.cuisinella/fr-fr/magasins/cote-d-or/dijon-quetigny"
                            src="partenariats/1b454dfe.jpg"
                        />
                        <LinkImage
                            href="https://www.dijonchauffage.fr/a-propos/"
                            src="partenariats/a9743777.jpg"
                        />
                        <LinkImage
                            href="https://concessions.peugeot.fr/marsannay-la-cote/nous-contacter/contactez-nous/"
                            src="partenariats/42e3ff33.jpg"
                        />
                        <LinkImage
                            href="https://negocialfinance.fr/"
                            src="partenariats/hvhjsbcs.png"
                        />
                        <LinkImage
                            href="https://urlr.me/jQMERu"
                            src="partenariats/6c349048.jpg"
                        />
                        <LinkImage
                            href="http://www.atelierlambert.fr/"
                            src="partenariats/bb9cc5ec.jpg"
                        />
                        <LinkImage
                            href="https://securama.fr/"
                            src="partenariats/b502d641.jpg"
                        />
                        <LinkImage
                            href="https://urlr.me/M4rUuY"
                            src="partenariats/4fbf9530.jpg"
                        />
                        <LinkImage
                            href="https://www.prospactive.com/"
                            src="partenariats/f033cfcc.jpg"
                        />
                    </div>
                </FadeIn>
            </Section>
        </>
    );
}

export default About;
