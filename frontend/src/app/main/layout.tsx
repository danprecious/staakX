"use client"

import MainHeader from "./_components/header"
import SideBarContainer from "./_components/sideBar"
import MainAppStateProvider from "./_stateManager/context"





const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // if needed perform auth check here. 

    return (
        <MainAppStateProvider>
            <div className="lg:mx-20">
                <MainHeader />
                <div className="flex items-center">

            <SideBarContainer />F
                <div className="rounded-[1em]  lg:w-[80%] h-[88dvh] border">
                {children}
                </div>
                </div>
                    
            </div>
        </MainAppStateProvider>
    )
}

export default MainLayout