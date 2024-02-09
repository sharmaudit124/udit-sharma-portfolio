import './App.css'

import { ThemeProvider } from "@/components/theme-provider"
import { SideBar } from './components/sidebar/SideBar'
import NavBar from './components/landing/navbar/NavBar'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <NavBar />
        <SideBar />
      </ThemeProvider>
    </>
  )
}

export default App
