"use client"

import { FaGithub, FaGoogle } from "react-icons/fa"
import FormContainer from "./formContainer"
import { usePathname } from "next/navigation";
import Link from "next/link";


const AuthComponent:
    React.FC<{
        title: string,
        emailUrl: string,
        googleUrl: string,
        githubUrl: string,
        btnText: string,
    }> = ({ title,
        emailUrl,
        googleUrl,
        githubUrl,
        btnText, }) => {



        const path = usePathname();

        console.log(path);




        return (


            <div className="h-[80%] py-10 lg:px-20 w-full flex-c-center">
                <h5 className="text-[] mb-3">{title}</h5>
                <div className="w-full">
                    <input type="email" name="email" id="" placeholder="yourname@demo.com" className="px-2 py-[.5em] w-full border-[1px] rounded-md border-foreground/10 my-3" />
                    <button className="text-background bg-foreground hover:bg-foreground/80 cursor-pointer  px-2 py-[.5em] w-full rounded-md">{btnText}</button>
                </div>

                <div className="w-full flex-r-center px-2 my-6">
                    <div className="h-[2px] bg-foreground/10 w-[90%]"></div>
                    <p className="w-full px-2">or sign in with</p>
                    <div className="h-[2px] bg-foreground/10 w-[90%]"></div>
                </div>

                <div className="w-full flex">
                    <button className="w-full py-[.5em] border-foreground/10 border-[1px] cursor-pointer hover:text-foreground/80 mr-2 hover:border-foreground/30 rounded-md flex justify-center items-center"><FaGithub /> <span className="ml-2 ">Github</span></button>
                    <button className="w-full py-[.5em] border-foreground/10 border-[1px] cursor-pointer hover:text-foreground/80 ml-2 hover:border-foreground/30 rounded-md flex justify-center items-center"><FaGoogle /> <span className="ml-2 ">Google</span></button>
                </div>
                <div className="my-2">
                    {path.includes("signIn")
                        ? <p className="text-foreground/50 text-center mt-4 text-sm">
                            Don't have an account?
                            <span className="text-foreground cursor-pointer ml-2">
                                <Link href="/auth/signup">Sign up</Link>
                            </span>
                        </p>
                        : <p className="text-foreground/50 text-center mt-4 text-sm">
                            Already have an account?
                            <span className="text-foreground cursor-pointer  ml-2">
                                <Link href="/auth/signIn">Sign in</Link>
                            </span>
                        </p>}
                </div>

                <div className="my-2">
                    <p className="text-foreground/50 text-center mt-4 text-sm">By signing up you agree to our <span className="text-foreground cursor-pointer">terms of service</span> and <span className="text-foreground cursor-pointer">privacy policy</span></p>
                </div>
            </div>



        )
    }

export default AuthComponent
