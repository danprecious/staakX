"use client"

import React, { ReactEventHandler, useEffect, useState } from 'react'
import OnBoardingForm from '../_components/multiStepFormContainer'
import NextButton from '../_components/nextButton';
import { defaultState, useOnboardingState } from '../onboardingStateHook';


const DifficultyLevel = () => {

    const [state] = useOnboardingState(defaultState)

    const [select, setSelected] = useState<string>("");

    useEffect(() => {
        setSelected(state.difficultyLevel);
    }, [])

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value as "1-4" | "5-7" | "8-10");
    };

    return (
        <OnBoardingForm linkHref="/onboarding/techstack" title='How would you rate your expertise level?'>
            <div className="flex flex-col w-full">
                <div className="">

                    <form className="w-full">

                        <div className={`${select == "1-4" ? "border-foreground/50" : "border-foreground/5"} flex gap-4 items-center py-1 my-3 border-[1px] px-3 rounded-md hover:border-foreground/50`}>
                            <input onChange={handleSelect} checked={select == "1-4"} id='1-4' type="radio" className="text-black" value="1-4" />
                            <label className='w-full' htmlFor="1-4">1 - 4</label>
                        </div>

                        <div className={`${select == "5-7" ? "border-foreground/50" : "border-foreground/5"} flex gap-4 items-center py-1 my-3 border-[1px] px-3 rounded-md hover:border-foreground/50`}>
                            <input onChange={handleSelect} checked={select == "5-7"} id='5-7' type="radio" className="text-black" value="5-7" />
                            <label className='w-full' htmlFor="5-7">5 - 7</label>
                        </div>

                        <div className={`${select == "8-10" ? "border-foreground/50" : "border-foreground/5"} flex gap-4 items-center py-1 my-3 border-[1px] px-3 rounded-md hover:border-foreground/50`}>
                            <input onChange={handleSelect} checked={select == "8-10"} id='8-10' type="radio" className="text-black" value="8-10" />
                            <label className='w-full' htmlFor="8-10">8 - 10</label>
                        </div>

                    </form>

                    <NextButton nextPage='/onboarding/reminderFrequency' stateKey='difficultyLevel' value={select} text='Submit' />
                </div>

            </div>
        </OnBoardingForm>
    )
}

export default DifficultyLevel
