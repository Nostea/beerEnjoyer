import "./BeerCard.css";
import { Link } from "react-router-dom";

const BeerCard = (props) => {
  return (
    <>
      <article className="beer-card">
        <img src={props.imgURL} alt="" />
        <div>
          <h2>{props.beerTitle}</h2>
          <span>{props.tagline}</span>
          <p>{props.createdBy}</p>
          <Link to={props.beerID}>
            <button type="button">{props.buttonText}</button>
          </Link>
        </div>
      </article>
    </>
  );
};

export default BeerCard;
