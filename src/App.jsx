import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'

import './App.css'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
