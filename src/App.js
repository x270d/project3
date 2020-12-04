import React, { useState, useEffect } from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles"
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Relationships from './components/Relationships'
import Requirements from './components/Requirements'
import Users from './components/Users'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import { theme } from './Theme'

export const ThemeContext = React.createContext();
export const ThemeScreen = React.createContext();

export default function App(props) {
  const [reset, setReset] = useState(false);
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    if (document.documentElement.scrollWidth < 768) {
      return setScreen(3)
    }
    if (document.documentElement.scrollWidth > 768) {
      return setScreen(6)
    }
  }, [])

  return (
    <div>

      <MuiThemeProvider theme={theme} >
        <ThemeContext.Provider value={{ reset, setReset }} >
          <ThemeScreen.Provider value={screen} >
            <Header />
            <Banner />
            <About />
            <Relationships />
            <Requirements />
            <Users />
            <SignUp />
            <Footer />
          </ThemeScreen.Provider>
        </ThemeContext.Provider>
      </MuiThemeProvider>

    </div>
  )
}
