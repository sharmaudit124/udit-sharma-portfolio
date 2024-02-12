import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-600 rotate-0 scale-100 transition-all" />}
          {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent side='bottom'>
        <p>Theme</p>
      </TooltipContent>
    </Tooltip>
  );
}
