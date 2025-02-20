import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Home from "./routes/Home";
import PageLayout from "./components/layouts/PageLayout";
import ErrorPage from "./routes/ErrorPage";
import Aventures from "./routes/Aventures";
import Diag23 from "./routes/Diag23";
import About from "./routes/About";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="mes-sentiers">
                    <Route index element={<Aventures />} />
                    <Route path="diag23" element={<Diag23 />} />
                </Route>
                <Route path="about" element={<About />} />
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
