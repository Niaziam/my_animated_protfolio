import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <div className='bg-dark relative overflow-y-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className=''>
        <Contact />
      </div>
    </div>
  );
}

export default App;
