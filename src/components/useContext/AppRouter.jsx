import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index path="/" element={ <HomeScreen/> } />
                    <Route path="/about" element={ <AboutScreen/> } />
                    <Route path="/login" element={ <LoginScreen/> } />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter