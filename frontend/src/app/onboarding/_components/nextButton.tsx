"use client"

import React, { useEffect, useState } from 'react'
import { defaultState, useOnboardingState } from '../onboardingStateHook'
import { usePathname, useRouter } from 'next/navigation'

const NextButton: React.FC<{ text: string, stateKey: string, value: string | string[], nextPage: string }> = ({ text, stateKey, value, nextPage }) => {

    const [state, setState] = useOnboardingState(defaultState)
    const [error, setError] = useState<string>("");

    const router = useRouter();
    const path = usePathname();


    useEffect(() => {
        const timer = setTimeout(() => setError(""), error ? 4000 : 0);
        return () => clearTimeout(timer)
    }, [error])


    const saveStateHandler = () => {
        const isValid = !!value && (!Array.isArray(value) || value.length > 0);
        setError(isValid ? "" : "Can't leave us hanging!");
        if (!isValid) return;



        const newState = stateKey === "techStack"
            ? { ...state, techStack: [...state.techStack, ...(Array.isArray(value) ? value : [value])] }
            : { ...state, [stateKey]: value };


        setState({ ...newState, lastUrl: path });


        if (stateKey === "reminderFrequency") {
            // If the last step is reminderFrequency, we need to send the request to the backend, 
            // save the entries, clear them from local storage and move to the main dashboard
            if (typeof window !== undefined) {
                const data = state;

                console.log(data);

                Object.values(data).map((value: string | string[]) => {
                    if (typeof value == "string") {
                        if (value === "") return
                       return value.trim();
                    }
                })

                

                // localStorage.clear();

            }

        }

        console.log(state);

        router.push(nextPage);

    }

    return (
        <div className="w-full">
            <button onClick={saveStateHandler} className="text-background cursor-pointer text-center bg-foreground hover:bg-foreground/80 px-2 py-[.5em] w-full rounded-md">{text}</button>
            {<p className='text-red-500 text-sm w-full text-center py-3'>{error}</p>}
        </div>
    )
}

export default NextButton
