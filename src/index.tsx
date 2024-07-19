import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ThemeSwitch from "./components/theme-switch";
import ThemeContextProvider from "./context/theme-context";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        {/* Redux provider  */}
        <Provider store={store}>
            {/* Theme context  */}
            <ThemeContextProvider>
                <div className="bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
                    {/* App component  */}
                    <App />

                    {/* Theme button */}
                    <ThemeSwitch />
                </div>
            </ThemeContextProvider>
        </Provider>
    </React.StrictMode>
);
