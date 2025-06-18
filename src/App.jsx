import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'

import './App.css'
import Blog from "./pages/Blog";
import BlogPage from "./components/BlogPage";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
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
