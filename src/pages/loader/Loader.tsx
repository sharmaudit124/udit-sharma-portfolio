import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { LOADING_TIME } from '@/assets/constants/constants';

function Loader() {
    const [loading, setLoading] = useState(true);
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, LOADING_TIME);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) {
            controls.start({
                opacity: 1,
                pointerEvents: 'auto',
                transition: { duration: 1 }
            });
        } else {
            controls.start({
                opacity: 0,
                pointerEvents: 'none',
                transition: { duration: 1 }
            });
        }
    }, [loading, controls]);

    return (
        <motion.div
            className="fixed backdrop-filter backdrop-blur-md bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-screen top-0 left-0 w-full flex justify-center items-center z-10"
            animate={controls}
        >
            <div className="p-4 rounded-md backdrop-filter backdrop-blur-md">
                <div className="flex justify-center">
                    <>
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-black dark:bg-white rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0],
                                transition: { duration: 1, repeat: 2 }
                            }}
                        />
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-black dark:bg-white rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0],
                                transition: { duration: 1, repeat: 1.8, delay: 0.2 }
                            }}
                        />
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-black dark:bg-white rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0],
                                transition: { duration: 1, repeat: 1.6, delay: 0.4 }
                            }}
                        />
                    </>
                </div>
            </div>
        </motion.div>
    )
}

export default Loader