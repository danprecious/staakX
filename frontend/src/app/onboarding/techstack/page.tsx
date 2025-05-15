"use client"



import { useState } from 'react'
import OnBoardingForm from '../_components/multiStepFormContainer'
import { FaAngular, FaReact, FaTimes, FaVuejs } from 'react-icons/fa';
import { customStacks, getAllTechs } from '../utils';
import NextButton from '../_components/nextButton';


const TechStack = () => {


  const [selection, setSelection] = useState<"quickStack" | "customStack">("quickStack");

  const [technologies, setTechnologies] = useState<string[]>([]);





  const handleSelection = (selected: string) => {
    setSelection(() => {
      switch (selected) {
        case "quickStack":
          return "quickStack"
        case "customStack":
          return "customStack"
        default:
          return "quickStack"
      }
    })
  }


  const handleAddTechnologies = (item: string | string[]) => {

    setTechnologies((prev) => {
      const newTechnologies = [...prev];
      if (typeof item === "string") {
        if (!prev.includes(item)) {
          newTechnologies.push(item);
        }
      } else {
        item.forEach((it) => {
          if (!prev.includes(it)) {
            newTechnologies.push(it);
          }
        });
      }

      return newTechnologies;
    })
  }

  const handleRemoveTechnologies = (index: number) => {
    setTechnologies((prev) => {
      const newTechnologies = [...prev];
      newTechnologies.splice(index, 1);
      return newTechnologies;
    })
  }

  console.log(getAllTechs());

  console.log(technologies.length);


  return (
    <OnBoardingForm linkHref="/onboarding/reminderFrequency" title="Select technologies or stack you use regularly">
      <div className="w-full lg:max-w-[55vw]">

        <div className="w-full flex py-5">
          <button onClick={() => handleSelection("quickStack")} className={`py-[0.5em] px-3 cursor-pointer rounded-md w-full border-[1px] mx-1 border-foreground/5 ${selection == "quickStack" ? "bg-orange-400 text-stone-900" : ""}`}>Quick stack</button>
          <button onClick={() => handleSelection("customStack")} className={`py-[0.5em] px-3 cursor-pointer rounded-md w-full border-[1px] mx-1 border-foreground/5 ${selection == "customStack" ? "bg-orange-400 text-stone-900" : ""}`}>Custom stack</button>
        </div>

        <div className="text-center w-full py-5">
          {
            technologies.length <= 0 ? <p className="text-foreground/80 text-sm "> Start by selecting a stack or adding individual technologies</p>
              : (
                <div className="grid lg:grid-cols-6 grid-cols-3 md:grid-cols-5 gap-2 lg:px-5">
                  {technologies.map((item, index) => {
                    return (
                      <div key={index} className="flex gap-1 rounded-md px-2 items-center justify-between border-b-[1px] border-foreground/5 py-2 bg-orange-400">
                        <p className="text-stone-900 font-semibold text-xs">{item as string}</p>
                        <button onClick={() => handleRemoveTechnologies(index)} className="text-foreground cursor-pointer text-xs p-1 rounded-full bg-background"><FaTimes /></button>
                      </div>
                    )
                  })}
                </div>
              )
          }
        </div>

        <div className="w-full">
          {
            selection === "quickStack" ?
              (
                <div className="grid gap-4 lg:grid-cols-3 lg:p-5 my-2 grid-cols-2 md:grid-cols-3 max-h-[40vh] overflow-y-scroll">
                  {
                    Object.values(customStacks).map((stack) => {
                      return (
                        <div onClick={() => handleAddTechnologies(stack.technologies)} key={stack.id} className="rounded-[1em] border-[1px] border-foreground/10 hover:text-foreground/30 border-[] p-5 flex flex-col items-center justify-center">
                          <div className="text-[3rem] mb-3">{stack.icon}</div>
                          <h3 className="text-sm font-semibold mb-2">{stack.name}</h3>
                          <div className='text-xs hidden md:flex '>{stack.technologies.map((tech, index) => <p key={index} className="px-1">{tech}</p>)}</div>
                        </div>
                      )
                    })
                  }
                </div>
              ) :
              (
                <div className="grid gap-4">

                  <div className="grid gap-4 lg:grid-cols-3 p-5 my-2 grid-cols-2 md:grid-cols-3 max-h-[40vh] overflow-y-scroll">
                    {
                      getAllTechs().map((stack) => {
                        return (
                          <div onClick={() => handleAddTechnologies(stack.id)} key={stack.id} className="rounded-[1em] border-[1px] border-foreground/10 hover:text-foreground/30 border-[] p-5 flex flex-col items-center justify-center">
                            <div className="text-[3rem] mb-3">{stack.icon}</div>
                            <h3 className="text-sm font-semibold mb-2">{stack.name}</h3>
                            <div className='text-xs hidden md:flex '>{stack.tags.map((tech, index) => <p key={index} className="px-1">{tech}</p>)}</div>
                          </div>
                        )
                      })
                    }
                  </div>

                </div>
              )
          }
        </div>
        <NextButton nextPage='/onboarding/difficultyLevel' stateKey='techStack' text='Next' value={technologies} />
      </div>
    </OnBoardingForm>
  )
}

export default TechStack


