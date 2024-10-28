import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    source: string;
    reverse?: boolean;
    proportion?: number;
    alt?: string;
}

function TextImage({
    children,
    source,
    reverse = false,
    proportion = 50,
    alt = "Photo de Julien",
}: Props) {
    return (
        <div
            className={
                reverse ? "cols reverse mobile-reverse" : "cols mobile-reverse"
            }
        >
            <div
                className="text"
                style={{ width: (100 - proportion).toString() + "%" }}
            >
                {children}
            </div>
            <img
                src={"/images/" + source}
                alt={alt}
                style={{ width: proportion.toString() + "%" }}
            />
        </div>
    );
}

export default TextImage;
