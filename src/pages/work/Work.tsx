import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import WorkCard from "./WorkCard"
import { WORK_EXPERIENCE } from "@/assets/constants/workConstants"

function Work() {
    const data = WORK_EXPERIENCE;
    return (
        <div className="mx-auto -m-24 p-6 lg:p-12">
            <Accordion type="multiple" className="w-full" defaultValue={["item-1"]}>
                <AccordionItem value="item-1" defaultValue="item-1">
                    <AccordionTrigger>Engineer - @Nagarro</AccordionTrigger>
                    <AccordionContent>
                        <WorkCard experience={data[0]} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Associate Engineer - @Nagarro</AccordionTrigger>
                    <AccordionContent>
                        <WorkCard experience={data[1]} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Trainee - @Nagarro</AccordionTrigger>
                    <AccordionContent>
                        <WorkCard experience={data[2]} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion >
        </div >
    )
}

export default Work