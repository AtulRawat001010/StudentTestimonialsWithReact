import { useState } from 'react';
import Card from './Card'

const Testimonials = (props) => {
    let reviews = props.reviews;

    let [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length -1);
        }
        else {
            setIndex(index-1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }
    }

    function surpriseHandler() {
        let randIndex = Math.floor(Math.random() * reviews.length);

        setIndex(randIndex);
    }
    
  return (
    <div>
        <Card review = {reviews[index]} />

        <div>
            <button onClick={leftShiftHandler}>{`<`}</button>
            <button onClick={rightShiftHandler}>{`>`}</button>
        </div>

        <div>
            <button onClick={surpriseHandler}>{"Surprise me"}</button>
        </div>

    </div>
  )
}

export default Testimonials