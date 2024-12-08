import { ReactNode } from "react";
import "../../assets/css/Section.scss";
import TriangleStartWhite from "../../assets/img/TriangleStartWhite";
import TriangleEndWhite from "../../assets/img/TriangleEndWhite";

interface Props {
    children?: ReactNode;
    color?: "main" | "main-2" | "secondary" | "secondary-2";
    background?: string;
    noContainer?: boolean;
    noPadding?: boolean;
    start?: boolean;
    end?: boolean;
}

function Section({
    children = "",
    color = "main",
    background = "",
    noContainer,
    noPadding,
    start,
    end,
}: Props) {
    let className = color.toString();

    if (background) {
        className += " background-image";
        background = `/images/${background}`;
    }
    className = noContainer ? className + " no-container" : className;
    className = start || noPadding ? className : className + " padding-top";
    className = end || noPadding ? className : className + " padding-bottom";
    return (
        <>
            {start ? (
                <div className="triangle">
                    <TriangleStartWhite />
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
                <div className="triangle">
                    <TriangleEndWhite />
                </div>
            ) : null}
        </>
    );
}

export default Section;
