"use client"

import React, { useEffect, useState } from 'react'
import OnBoardingForm from '../_components/multiStepFormContainer'
import NextButton from '../_components/nextButton'
import { defaultState, useOnboardingState } from '../onboardingStateHook'


const Username = () => {

  const [inputState, setInputState] = useState("");

  const [state] = useOnboardingState(defaultState)

  useEffect(() => {
    setInputState(state.username);
  }, [])

  return (
    <OnBoardingForm linkHref='/onboarding/mission' title='Enter your preferred username'>
      <div className="w-full flex flex-col">
        <form className="w-full">
          <input value={inputState} onChange={(e) => setInputState(e.target.value)} type="email" name="email" id="" placeholder="e.g techHaven23" className="px-2 py-[.5em] w-full border-[1px] rounded-md border-foreground/10 my-3" />
        </form>

      </div>
      <div className="flex w-full">
        <NextButton nextPage='/onboarding/mission' text="Next" stateKey="username" value={inputState} />
      </div>
    </OnBoardingForm>
  )
}

export default Username
