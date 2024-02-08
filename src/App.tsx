import './App.css'
import NavBar from './components/landing/navbar/NavBar'
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <NavBar />
      </ThemeProvider>
    </>
  )
}

export default App
