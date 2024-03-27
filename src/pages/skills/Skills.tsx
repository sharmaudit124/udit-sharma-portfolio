import { SKILL_DATA } from "@/assets/constants/skillsConstants"
import TechCard from "./TechCard"

function Skills() {
    return (
        <section>
            <div className="-my-6">
                <div className="mx-auto px-6 max-w-6xl text-gray-500">
                    <div className="text-center">
                        <h2 className="text-6xl text-gray-950 dark:text-white font-semibold font-logo">Skills</h2>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {SKILL_DATA.map((skills, index) => (
                            <TechCard key={index} title={skills.title} tech={skills.tech} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills