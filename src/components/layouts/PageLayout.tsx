import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideMedias from "./SideMedias";

function PageLayout() {
    return (
        <>
            <SideMedias />
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration getKey={(location) => location.pathname} />
        </>
    );
}

export default PageLayout;
