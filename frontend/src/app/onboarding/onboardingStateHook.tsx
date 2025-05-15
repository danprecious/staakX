"use client"



import { useState, useEffect } from 'react';
import { State } from '../types/types';

export const saveState = (state: State) => {
    try {

        if (typeof window !== "undefined") {
            localStorage.setItem('onboardingState', JSON.stringify(state));
            localStorage.setItem('lastOnboardingStep', window.location.pathname);
        }
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

export const loadState = (): State | null => {
    try {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem('onboardingState');
            return saved ? JSON.parse(saved) : null;
        } else {
            throw new Error("Error loading from localStorage")
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return null;
    }
};

export const defaultState: State = {
    username: "",
    mission: "",
    techStack: [],
    reminderFrequency: "",
    difficultyLevel: "",
    lastOnboardingStep: "",
    lastUrl: ""
}


export const useOnboardingState = (defaultState: State) => {
    const [state, setState] = useState<State>(() => {
        const saved = loadState();
        return saved || defaultState;
    });

    useEffect(() => {
        saveState(state);
    }, [state]);
 



    const updateTechStack = (index: number, value: string) => {
        setState(prev => {
          const newTechStack = [...prev.techStack];
          newTechStack[index] = value;
          return { ...prev, techStack: newTechStack };
        });
      };
    
      // Helper to add new tech stack field
      const addTechStackField = () => {
        setState(prev => ({
          ...prev,
          techStack: [...prev.techStack, ""]
        }));
      };

    return [state, setState, updateTechStack, addTechStackField] as const;
};

