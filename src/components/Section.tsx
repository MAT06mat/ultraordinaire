import { ReactNode } from "react";
import "../assets/css/section.scss";

interface Props {
    children?: ReactNode;
    color?: "main" | "main-2" | "secondary" | "secondary-2";
    background?: string;
    noContainer?: boolean;
}

function Section({
    children = "",
    color = "main",
    background = "",
    noContainer = false,
}: Props) {
    if (background) {
        background = `/images/${background}`;
    }
    return (
        <section
            className={`${color} ${noContainer ? "no-container" : ""} ${
                background ? "background-image" : ""
            }`}
            style={{
                backgroundColor: `var(--${color})`,
                backgroundImage: `url('${background}')`,
            }}
        >
            <div className="container">{children}</div>
        </section>
    );
}

export default Section;
