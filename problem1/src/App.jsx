import './App.css'
import { ThemeProvider } from './Components/ThemeProvider'
import Header from './Components/Header'
import ThemeSwitcher from './Components/ThemeSwitcher.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'


function App() {

  return (
    <>
      <ThemeProvider>
        <Main />
        <Header />
        <Footer />
        <ThemeSwitcher />
      </ThemeProvider>
    </>
  )
}

export default App
