import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home";
import PageLayout from "./components/PageLayout";
import ErrorPage from "./routes/ErrorPage";
import Aventures from "./routes/Aventures";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="aventures" element={<Aventures />}></Route>
                    <Route path="reseau">
                        <Route path="secteurs-d-intervention" />
                        <Route path="coordination-des-interventions" />
                        <Route path="optimisation-des-conditions-d-interventions" />
                    </Route>
                    <Route path="associations">
                        <Route path="missions" />
                        <Route path="projets-sportifs-solidaires-et-de-cohesion" />
                        <Route path="projets-innovants" />
                        <Route path="creation-course-solidaire" />
                        <Route path="handicap-et-dependance" />
                    </Route>
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
