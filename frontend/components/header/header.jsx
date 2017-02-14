import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';
import SearchBarContainer from './search_bar_container';
import PetSlider from '../content/petSlider';
import Modal from 'react-modal';

const Header = () => {

  return (
    <div id="header" className="header">
      <Modal
        className="header-modal"
        overlayClassName="header-overlay"
        isOpen={true}
        parentSelector={() => (
          document.getElementById("header")
        )}
        contentLabel="header-modal"
      >
        <div className="header-info">
          <Link to="/" className="header-logo">
            <div className="header-title">
              <h2>Find A Pet!</h2>
            </div>
          </Link>
          <GreetingContainer />
        </div>

        <SearchBarContainer />

      </Modal>

      <PetSlider />

    </div>
  );
};


export default Header;
