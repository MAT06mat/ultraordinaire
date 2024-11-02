import Section from "./Section";
import "../assets/css/Action.scss";

function Action() {
    return (
        <Section color="secondary">
            <div className="cols action">
                <div>
                    <h2>PRÉSENTATION DES COLLABORATIONS AVEC JULIEN COINDET</h2>
                    <h1>
                        Voici <span className="complementary">les offres</span>{" "}
                        de Julien
                    </h1>
                    <p>
                        Quelque soit vos besoins, entreprise, établissement
                        public et privé, association ou fondation, indépendant,
                        particulier vous trouverez, peut être, dans mes 3
                        sentiers un levier de discussion qui fait sens pour vos
                        équipes ou pour vous même. <br /> Le sport et vous ça
                        fait deux ? Peut être, mais votre santé et vous ne font
                        qu'un ! <br />
                        <br /> Vous avez besoin d’une collaboration, d'un
                        témoignage ou d'un accompagnement ? <br /> Vous êtes sur
                        le bon sentier.
                    </p>
                </div>
                <div>
                    <img src="/images/mobile.svg" alt="" />
                    <h3 className="center">
                        Contactez moi pour votre projet !
                    </h3>
                    <button className="margin">Contactez moi maintenant</button>
                </div>
            </div>
        </Section>
    );
}

export default Action;
