import React from 'react';
import Carousel from 'nuka-carousel';

const PetSlider = React.createClass({
  mixins: [Carousel.ControllerMixin],

  getInitialState() { return { slideIndex: 0 }; },

  render() {

    return (
      <div className="carousel-container">
        <Carousel autoplay={true} easing="easeInSine" edgeEasing="easeInSine" wrapAround={true}>
          <img src={'assets/slide-1.jpg'} />
          <img src={'assets/slide-2.jpg'} />
          <img src={'assets/slide-3.jpg'} />
          <img src={'assets/slide-4.jpg'} />
          <img src={'assets/slide-5.jpg'} />
        </Carousel>
      </div>
    );
  }
});

export default PetSlider;
