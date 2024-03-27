import { TechCardProps } from "@/utils/Skills";

function TechCard({ title, tech }: TechCardProps) {

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
            <div className="relative">
                <div className="font-logo mt-1 pb-6 rounded-b-[--card-border-radius] dark:text-neutral-100 text-zinc-950 text-3xl font-bold">
                    <h1>{title}</h1>
                </div>
                <div className="flex flex-wrap gap-3">
                    {tech.map((item, i) => (
                        <div
                            key={i}
                            style={{ borderColor: getRandomColor() }}
                            className=" rounded-md text-md p-2 border dark:text-neutral-100 text-zinc-950">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechCard