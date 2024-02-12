import { Download, Send } from "lucide-react";
import { Button } from "../ui/button";
import Socials from "../socials/Socials";
import MyImg from "../myImg/MyImg";

function Hero() {
    return (
        <section className="py-12 xl:py-24 xl:pt-28">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left select-none">
                        <div className="text-sm uppercase font-semibold mb-4 tracking-[4px]">Full Stack Developer</div>
                        <h1 className=" mb-4 text-6xl xl:text-7xl xl:leading-80 tracking-tighter font-bold">
                            Hey there! Udit here! Let's craft together!👋</h1>
                        <p className="text-muted-foreground text-lg mb-8 font-light max-w-[490px] mx-auto xl:mx-0">
                            Where innovation meets execution. Elevate your digital presence with expertly crafted solutions spanning frontend and backend development.
                            Plus, leverage our freelance expertise and captivating content creation to bring your vision to life
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">
                            <Button variant={"outline"}>
                                <Send className="mr-2 h-4 w-4" />Contact Me
                            </Button>
                            <Button variant={"outline"}>
                                <Download className="mr-2 h-4 w-4" />
                                Resume</Button>
                        </div>
                        <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconStyles="rounded-lg p-1.5 text-gray-700 dark:text-gray-100 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700 mb-2" />

                        <div className="text-green-900 dark:text-green-400 flex items-center justify-center xl:justify-start">
                            <span className="mr-3 animate-glow inline-flex rounded-full bg-green-400 h-2 w-2"></span>
                            <span>Available for work</span>
                        </div>
                    </div>
                    <div className="hidden xl:flex relative">
                        <div className="bg-hero w-[500px] h-[500px] bg-no-repeat absolute -top-16 -right-8 overflow-hidden">
                            <MyImg containerStyles="w[-410px] h-[362px] bg-no-repeat relative -right-30" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
