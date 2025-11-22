"use client";
import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [isContactVisible, setIsContactVisible] = useState(false);

    return (
        <ScrollContext.Provider value={{ isContactVisible, setIsContactVisible }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => useContext(ScrollContext);
