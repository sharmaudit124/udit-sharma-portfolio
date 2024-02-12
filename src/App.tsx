import './App.css'

import { ThemeProvider } from "@/components/theme-provider"
import { SideBar } from './components/sidebar/SideBar'
import NavBar from './components/landing/navbar/NavBar'
import { useState } from 'react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Hero from './components/hero/Hero'


function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <div className="flex-1 min-h-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div>
              <NavBar toggleSideBar={toggleSideBar} />
            </div>
            {isSideBarOpen && <SideBar />}
            <div className={isSideBarOpen ? 'ml-14' : ''}>
              <Hero />
            </div>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </>
  )
}

export default App
