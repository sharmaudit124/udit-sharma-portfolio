import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import { SideBar } from './components/sidebar/SideBar'
import NavBar from './components/landing/navbar/NavBar'
import { useState } from 'react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Hero from './components/hero/Hero'
import Home from './pages/home/Home';
import About from './pages/about/About';


function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <TooltipProvider>
            <div className="flex-1 min-h-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
              <div>
                <NavBar toggleSideBar={toggleSideBar} />
              </div>
              {isSideBarOpen && <SideBar />}
              <div className={isSideBarOpen ? 'ml-14' : ''}>
                <section className="py-10 xl:py-24 xl:pt-24">
                  <Routes>
                    <Route path="/" element={<Hero childComponent={<Home />} />} />
                    <Route path="/about" element={<Hero childComponent={<About />} />} />
                  </Routes>
                </section>
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
