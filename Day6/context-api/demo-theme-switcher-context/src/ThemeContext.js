import React, { createContext, useState } from "react";
import "./styles.css";

//Create a Context Theme
export const ThemeContext = createContext();
//Impmenting light and background
export const ThemeProvider = ({children}) => {
    const[theme, setTheme] =useState("light");

    //toggle function
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value ={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};