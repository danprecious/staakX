"use client"

import React, { ReactEventHandler, useEffect, useState } from 'react'
import OnBoardingForm from '../_components/multiStepFormContainer'
import NextButton from '../_components/nextButton';
import { defaultState, useOnboardingState } from '../onboardingStateHook';


const Mission = () => {

  const [state] = useOnboardingState(defaultState)

  const [select, setSelected] = useState<string>("");


   useEffect(() => {
      setSelected(state.mission);
    }, [])

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value as "learn" | "improve");
  };

  return (
    <OnBoardingForm linkHref="/onboarding/techstack" title='What is your goal?'>
      <div className="flex flex-col w-full">
        <div className="">
          <form className="w-full">

            <div className={`${select == "learn" ? "border-foreground/50" : "border-foreground/5"} flex gap-4 items-center py-1 my-3 border-[1px] px-3 rounded-md hover:border-foreground/50`}>
              <input onChange={handleSelect} checked={select == "learn"} id='learn' type="radio" className="text-black" value="learn" />
              <label className='w-full' htmlFor="learn">Learn new technologies</label>
            </div>
            <div className={`${select == "improve" ? "border-foreground/50" : "border-foreground/5"} flex gap-4 items-center py-1 my-3 border-[1px] px-3 rounded-md hover:border-foreground/50`}>
              <input onChange={handleSelect} checked={select == "improve"} id='improve' type="radio" className="text-black" value="improve" />
              <label className='w-full' htmlFor="improve">Improve on existing stack</label>
            </div>

          </form>
          <NextButton nextPage='/onboarding/techstack' stateKey='mission' value={select} text='Next' />
        </div>

      </div>
    </OnBoardingForm>
  )
}

export default Mission
