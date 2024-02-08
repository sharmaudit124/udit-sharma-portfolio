import { ThemeToggler } from '../../ThemeToggler'
import Logo from '../logo/Logo'

function NavBar() {
    return (
        <>
            <nav className="fixed z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/80 backdrop-blur-md flex items-center gap-2">
                <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
                    {/* <img className="h-24 w-fit p-0" src="src\assets\udit-black-logo.svg" alt="Udit Sharma" /> */}
                    <Logo/>
                    <ThemeToggler />
                </div>
            </nav>
            <div className="h-12 w-full" />
        </>
    )
}

export default NavBar