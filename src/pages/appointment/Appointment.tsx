import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

function Appointment() {
    useEffect(() => {
        (
            async function () {
                const cal = await getCalApi();
                cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
            })();
    }, [])

    return (
        <>
            <h1 className=" mb-4 text-6xl xl:text-7xl xl:leading-80 tracking-tighter font-bold select-none">
                Udit Sharma</h1>
            <div className="text-lg font-semibold mb-4 tracking-[4px] select-none">🚀 Schedule your personalized meeting today and let's embark on an exciting journey together! </div>
            <div className="text-md text-muted-foreground mb-6 tracking-[4px] select-none">Don't let your dreams stay dreams.
                Take the first step towards success by booking your spot on my calendar.
                Together, we'll strategize, innovate, and achieve greatness! ✨🌟</div>
            <div className="flex justify-center lg:justify-start mb-6">
                <Button
                    data-cal-namespace=""
                    data-cal-link="udit.sde/30min"
                    data-cal-config='{"layout":"week_view"}'>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Calendar
                </Button>
            </div>
        </>

    );
}

export default Appointment