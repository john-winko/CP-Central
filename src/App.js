import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import Signup from "./pages/Signup";
import { AuthProvider, RequireAuth } from "./context/AuthProvider";
import HomePage from "./pages/HomePage";
import AuthHomePage from './pages/AuthHomePage';
import NavBar from './components/NavBar';



function App() {

    return (
        <div className="App">
            <AuthProvider>
                <NavBar />
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/login"} element={<LoginPage />} />
                    <Route path={"/signup"} element={<Signup />} />
                    {/* Will redirect to login page if trying to reach any of these pages w/o being authenticated */}
                    <Route element={<RequireAuth />}>
                        <Route path={"/authHome"} element={<AuthHomePage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;