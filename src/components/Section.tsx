interface Props {
    children: JSX.Element;
    color?: "white" | "gray";
    isFirst?: boolean;
}

function Section({ children, color = "white", isFirst = false }: Props) {
    return (
        <section className={color}>
            {isFirst && <div className="header-space"></div>}
            {children}
        </section>
    );
}

export default Section;
