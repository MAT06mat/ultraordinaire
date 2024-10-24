import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import PageLayout from "./components/PageLayout";
import ErrorPage from "./routes/error-page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="aventures">
                    <Route path="temoignages" />
                    <Route path="ultra-trail" />
                    <Route path="capital-sante" />
                    <Route path="dynamique-collective" />
                </Route>
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
    );
}

export default App;
