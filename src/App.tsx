import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "./App.scss";
import PageLayout from "./components/layouts/PageLayout";
import Home from "./routes/Home";
import Aventures from "./routes/MyPath";
import Diag23 from "./routes/Diag23";
import WhoIAm from "./routes/WhoIAm";
import About from "./routes/About";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="mon-chemin">
                    <Route index element={<Aventures />} />
                    <Route path="diag23" element={<Diag23 />} />
                </Route>
                <Route path="qui-je-suis" element={<WhoIAm />} />
                <Route path="à-propos" element={<About />} />
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
