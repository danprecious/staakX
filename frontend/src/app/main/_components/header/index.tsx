"use client"

import React, { useContext } from 'react'
import Logo from '../logo'
import { MainAppContext } from '../../_stateManager/context'
import { PiHamburgerDuotone } from 'react-icons/pi'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi'
import { BiMenuAltLeft, BiMenuAltRight } from 'react-icons/bi'

const MainHeader = () => {


    const { state, dispatch } = useContext(MainAppContext);

    const handleMenu = () => {
        console.log(state.menuOpen);
        console.table(state);
        dispatch({ type: "OPEN_MENU" })
    }

    return (
        <header className='flex lg:px-1  px-3 py-5 items-center'>

            <button onClick={handleMenu} className='text-[1.5rem] mr-3 cursor-pointer'>
                {state.menuOpen ? <BiMenuAltRight /> : <BiMenuAltLeft />}
            </button>

            <div className="lg:hidde">
                <Logo />
            </div>
        </header>
    )
}

export default MainHeader
