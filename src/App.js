// eslint-disable-next-line

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About.jsx";
import Projects from "./components/project/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Login from "./components/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./actions/user";
import { loadUser } from "./actions/user";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Timeline from "./components/AdminPanel/Timeline";

function App() {
    const dispatch = useDispatch();

    const { isAuthenticated } = useSelector((state) => state.login);
    const { loading, user } = useSelector((state) => state.login);

    useEffect(() => {
        dispatch(getUser());
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <Router>
            {loading ? (
                <div>Loading</div>
            ) : (
                <>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <div className="App">Welcome</div> */}
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/account"
                            element={
                                isAuthenticated ? <AdminPanel /> : <Login />
                            }
                        />

                        <Route
                            path="/admin/timeline"
                            element={isAuthenticated ? <Timeline /> : <Login />}
                        />
                    </Routes>
                    <Footer />
                </>
            )}
        </Router>
    );
}

export default App;
