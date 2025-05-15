import { MainAppState } from "@/app/types/types";

export const mainAppReducer = (state: MainAppState, action: any): MainAppState => {
    switch (action.type) {
        case "OPEN_MENU":
            return { ...state, menuOpen: !state.menuOpen };
        default:
            return state;
    }
};
