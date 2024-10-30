import { ReactNode, useState } from "react";
import "../assets/css/carousel.scss";

interface Props {
    list: ReactNode[];
}

/*
<Section>
    <Carousel list={[<>AAA</>, <>BBB</>, <>CCC</>, <>DDD</>]} />
</Section>
*/

function Carousel({ list }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function next() {
        const newIndex = currentIndex + 2 > list.length ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    function before() {
        const newIndex = currentIndex < 1 ? list.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="carousel">
            <div
                className="wrapper"
                style={{
                    transform: `translate(-${currentIndex * 100}%, 0px)`,
                }}
            >
                {list.map((element, index) => {
                    return (
                        <div
                            className={
                                currentIndex === index
                                    ? "item center active"
                                    : "item center"
                            }
                            key={index}
                        >
                            {element}
                        </div>
                    );
                })}
            </div>
            <div className="controles">
                <svg
                    onClick={before}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM15.1066 19.864L25.8492 9.1213C27.0208 7.94973 27.0208 6.05024 25.8492 4.87866C24.6777 3.70709 22.7782 3.70709 21.6066 4.87866L8.87868 17.6066C8.25828 18.227 7.96641 19.0515 8.00307 19.864C7.96641 20.6764 8.25828 21.5009 8.87868 22.1213L21.6066 34.8492C22.7782 36.0208 24.6777 36.0208 25.8492 34.8492C27.0208 33.6777 27.0208 31.7782 25.8492 30.6066L15.1066 19.864Z"
                        fill="#E7E7E7"
                    />
                </svg>
                <svg
                    onClick={next}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM24.8934 20.136L14.1508 30.8787C12.9792 32.0503 12.9792 33.9498 14.1508 35.1213C15.3223 36.2929 17.2218 36.2929 18.3934 35.1213L31.1213 22.3934C31.7417 21.773 32.0336 20.9485 31.9969 20.136C32.0336 19.3236 31.7417 18.4991 31.1213 17.8787L18.3934 5.15076C17.2218 3.97918 15.3223 3.97918 14.1508 5.15076C12.9792 6.32233 12.9792 8.22182 14.1508 9.3934L24.8934 20.136Z"
                        fill="#E7E7E7"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Carousel;
