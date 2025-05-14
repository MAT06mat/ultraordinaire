interface Props {
    value?: string;
}

function Space({ value = "1em" }: Props) {
    return <div style={{ paddingTop: value }} />;
}

export default Space;
