import React from 'react';
import Hero from './sections/Hero/Hero';
import Problem from './sections/Problem/Problem';
import PainPoints from './sections/PainPoints/PainPoints';
import Method from './sections/Method/Method';
import Deliverables from './sections/Deliverables/Deliverables';
import Bonus from './sections/Bonus/Bonus';
import Testimonials from './sections/Testimonials/Testimonials';
import About from './sections/About/About';
import FAQ from './sections/FAQ/FAQ';
import FinalCTA from './sections/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import WhatsappFab from './components/WhatsappFab/WhatsappFab';

const App: React.FC = () => {
  return (
    <div className="page">
      <Hero />
      <Problem />
      <PainPoints />
      <Method />
      <Deliverables />
      <Bonus />
      <Testimonials />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsappFab />
    </div>
  );
};

export default App;
