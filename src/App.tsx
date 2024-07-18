import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EventForm from "./components/EventForm";

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col items-center justify-center gap-4">
                <nav className="p-4 bg-gray-800 w-full">
                    <div className="flex items-center justify-center gap-16">
                        <Link
                            to="/add"
                            className="px-4 py-2 mr-4 text-white bg-blue-500 rounded"
                        >
                            Add Event
                        </Link>
                        <Link
                            to="/list"
                            className="px-4 py-2 text-white bg-blue-500 rounded"
                        >
                            Event List
                        </Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/add" element={<EventForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
