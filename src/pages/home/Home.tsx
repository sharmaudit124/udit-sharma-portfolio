import { MAIL_TO, RESUME_LINK } from "@/assets/constants/constants";
import Socials from "@/components/socials/Socials";
import { Button } from "@/components/ui/button";
import { ExternalLink, Send } from "lucide-react";


function Home() {

    function openResume() {
        window.open(RESUME_LINK, "_blank");
    }

    return (
        <div className="select-none">
            <div className="text-sm uppercase font-semibold mb-4 tracking-[4px]">Full Stack Developer | Freelancer</div>
            <h1 className=" mb-4 text-6xl xl:text-7xl xl:leading-80 tracking-tighter font-bold">
                Hey! Udit here!👋</h1>
            <p className="text-muted-foreground text-lg mb-8 font-light max-w-[490px] mx-auto xl:mx-0">
            Empowering digital journeys as a full-stack developer, freelance enthusiast,
             and content creator. Crafting code, shaping experiences, and sharing insights 
            – bridging innovation with imagination to redefine possibilities.
            </p>
            <div className="flex flex-col gap-y-3 lg:flex-row gap-x-3 mb-6">
                <Button variant={"outline"} onClick={(e) => {
                    window.location.href = MAIL_TO;
                    e.preventDefault();
                }}>
                    <Send className="mr-2 h-4 w-4" />Contact Me
                </Button>
                <Button variant={"outline"} onClick={openResume}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Resume</Button>
            </div>
            <Socials containerStyles="flex gap-x-6 items-center justify-center lg:justify-start"
                iconStyles="rounded-lg p-1.5 text-gray-700 dark:text-gray-100 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700 mb-2" />

            <div className="text-green-900 dark:text-green-400 flex items-center justify-center lg:justify-start">
                <span className="mr-3 animate-glow inline-flex rounded-full bg-green-400 h-2 w-2"></span>
                <span>Available for work</span>
            </div>
        </div>
    )
}

export default Home