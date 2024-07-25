import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header"; // Added this import statement
import Hero from "./components/Hero";

const App=()=>{
  return (
    <>
  <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
    <Header/>
    <Hero/>
    <Benefits/>
    <Collaboration/>
  </div>

  <ButtonGradient/>
  </>
  );
};

export default App;