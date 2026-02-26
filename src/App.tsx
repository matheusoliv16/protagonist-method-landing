import React from 'react';
import Hero from './sections/Hero/Hero';
import Problem from './sections/Problem/Problem';
import PainPoints from './sections/PainPoints/PainPoints';
import Method from './sections/Method/Method';
import Deliverables from './sections/Deliverables/Deliverables';
import Bonus from './sections/Bonus/Bonus';
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
      <WhatsappFab />
    </div>
  );
};

export default App;
