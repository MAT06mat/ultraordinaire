import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import PageLayout from "./components/PageLayout";
import ErrorPage from "./routes/error-page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
