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

import { Home as HomeV2 } from "./routes.v2/Home";
import { PageLayout as PageLayoutV2 } from "./components.v2/layouts/PageLayout";
import { Aventures as AventuresV2 } from "./routes.v2/Aventures";
import { Diag23 as Diag23V2 } from "./routes.v2/Diag23";
import { About as AboutV2 } from "./routes.v2/About";
import WhoIAm from "./routes.v2/WhoIAm";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/v2" element={<PageLayoutV2 />}>
                <Route index element={<HomeV2 />} />
                <Route path="mon-chemin">
                    <Route index element={<AventuresV2 />} />
                    <Route path="diag23" element={<Diag23V2 />} />
                </Route>
                <Route path="qui-je-suis" element={<WhoIAm />} />
                <Route path="à-propos" element={<AboutV2 />} />
            </Route>
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
