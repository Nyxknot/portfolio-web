import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'

import './App.css'
import Blog from "./pages/Blog";
import BlogPage from "./components/BlogPage";
import { AnimatePresence } from "framer-motion";

import ScrollSmootherSetup from "./lib/ScrollSmootherSetup";
import Transition from "./lib/Transition";

import ScrollToTop from "./lib/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <ScrollSmootherSetup>
                <AnimatedRoutes />
            </ScrollSmootherSetup>
        </BrowserRouter>
    );
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Transition key={location.pathname} />
            <Routes location={location} key={location.pathname+"_routes"}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:slug" element={<BlogPage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}


export default App
