import Socials from "@/components/socials/Socials"
import { Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

function About() {
    function getYear(): number {
        const startDate: Date = new Date('2022-09-11');
        const currentDate: Date = new Date();
        const diffInMonths: number = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
            (currentDate.getMonth() - startDate.getMonth()) +
            (currentDate.getDate() - startDate.getDate()) / 30;

        const experienceInYears: number = parseFloat((diffInMonths / 12).toFixed(1));
        return experienceInYears;
    }

    return (
        <>
            <div className="text-sm uppercase font-semibold mb-4 tracking-[4px] select-none">Reach out to me!</div>
            <h1 className=" mb-4 text-6xl xl:text-7xl xl:leading-80 tracking-tighter font-bold select-none">
                Udit Sharma</h1>
            <div className="text-sm font-semibold mb-4 tracking-[4px] select-none">{getYear()} years of experience</div>
            <p className="text-muted-foreground text-lg mb-8 font-light max-w-[490px] mx-auto xl:mx-0 select-none">
                Feel free to reach out to me whether you want to discuss a project or just say <strong>HI!</strong> My inbox is open to everyone.
            </p>
            <div className="flex flex-col gap-y-3 mx-auto lg:mx-0 mb-6">
                <div className="flex flex-row gap-x-3">
                    <Mail /><u><Link to="mailto:udit.sde@gmail.com">udit.sde@gmail.com</Link></u>
                </div>
                <div className="flex flex-row gap-x-3 select-none">
                    <Phone /><strong>+91-XXXXXXXXXX</strong>
                </div>
            </div>
            <Socials containerStyles="flex gap-x-6 mx-auto lg:mx-0"
                iconStyles="rounded-lg p-1.5 text-gray-700 dark:text-gray-100 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700 mb-2" />

            <div className="text-green-900 dark:text-green-400 flex items-center justify-center lg:justify-start">
                <span className="mr-3 animate-glow inline-flex rounded-full bg-green-400 h-2 w-2"></span>
                <span>Available for work</span>
            </div>
        </>
    )
}

export default About