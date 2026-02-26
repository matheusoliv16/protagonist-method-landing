import React from 'react';
import Hero from './sections/Hero/Hero';
import Problem from './sections/Problem/Problem';
import PainPoints from './sections/PainPoints/PainPoints';
import WhatsappFab from './components/WhatsappFab/WhatsappFab';

const App: React.FC = () => {
  return (
    <div className="page">
      <Hero />
      <Problem />
      <PainPoints />
      <WhatsappFab />
    </div>
  );
};

export default App;
