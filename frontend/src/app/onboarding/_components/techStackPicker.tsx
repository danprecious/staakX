"use client"

import React, { useState } from 'react'
import { getAllTechs } from '../utils';

const TechStackPicker = () => {

    const [technologies, setTechnologies] = useState<Array<string>>([]);
    const handleAddTechnologies = (item: string | Array<string>) => {

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


    return (

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
    )
}

export default TechStackPicker
