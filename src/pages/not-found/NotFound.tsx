import { Button } from '@/components/ui/button'
import { ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate } from "react-router-dom";

export function NotFound() {
    const history = useNavigate();
    return (
        <div className="py-10">
            <div className="text-center select-none">
                <p className="text-6xl lg:text-8xl font-semibold text-black dark:text-neutral-100">404</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-neutral-100 sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-neutral-100">
                    Sorry, we could not find the page you are looking for.
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-3">
                    <Button onClick={() => history(-1)}>
                        <ArrowLeft size={16} className="mr-2" />
                        Go back
                    </Button>
                    <Link to={"/"}>
                        <Button>
                            <Home size={16} className='mr-2' />
                            Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
