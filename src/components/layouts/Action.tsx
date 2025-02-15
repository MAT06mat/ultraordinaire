import Section from "./Section";
import "../../assets/css/Action.scss";
import { motion } from "motion/react";
import ContactButton from "../ui/ContactButton";

function Action() {
    return (
        <Section color="secondary">
            <motion.div
                className="cols action"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0.95 },
                }}
            >
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
                    <ContactButton />
                </div>
            </motion.div>
        </Section>
    );
}

export default Action;
