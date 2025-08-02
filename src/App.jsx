import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </main>
  )
}

export default App