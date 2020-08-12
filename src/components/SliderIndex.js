
import React  from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const SliderIndex = (props) => {


  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const Slider = (
    <AutoplaySlider
      // animation="cubeAnimation"
      animation="foldOutAnimation"
      className="ASlider"
      bullets={false}
      fillParent={false}
      organicArrows={true}
      startup={true}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={56000}>
      <div data-src="https://avada.theme-fusion.com/freelancer/wp-content/uploads/sites/58/2016/05/banner_images.jpg" ><p>The answer is -- Don't think about it.</p>
    </div>
      <div data-src="https://caferati.me/images/series/bojack-4.jpg" />
      <div data-src="/slider/bojack-5.jpg" />
    </AutoplaySlider>
  );

  return Slider;
}

export default SliderIndex