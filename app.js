import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { MainPage } from "./Components/MainPage";
import {Features } from "./Components/Features";
import { Downloads } from "./Components/Downloads"
import { Contact } from "./Components/Contact";
import { Login } from "./Components/Login";

import  './style/index.scss';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/downloads" element={<Downloads />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);