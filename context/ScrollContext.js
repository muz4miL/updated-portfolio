"use client";
import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [isContactVisible, setIsContactVisible] = useState(false);
    const [isModelingVisible, setIsModelingVisible] = useState(false);

    return (
        <ScrollContext.Provider value={{ isContactVisible, setIsContactVisible, isModelingVisible, setIsModelingVisible }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => useContext(ScrollContext);
