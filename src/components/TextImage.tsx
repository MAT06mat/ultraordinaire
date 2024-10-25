import { ReactNode } from "react";
import "../assets/css/text-image.scss";

interface Props {
    children: ReactNode;
    source: string;
    imagePos?: "left" | "right";
    proportion?: number;
    alt?: string;
}

function TextImage({
    children,
    source,
    imagePos = "left",
    proportion = 50,
    alt = "Photo de Julien",
}: Props) {
    return (
        <div className={"text-image " + imagePos}>
            <img
                src={"/images/" + source}
                alt={alt}
                className="image"
                style={{ width: proportion.toString() + "%" }}
            />
            <div
                className="text"
                style={{ width: (100 - proportion).toString() + "%" }}
            >
                {children}
            </div>
        </div>
    );
}

export default TextImage;
