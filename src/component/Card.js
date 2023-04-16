
const Card = (props) => {
    let review = props.review;
  return (
    <div>
        <div>
            <img src={review.image} alt="" />
        </div>

        <div>
            <p>{review.name}</p>
        </div>

        <div>
            <p>{review.job}</p>
        </div>
        
        <div>
            <p>"</p>
        </div>

        <div>
            <p>{review.text}</p>
        </div>

        <div>
            <p>"</p>
        </div>

    </div>
  )
}

export default Card