import Data from "../javaScript/data.js";
import Card from "../components/Card.jsx";
import "../CSS/styles.css";
export default function Cards() {
  const cardsArray = Data.map((cardDataObject) => {
    return (
      <Card
        key={cardDataObject.id}
        dataObject={cardDataObject}
      />
    );
  });
  return (
      <div className="Cards-Container snaps-inline">
        {cardsArray}
      </div>

  )

}
