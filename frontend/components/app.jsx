import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <h1>FindAPet!(app.jsx)</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
