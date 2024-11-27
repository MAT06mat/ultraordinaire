import { ReactNode } from "react";
import "../assets/css/Section.scss";

interface Props {
    children?: ReactNode;
    color?: "main" | "main-2" | "secondary" | "secondary-2";
    background?: string;
    noContainer?: boolean;
    start?: boolean;
    end?: boolean;
}

function Section({
    children = "",
    color = "main",
    background = "",
    noContainer = false,
    start,
    end,
}: Props) {
    let className = color.toString();

    if (background) {
        className += " background-image";
        background = `/images/${background}`;
    }
    className = noContainer ? className + " no-container" : className;
    className = start ? className : className + " padding-top";
    className = end ? className : className + " padding-bottom";
    return (
        <>
            {start ? (
                <div className="start">
                    <img src="/images/triangle1white.svg" alt="" />
                </div>
            ) : null}
            <section
                className={className}
                style={{
                    backgroundColor: `var(--${color})`,
                    backgroundImage: `url('${background}')`,
                }}
            >
                <div className="container">{children}</div>
            </section>
            {end ? (
                <div className="end">
                    <img src="/images/triangle2white.svg" alt="" />
                </div>
            ) : null}
        </>
    );
}

export default Section;
