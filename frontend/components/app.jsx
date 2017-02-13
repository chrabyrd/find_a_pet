import React from 'react';
import HeaderContainer from './header/header_container';

const App = props => (
  <div className="page">
    <HeaderContainer />

    <div className="content">
      {props.children}
    </div>
  </div>
);

export default App;
