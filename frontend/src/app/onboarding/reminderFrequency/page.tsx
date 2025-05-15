"use client"

import React, { ReactEventHandler, useEffect, useRef, useState } from 'react'
import OnBoardingForm from '../_components/multiStepFormContainer'
import NextButton from '../_components/nextButton';
import { defaultState, useOnboardingState } from '../onboardingStateHook';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const ReminderFrequency = () => {

    const [state] = useOnboardingState(defaultState)

    const [selectedTime, setSelectedTime] = useState<string>("");
    const [AmPm, setAmPm] = useState<string>("AM");






    const timeData = ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"];

    const [currentTimeIndex, setCurrentTimeIndex] = useState<number>(8)

    const defaultTimes = {
        nextTime: currentTimeIndex == (timeData.length - 1) ? timeData[0] : timeData[(currentTimeIndex - 1)],
        currentTime: timeData[currentTimeIndex],
        prevTime: timeData[(currentTimeIndex + 1)],
    }

    const [time, setTime] = useState<{ nextTime: string, currentTime: string, prevTime: string }>(defaultTimes);


    const handleTimeUp = () => {
        setCurrentTimeIndex((prev) => {
            const newIndex = prev === timeData.length - 1 ? 0 : prev + 1;

            // Update time state immediately using the newIndex
            setTime({
                currentTime: timeData[newIndex],
                prevTime: timeData[newIndex === timeData.length - 1 ? 0 : newIndex + 1],
                nextTime: timeData[newIndex === 0 ? timeData.length - 1 : newIndex - 1]
            });

            return newIndex;
        });
    }


    const handleTimeDown = () => {
        setCurrentTimeIndex((prev) => {
            const newIndex = prev === 0 ? timeData.length - 1 : prev - 1;

            // Update time state immediately using the newIndex
            setTime({
                currentTime: timeData[newIndex],
                prevTime: timeData[newIndex === timeData.length - 1 ? 0 : newIndex + 1],
                nextTime: timeData[newIndex === 0 ? timeData.length - 1 : newIndex - 1]
            });
            return newIndex;
        });
    }

    const handleAmPm = (time: string) => {
        setAmPm(() => {
            if (time == "AM") {
                return "AM"
            }
            return "PM"
        })
    }
    const reminderTime = time.currentTime + AmPm;
    useEffect(() => {
        setSelectedTime(reminderTime);
        console.log(reminderTime, selectedTime);
    }, [reminderTime]);





    return (
        <OnBoardingForm linkHref="/onboarding/techstack" title='When do you want your reminders?'>
            <div className="flex flex-col w-full">
                <div className="">

                    <div className="flex-r-center w-full my-10 ">
                        <div className="flex-c-center w-full ">
                            <button className=" w-full bg-gradient-to-b from-foreground/5 to-foreground/30 bg-clip-text text-transparent">{time.prevTime}</button>
                            <div className="flex items-center">
                                <button className="w-full text-[1.5rem] py-5">{time.currentTime}</button>
                                <div className="ml-5 flex">
                                    <button onClick={() => handleAmPm("AM")} className={`${AmPm === "AM" ? "bg-foreground/80 text-background" : "text-foreground/50"} border-[1px] mr-2 border-solid border-foreground/5 p-2 text-xs rounded-md`}>AM</button>
                                    <button onClick={() => handleAmPm("PM")} className={`${AmPm === "PM" ? "bg-foreground/80 text-background" : "text-foreground/50"} border-[1px] border-solid border-foreground/5 p-2 text-xs rounded-md`}>PM</button>

                                </div>
                            </div>
                            <button className="w-full bg-gradient-to-b from-foreground/30  to-foreground/5 bg-clip-text text-transparent">{time.nextTime}</button>
                        </div>
                        <div className="flex items-center">


                            <div className="flex-c-center">

                                <button onClick={handleTimeUp} className="text-[1.2rem] my-2 cursor-pointer">
                                    <FaAngleUp />
                                </button>
                                <button onClick={handleTimeDown} className="text-[1.2rem] my-2 cursor-pointer">
                                    <FaAngleDown />
                                </button>
                            </div>
                        </div>
                    </div>


                    <NextButton nextPage='/onboarding/reminderFrequency' stateKey='reminderFrequency' value={selectedTime} text='Submit' />
                </div>

            </div>
        </OnBoardingForm>
    )
}

export default ReminderFrequency;









