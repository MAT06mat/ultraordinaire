import Section from "./Section";
import "../../assets/css/Action.scss";

function Action() {
    return (
        <Section color="secondary">
            <div className="cols action">
                <div>
                    <h2>COLLABORER AVEC JULIEN COINDET</h2>
                    <h1>
                        Voici <span className="complementary">les offres</span>{" "}
                        de Julien
                    </h1>
                    <p>
                        Vous avez besoin d’un intervenant, d’un accompagnement ?
                        <br />
                        Quelque soit vos <b>besoins</b>, entreprise,
                        établissement public et privé, association ou fondation,
                        indépendant ou particulier, vous trouverez, peut être,
                        sur les 2 sentiers, un <b>levier de discussion</b> qui
                        fait sens pour vos équipes ou pour vous même. Le sport
                        et vous ça fait deux ?<br />
                        Peut-être mais <b>votre santé</b> et vous ne font qu’un
                        !
                    </p>
                </div>
                <div>
                    <img src="/images/mobile.svg" alt="" />
                    <h3 className="center">Vous êtes sur le bon chemin</h3>
                    <button className="margin">Contactez moi maintenant</button>
                </div>
            </div>
        </Section>
    );
}

export default Action;
