import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

function PageLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default PageLayout;
