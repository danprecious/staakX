"use client"

import { MainAppContextProps, MainAppState, MainAppStateProps } from "@/app/types/types";
import { useReducer, createContext } from "react";
import { mainAppReducer } from "./reducer";



const defaultState: MainAppState = {
    menuOpen: false,
}


export const MainAppContext = createContext<MainAppContextProps>({
    state: defaultState,
    dispatch: () => undefined
});


const MainAppStateProvider = ({
    children,
}: MainAppStateProps) => {


    const [state, dispatch] = useReducer(mainAppReducer, defaultState);



    return (
        <MainAppContext.Provider value={{ state, dispatch }}>
            {children}
        </MainAppContext.Provider>
    )
}


export default MainAppStateProvider;
