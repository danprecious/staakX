"use client";

import React, { createContext, useEffect, useReducer } from "react";
import { OnboardingContextProps, OnboardingProviderProps, State } from "../types/types";



const onboardingReducer = (state: State, action: any): State => {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, username: action.payload };
        case "SET_MISSION":
            return { ...state, mission: action.payload };
        // Add more cases as needed
        case "SET_ALL":
            return { ...state, ...action.payload };
        default:
            return state;
    }
};


const defaultState: State = {
    username: "",
    mission: "",
    techStack: [""],
    reminderFrequency: "",
    difficultyLevel: "",
    lastOnboardingStep: "",
    lastUrl: ""
}


const getLocalStorageItem = (key: string): string => {
    if (typeof window !== "undefined") {
        return window.localStorage.getItem(key) || "";
    }
    return "";
};

export const OnboardingContext = createContext<OnboardingContextProps>({
    state: defaultState,
    dispatch: () => undefined
});


const OnboardingStateProvider = ({
    children,
    defaultState
}: OnboardingProviderProps) => {


    const [state, dispatch] = useReducer(onboardingReducer, defaultState);



    return (
        <OnboardingContext.Provider value={{ state, dispatch }}>
            {children}
        </OnboardingContext.Provider>
    )
}


export default OnboardingStateProvider;
