import './App.css'
import Navbar from './components/Navbar'
import Poster from './components/Poster'
import NavLink from './components/NavLink'
import Prerequisite from './components/Prerequisite'
import ExamDetails from './components/ExamDetails'
import Modules from './components/Modules'
import Skills from './components/Skills'
import Opportunities from './components/Opportunities'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Poster />
      <NavLink />
      <Prerequisite />
      <ExamDetails />
      <Modules />
      <Skills />
      <Opportunities />
      <Footer />
    </>
  )
}

export default App
