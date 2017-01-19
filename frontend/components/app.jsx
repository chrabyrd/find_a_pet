import React from 'react';
import HeaderContainer from './header/header_container';
import SearchBarContainer from './header/search_bar_container';

const App = props => (
  <div className="page">
    <HeaderContainer />
    <SearchBarContainer />
    <div className="content">{props.children}</div>
    <div className="footer">Footer</div>
  </div>
);

export default App;
