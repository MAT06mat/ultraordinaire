import { ReactNode } from "react";

interface Props {
    title?: string;
    items: ReactNode[];
}

function List({ title, items }: Props) {
    return (
        <div>
            {title ? (
                <p>
                    <b>{title}</b>
                </p>
            ) : null}
            <ul className="list">
                {items.map((element, index) => {
                    return <li key={index}>{element}</li>;
                })}
            </ul>
        </div>
    );
}

export default List;
