import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function PageLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration getKey={(location) => location.pathname} />
        </>
    );
}

export default PageLayout;
