import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <div className="h-full bg-gray-100 flex flex-col justify-between">
                <Header />
                <main className="container mx-auto pt-10 main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/loginPage" element={<LoginPage />} />
                        <Route path="/signupPage" element={<SignupPage />} />
                        <Route path="/profilePage" element={<ProfilePage />} />
                        <Route path="/testPage" element={<TestPage />} />
                        <Route path="/testResultPage" element={<TestResultPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
