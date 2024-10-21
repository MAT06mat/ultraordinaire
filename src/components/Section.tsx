interface Props {
    children: JSX.Element;
    color?: "white" | "gray";
}

function Section({ children, color = "white" }: Props) {
    return <section className={color}>{children}</section>;
}

export default Section;
