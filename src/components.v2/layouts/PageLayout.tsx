import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideMedias from "./SideMedias";

function PageLayout() {
    return (
        <>
            <SideMedias />
            <div
                style={{
                    backgroundColor: "#0077ff",
                    color: "white",
                    padding: "1em 2em",
                }}
            >
                Ceci est la V2 du site, elle est encore en dévellopement
            </div>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration getKey={(location) => location.pathname} />
        </>
    );
}

export { PageLayout };
