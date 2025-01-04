interface Props {
    className?: string;
    href?: string;
    src?: string;
    alt?: string;
    _blank?: boolean;
}

function LinkImage({ className, href, src, alt, _blank = true }: Props) {
    return (
        <a className={className} href={href} target={_blank ? "_blank" : ""}>
            <img src={"/images/" + src} alt={alt} />
        </a>
    );
}

export default LinkImage;
