import Section from "./Section";
import "../../assets/css/Action.scss";
import ContactButton from "../ui/ContactButton";
import FadeIn from "../animations/FadeIn";
import SocialsMedias from "../../assets/images/SocialsMedias";

interface Props {
    socialsMedias?: boolean;
}

function Action({ socialsMedias }: Props) {
    return (
        <Section color="secondary">
            <FadeIn className="cols action">
                {socialsMedias ? (
                    <>
                        <div>
                            <h2>SUIVRE MES AVENTURES</h2>
                            <h1>
                                Voici les{" "}
                                <span className="complementary">réseaux</span>{" "}
                                de Julien
                            </h1>
                            <SocialsMedias />
                        </div>
                        <div>
                            <img src="/images/mobile.svg" alt="" />
                            <h3 className="center">
                                Intéressé pour échanger ?
                            </h3>
                            <ContactButton />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <h2>COLLABORER AVEC JULIEN COINDET</h2>
                            <h1>
                                Voici{" "}
                                <span className="complementary">
                                    les offres
                                </span>{" "}
                                de Julien
                            </h1>
                            <p>
                                Vous êtes une entreprise, un organisme privé ou
                                public à la recherche d’une conférence, d’un
                                témoignage d’un mec ULTRAordinaire pour vos
                                séminaires, vos conférences ?
                            </p>
                        </div>
                        <div>
                            <img src="/images/mobile.svg" alt="" />
                            <h3 className="center">
                                Vous êtes sur le bon chemin
                            </h3>
                            <ContactButton />
                        </div>
                    </>
                )}
            </FadeIn>
        </Section>
    );
}

export default Action;
