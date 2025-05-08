import { ReactNode } from "react";
import Bounce from "../../components/animations/Bounce";
import Medias from "./MediasSVG";

interface Props {
    url: string;
    svg: ReactNode;
}

function SocialMedia({ url, svg }: Props) {
    return (
        <Bounce>
            <a href={url} target="_blank">
                {svg}
            </a>
        </Bounce>
    );
}

function SocialsMedias() {
    return (
        <div className="socials-medias">
            <SocialMedia
                url="https://www.youtube.com/@ultraordinaire"
                svg={Medias.youtube}
            />
            <SocialMedia url="https://urlr.me/mjhRuP" svg={Medias.facebook} />
            <SocialMedia url="https://urlr.me/krS4hB" svg={Medias.instagram} />
            <SocialMedia url="https://urlr.me/86yeCG" svg={Medias.linkedin} />
        </div>
    );
}

export default SocialsMedias;
