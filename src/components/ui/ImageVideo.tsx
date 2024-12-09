import { useState } from "react";
import "../../assets/css/ImageVideo.scss";
import PlayButton2 from "../../assets/images/PlayButton2";

interface Props {
    src: string;
    alt?: string;
    link: string;
}

function ImageVideo({ src, alt = "", link }: Props) {
    const [videoActivated, setVideoActivated] = useState(false);

    function handleClick() {
        setVideoActivated(true);
    }

    return (
        <div className="image-video">
            <img
                src={"/images/" + src}
                alt={alt}
                style={{ opacity: videoActivated ? 0 : 1 }}
            />
            {!videoActivated ? (
                <div className="svg-container" onClick={handleClick}>
                    <PlayButton2 />
                </div>
            ) : (
                <iframe
                    src={link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    height="315"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="YouTube video player"
                    width="560"
                ></iframe>
            )}
        </div>
    );
}

export default ImageVideo;
