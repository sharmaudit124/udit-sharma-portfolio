import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Experience } from "@/utils/Experience";

function WorkCard({ experience }: { experience: Experience }) {
    const bulletPoints = experience.description.split('*~*').filter(point => point.trim() !== '');
    return (
        <div className="max-w-screen-xs mx-auto overflow-hidden backdrop-blur-md shadow-sm">
            <Card>
                <CardHeader className="-mt-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>{experience.title}</CardTitle>
                            <CardDescription className="text-muted-foreground text-base">{experience.companyName}</CardDescription>
                        </div>
                        <div className="self-end p-0 m-0 w-fit">
                            <img src={experience.companyUrl} alt="logo" loading="lazy" />
                        </div>
                    </div>
                </CardHeader>
                <Separator className="-mt-4 mb-2" />
                <CardContent>
                    <ul className="list-disc ml-4 space-y-2">
                        {bulletPoints.map((point, index) => (
                            <li key={index} className="text-sm">{point}</li>
                        ))}
                    </ul>
                </CardContent>
                <Separator className="-mt-2 mb-2" />
                <CardFooter>
                    <p>{experience.tenure}</p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default WorkCard;
