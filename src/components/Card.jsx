import "../CSS/styles.css";
export default function Card(props) {
  const { dataObject } = props;
  const {
    title,
    description,
    price,
    coverImg,
    stats,
    location,
    openSpots,
  } = dataObject;
  const { rating, reviewCount } = stats;
    const alt = coverImg.replace(".png", "");
    console.log(title)
  let badgeText
  if(openSpots === 0 ){
    badgeText= "SOLD OUT"
  }else if(location === "Online"){
    badgeText="ONLINE"
  }else{
    badgeText=location
  }
  return (
    <div className="Card">
      <div className="image-container">
        {badgeText && <div className="experience-progress">{badgeText}</div>}
        <img
          className="card-image"
          src={`images/${coverImg}`}
          alt={alt}
          title={title}
        />
      </div>
      <div className="review-container">
        <img
          src="images/Star.png"
          alt=" photo of a Star"
          title="Star"
          className="star-icon"
        />
        <div className="review">
          <span className="rating">{rating}</span>{" "}
          <span className="change-text-color">
            (<span className="number-of-people">{reviewCount}</span>)
             <span className="country"> • USA</span>{" "}
          </span>
        </div>
      </div>
      <div className="about-program">{title}</div>
      <div className="price-container">
        <span className="money">
          From $<span className="dollar">{price}</span>
        </span>{" "}
        / person
      </div>
    </div>
  );
}
