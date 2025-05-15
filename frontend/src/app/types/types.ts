export interface State {
  username: string;
  mission: string;
  techStack: string[];
  reminderFrequency: string;
  difficultyLevel: string;
  lastOnboardingStep: string;
  lastUrl: string;
}
export interface OnboardingProviderProps {
  children: React.ReactNode;
  defaultState: State;
}
export interface OnboardingContextProps {
  state: State;
  dispatch: React.Dispatch<any>;
}

export interface MainAppState {
    menuOpen: boolean;
}
export interface MainAppStateProps {
  children: React.ReactNode;

}

export interface MainAppContextProps {
  state: MainAppState;
  dispatch: React.Dispatch<any>;
}
