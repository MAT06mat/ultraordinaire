import { Helmet } from "react-helmet-async";
import Section from "../components/layouts/Section";

function Diag23() {
    return (
        <>
            <Helmet>
                <title>Projet Diag23</title>
                <meta
                    name="description"
                    content="Page présentant le projet Diag23 du site web ultraordinaire.fr"
                />
                <link rel="canonical" href="/mon-chemin/diag23" />
            </Helmet>
            <Section color="main-2" noPadding>
                <div className="images-container">
                    <img src="/images/WA0016.jpg" alt="" />
                    <br />
                    <br />
                    <img src="/images/WA0017.jpg" alt="" />
                </div>
            </Section>
        </>
    );
}

export { Diag23 };
