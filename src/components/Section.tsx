import { ReactNode } from "react";
import "../assets/css/section.scss";

interface Props {
    children?: ReactNode;
    color?: "main" | "main-2" | "secondary" | "secondary-2";
}

function Section({ children = "", color = "main" }: Props) {
    return (
        <section
            className={color}
            style={{ backgroundColor: "var(--" + color + ")" }}
        >
            <div className="container">{children}</div>
        </section>
    );
}

export default Section;
