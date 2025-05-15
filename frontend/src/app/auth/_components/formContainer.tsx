


const FormContainer: React.FC<{children: React.ReactNode, title: string}> = ({children, title}) => {
  return (
    <div className="rounded-[1em] lg:w-[40%] lg:h-[80vh] h-[60vh] bg-background flex-c-center p-5   ">
        <div className="">
            <h1 className="font-bold text-[1.5rem] text-center text-orange-">
                {title} <span className="text-orange-400">staak<span className="text-foreground text-shadow-stone-400 text-shadow-md">X</span></span>
                </h1> 
            </div>
            {children}
    </div>
  )
}

export default FormContainer
