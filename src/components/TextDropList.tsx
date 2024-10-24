import TextDrop from "./TextDrop";
import "../assets/css/text-drop-list.scss";
import { useState } from "react";

interface Props {
    list: { title: string; text: string }[];
}

function TextDropList({ list }: Props) {
    const [textDropIndex, setTextDropIndex] = useState(-1);

    function newTextDropIndex(index: number) {
        if (index === textDropIndex) setTextDropIndex(-1);
        else setTextDropIndex(index);
    }

    return (
        <div className="text-drop-list">
            {list.map((element, index) => {
                return (
                    <TextDrop
                        key={index}
                        title={element.title}
                        text={element.text}
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
