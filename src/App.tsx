import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home";
import PageLayout from "./components/PageLayout";
import ErrorPage from "./routes/ErrorPage";
import Aventures from "./routes/Aventures";
import Diag23 from "./routes/Diag23";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/Wr0Y7DzQYry3ofUm8STesc6QtBvFokKH8RfqO03i"
                element={<PageLayout />}
            >
                <Route index element={<Home />} />
                <Route path="aventures">
                    <Route index element={<Aventures />} />
                    <Route path="diag23" element={<Diag23 />} />
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
        </>
    ),
    {
        future: {
            v7_relativeSplatPath: true,
            v7_normalizeFormMethod: true,
            v7_fetcherPersist: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

function App() {
    return (
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    );
}

export default App;
