import { Menu } from 'lucide-react'
import { ThemeToggler } from '../../ThemeToggler'
import Logo from '../logo/Logo'

function NavBar({ toggleSideBar }: { toggleSideBar: () => void }) {
    return (
        <>
            <nav className="fixed z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/20 backdrop-blur-md flex items-center gap-2">
                <div className="md:max-w-screen-xl mx-auto flex items-center justify-between w-full">
                    <div className='flex items-center justify-center'>
                        <button className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-700"
                            onClick={toggleSideBar}>
                            <Menu size={24} className="dark:text-neutral-100" />
                        </button>
                        <span className='md:p-8 p-4'>
                            <Logo />
                        </span>
                    </div>
                    <ThemeToggler />
                </div>
            </nav>
            <div className="h-12 w-full" />
        </>
    )
}

export default NavBar