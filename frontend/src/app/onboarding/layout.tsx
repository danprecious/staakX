"use client"

const OnBoardingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center flex-col justify-center min-h-[100dvh] bg-foreground/5 py-5 px-2">
            <div className="">
                <h1 className="text-orange-400 text-[3rem] mb-5 hidden">
                    staak<span className="text-foreground text-shadow-stone-400 text-shadow-md">X</span>
                </h1>
            </div>
            {children}
        </div>
    )
}

export default OnBoardingLayout