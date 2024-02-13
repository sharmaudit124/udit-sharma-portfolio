import { Link } from "react-router-dom"

function Logo() {
    return (
        <>
            <div className="hover:opacity-90 transition flex items-center gap-x-2">
                <Link to="/">
                    <div className='font-logo'>
                        <div className="dark:text-neutral-100 select-none text-black font-extrabold md:text-4xl text-3xl">Udit Sharma</div>
                        <div className="hidden md:block dark:text-neutral-100 select-none text-neutral-900 font-semibold text-lg">
                            Developer - Freelancer
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Logo