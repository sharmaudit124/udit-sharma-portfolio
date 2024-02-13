import MyImg from "../myImg/MyImg";
import { ReactNode } from "react";

interface HeroProps {
    childComponent: ReactNode;
}
function Hero({ childComponent }: HeroProps) {

    return (
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                <div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
                    {childComponent}
                </div>
                <div className="hidden lg:flex relative">
                    <div className="bg-hero w-[500px] h-[500px] bg-no-repeat absolute -top-16 -right-8 overflow-hidden">
                        <MyImg containerStyles="w[-410px] h-[362px] bg-no-repeat relative -right-30" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
