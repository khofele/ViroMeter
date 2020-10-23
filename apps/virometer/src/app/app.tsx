import React, { useEffect, useState } from 'react';
import { Message } from '@virometer-gmbh/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (

    <body>
     <header>
     <div className="options">
      <img className="logo" src="/assets/virometerLogo.png" alt="heart" />
      <h1 className="heading">ViroMeter</h1>
     </div>
    </header>
        <main>
          <section>
            <img className="section-img" src="/assets/table.png" alt="important graph"></img>
          </section>
          <section>
            <img className="section-img" src="/assets/mapDeutschland.png" />
          </section>
          <section className="bigbottom">
          <img className="section-img" src="/assets/zahlen.png" />
          </section>
          <section className="bigtitle">
          <img className="section-img" src="/assets/liniendiagramm.png" />
          </section>
          <section>
          <img className="section-img" src="/assets/pieChart.png" />
          </section>
        </main>
  </body>
  
  );
};

export default App;
