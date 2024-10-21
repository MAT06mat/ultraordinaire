import "../assets/css/error-page.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div id="error-page">
            <div>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
            <Link className="link" to={"/"}>
                Go to home
            </Link>
        </div>
    );
}
