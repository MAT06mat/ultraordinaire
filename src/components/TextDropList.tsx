import TextDropItem from "./TextDropItem";
import "../assets/css/TextDropList.scss";
import { ReactNode, useState } from "react";

interface Props {
    list: { title: string; content: ReactNode }[];
}

function TextDropList({ list }: Props) {
    const [textDropIndex, setTextDropIndex] = useState(-1);

    function newTextDropIndex(index: number) {
        if (index === textDropIndex) setTextDropIndex(-1);
        else setTextDropIndex(index);
    }

    return (
        <div className="text-drop-list padding">
            {list.map((element, index) => {
                return (
                    <TextDropItem
                        key={index}
                        title={element.title}
                        content={element.content}
                        active={index === textDropIndex}
                        onClick={() => {
                            newTextDropIndex(index);
                        }}
                    />
                );
            })}
        </div>
    );
}

export default TextDropList;
