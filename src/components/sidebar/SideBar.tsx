import { Briefcase, CalendarCheck2, Home, Layers, Lightbulb, User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Link } from 'react-router-dom';


export function SideBar({ toggleSideBar }: { toggleSideBar: () => void }) {
    return (
        <aside className="fixed top-16 left-0 h-screen w-16 flex flex-col items-center border-r py-8">
            <nav className="flex flex-1 flex-col items-center space-y-6">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to="/">
                            <button onClick={toggleSideBar} className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                                <Home size={24} className="dark:text-neutral-100" />
                            </button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='right'>
                        <p>Home</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to="/skills">
                            <button onClick={toggleSideBar} className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                                <Lightbulb size={24} className="dark:text-neutral-100" />
                            </button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='right'>
                        <p>Skills</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to="/projects">
                            <button onClick={toggleSideBar} className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                                <Layers size={24} className="dark:text-neutral-100" />
                            </button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='right'>
                        <p>Projects</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to="/experience">
                            <button onClick={toggleSideBar} className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                                <Briefcase size={24} className="dark:text-neutral-100" />
                            </button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='right'>
                        <p>Work Experience</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to="/appoint">
                            <button onClick={toggleSideBar} className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                                <CalendarCheck2 size={24} className="dark:text-neutral-100" />
                            </button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='right'>
                        <p>Book an Appointment</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link to="/about">
                            <button onClick={toggleSideBar} className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                                <User size={24} className="dark:text-neutral-100" />
                            </button>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side='right'>
                        <p>About</p>
                    </TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    );
}
