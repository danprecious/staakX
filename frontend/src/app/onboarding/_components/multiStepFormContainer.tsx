"use client"

import { useEffect, useState } from "react";
import { defaultState, useOnboardingState } from "../onboardingStateHook";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";



const OnBoardingForm: React.FC<{ children: React.ReactNode, linkHref: string, title: string }> = ({ children, linkHref, title }) => {

    const [state, setState] = useOnboardingState(defaultState);

    const path = usePathname();

    const router = useRouter();

    const handleClear = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem('onboardingState');
        }
        setState({ ...state, ...defaultState });
    }

    const handleBackandForth = (action: "forward" | "backward") => {

        const push = (pathname: string) => router.push(`/onboarding/${pathname}`)

        if (action == "forward") {
            switch (path) {
                case "/onboarding/username":
                    push("mission");
                    break;
                case "/onboarding/mission":
                    push("techstack");
                    break;
                case "/onboarding/techstack":
                    push("difficultyLevel");
                    break;
                case "/onboarding/difficultyLevel":
                    push("reminderFrequency");
            }
        }

        if (action == "backward") {
            switch (path) {
                case "/onboarding/mission":
                    push("username");
                    break;
                case "/onboarding/techstack":
                    push("mission");
                    break;
                case "/onboarding/difficultyLevel":
                    push("techstack");
                    break;
                case "/onboarding/reminderFrequency":
                    push("difficultyLevel");
            }
        }

    }



    return (
        <div className="rounded-[1em]  lg:min-w-[30%]  w-full  lg:max-w-fit  bg-background flex-c-center py-10  px-10 ">
            <div className="relative w-full">
            </div>
            <div className="w-full items-center relative flex justify-between mx-[3em]">
                {
                    path.includes("username") ? "" :
                        <button onClick={() => handleBackandForth("backward")} className="hover:text-foreground/70 rounded-full text-2xl cursor-pointer left-0"><FaAngleLeft /></button>
                }
                <h2 className="text-center w-full">
                    {title}
                </h2>
                {
                    path.includes("reminderFrequency") ? "" :
                        <button onClick={() => handleBackandForth("forward")} className="hover:text-foreground/70 rounded-full text-2xl cursor-pointer left-0"><FaAngleRight /></button>
                }
            </div>
            {children}
            <div className="w-full flex mt-5">
                {
                    <button onClick={handleClear} className="text-foreground/30 text-center border-[1px] border-foreground/5 hover:bg-foreground/5 cursor-pointer px-2 py-[.5em] w-full rounded-md">
                        Clear saved entries
                    </button>
                }
            </div>
        </div>
    )
}

export default OnBoardingForm
