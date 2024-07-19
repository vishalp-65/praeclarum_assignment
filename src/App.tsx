import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
    return (
        <Router>
            {/* Navbar */}
            <Navbar />

            {/* Routes */}
            <div className="flex flex-col items-center justify-center gap-4 pt-20">
                <Routes>
                    <Route path="/add" element={<EventForm />} />
                    <Route path="/list" element={<EventList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
