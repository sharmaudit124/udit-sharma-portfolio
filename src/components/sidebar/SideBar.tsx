import { Briefcase, Home, Layers, Lightbulb, Phone, User } from 'lucide-react';

export function SideBar() {
    return (
        <aside className="fixed top-16 left-0 h-screen w-16 flex flex-col items-center border-r py-8">
            <nav className="flex flex-1 flex-col items-center space-y-6">
                <a href="#" className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                    <Home size={24} className="dark:text-neutral-100" />
                </a>
                <a href="#" className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                    <Lightbulb size={24} className="dark:text-neutral-100" />
                </a>
                <a href="#" className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                    <Layers size={24} className="dark:text-neutral-100" />
                </a>
                <a href="#" className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                    <Briefcase size={24} className="dark:text-neutral-100" />
                </a>
                <a href="#" className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                    <Phone size={24} className="dark:text-neutral-100" />
                </a>
                <a href="#" className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700">
                    <User size={24} className="dark:text-neutral-100" />
                </a>
            </nav>
        </aside>
    );
}
