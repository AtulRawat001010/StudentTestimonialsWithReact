import React from "react";
import Testimonials from "./component/Testimonials";
import reviews from './data'

const App = () => {
  return (
    <div>
      <div><h1>Our Testimonials</h1></div>
      <div>

      </div>
      <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
