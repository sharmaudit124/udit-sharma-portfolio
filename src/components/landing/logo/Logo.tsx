import { cn } from '@/lib/utils'

function Logo() {
    return (
        <>
            <div className="hover:opacity-90 transition flex items-center gap-x-2">
                <div className='font-logo'>
                    <div className={cn('dark:text-neutral-100 select-none text-black font-extrabold text-4xl')}>Udit Sharma</div>
                    <div className={`hidden md:block ${cn('dark:text-neutral-100 select-none text-neutral-900 font-semibold text-lg')}`}>
                        Developer - Freelancer
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logo