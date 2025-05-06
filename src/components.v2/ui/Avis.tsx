import { ReactNode } from "react";
import LinkImage from "./LinkImage";
import FadeIn from "../animations/FadeIn";

interface Props {
    href: string;
    src: string;
    name: string;
    children: ReactNode;
}

function Avis({ href, src, name, children }: Props) {
    return (
        <FadeIn>
            <div className="avis">
                <div className="profile-image">
                    <LinkImage href={href} src={src} />
                    <h3 className="padding">{name}</h3>
                </div>
                <p className="padding separator avis-text">{children}</p>
            </div>
        </FadeIn>
    );
}

const AvisList = (
    <>
        <Avis
            href="https://fondation-maladiesrares.org/"
            src="partenariats/3fcebed0.jpg"
            name="Responsable philanthropie de la Fondation Maladies Rares"
        >
            <>
                Julien s’est engagé à nos côtés comme coureur solidaire lors de
                deux épreuves de trail parmi les plus mythiques : l’UTMB et le
                Grand Raid de La Réunion. Mais au-delà de la performance
                sportive, c’est son engagement humain qui m'a profondément
                touché.
                <br />
                À La Réunion, il ne s’est pas contenté de courir : il a formé
                une belle équipe avec une collaboratrice du CHU local pour
                porter haut les couleurs des maladies rares et collecter des
                fonds pour cette cause. Un geste fort, généreux, et profondément
                symbolique.
                <br />
                Et ce n’est pas tout ! En parallèle, Julien a eu l’idée et
                l’énergie de lancer "La Diagonale du CHU" au CHU de Dijon. Ce
                jour-là, ses collaborateurs ont enfilé leurs baskets pour courir
                eux aussi en solidarité, dans une belle ambiance collective et
                engagée.
                <br />
                Julien incarne avec sincérité les valeurs de solidarité,
                d’engagement et d’initiative que nous portons à la Fondation.
                Son enthousiasme, sa bienveillance et sa capacité à fédérer
                autour de lui sont tout simplement inspirants.
                <br />
                <br />
                Pascale Milani
            </>
        </Avis>
        <Avis
            href="https://mobile.free.fr/"
            src="partenariats/c1e3d233.jpg"
            name="Responsable Déploiement Free Mobile"
        >
            <>
                Très belle expérience
                <br />
                <br />
                Julien a su transmettre avec authenticité les exigences mentales
                et physiques de cette discipline extrême qui est l’ultra trail.
                <br />
                Au-delà de la performance sportive, il a mis en lumière des
                valeurs clés telles que la resilience, le dépassement et
                l’écoute de soi, et surtout la capacité d’adaptation en
                environnement incertain, autant de qualités directement
                transposables au monde professionnel.
                <br />
                Les équipes ont adhéré et je remercie Julien pour sa grande
                humilité et son sérieux.
                <br />
                <br />
                Florian Garbino
            </>
        </Avis>
        <Avis
            href="https://www.mgen.fr/"
            src="partenariats/84cdc362.png"
            name="Responsable Relations Santé Social"
        >
            <>
                Ravi d’avoir collaboré avec Julien Coindet sur « la diagonale
                des CHU » pour l’Ultra-trail de la diagonale des fous à la
                Réunion.
                <br />
                J’y ai rencontré une personne « ultraordinaire », dynamique et
                pleine d’ambition au service des projets qu’il mène.
                <br />
                Une force de persévérance, de dépassement de soi et un
                engagement permanent pour des projets fédérateurs porteurs de
                valeurs fortes qui font sens.
                <br />
                <br />
                John Boardman
            </>
        </Avis>
        <Avis
            href="https://www.acef.com/com/homepage"
            src="partenariats/6fcb7a38.jpg"
            name="ACEF Bourgogne Franche comté"
        >
            <>
                Un leader au service des plus fragiles
                <br />
                <br />
                Julien est un grand sportif, mais c'est avant tout sa capacité à
                rassembler et fédérer autour de projets au service des plus
                fragiles qui le distingue. En véritable orateur, il a su nous
                convaincre de soutenir des initiatives ambitieuses dont il était
                le chef d'orchestre : CHAM 22 et DIAG 23.
                <br />
                Ces projets, à la fois audacieux et inspirants, avaient pour
                objectif d’organiser des événements festifs et sportifs en
                métropole, alors même que Julien courait la célèbre Diagonale
                des Fous au profit de la Fondation des Maladies Rares.
                <br />
                Créer un projet en quelques semaines, relier Chamonix, Dijon et
                La Réunion, mobiliser plusieurs partenaires financiers,
                impliquer des patients, des personnels et des bénévoles sur deux
                journées au sein de différentes structures : tel était
                l'impressionnant défi que Julien et son équipe ont relevé avec
                brio.
                <br />
                Grâce à son enthousiasme communicatif, l'ACEF a souhaité
                s'associer au projet et rejoindre cette belle aventure.
                <br />
                <br />
                Étienne Piton
            </>
        </Avis>
    </>
);

export default AvisList;
