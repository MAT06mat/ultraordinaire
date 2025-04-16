import { ReactNode } from "react";
import ImageVideo from "../ui/ImageVideo";
import FadeIn from "../animations/FadeIn";

interface Props {
    children: ReactNode;
    source?: string;
    videoLink?: string;
    reverse?: boolean;
    proportion?: number;
    alt?: string;
}

function TextImage({
    children,
    source,
    videoLink,
    reverse = false,
    proportion = 50,
    alt = "Photo de Julien",
}: Props) {
    return (
        <FadeIn className={reverse ? "cols reverse" : "cols"}>
            <div
                className="text"
                style={{ width: (100 - proportion).toString() + "%" }}
            >
                {children}
            </div>
            {source && !videoLink ? (
                <img
                    src={"/images/" + source}
                    alt={alt}
                    style={{ width: proportion.toString() + "%" }}
                    className="shadow"
                />
            ) : null}
            {source && videoLink ? (
                <ImageVideo src={source} link={videoLink} />
            ) : null}
            {!source && videoLink ? (
                <video
                    autoPlay
                    loop
                    muted
                    className="shadow"
                    style={{ width: proportion.toString() + "%" }}
                >
                    <source src={"/videos/" + videoLink} type="video/mp4" />
                </video>
            ) : null}
        </FadeIn>
    );
}

export default TextImage;
