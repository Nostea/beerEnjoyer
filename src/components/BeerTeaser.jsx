import "./BeerTeaser.css";
import { Link } from "react-router-dom";

const BeerTeaser = (props) => {
  return (
    <>
      <article className="teaser-beer-card">
        <img src={props.imgURL} alt="" />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <Link to={props.routerLink}>{props.linkText}</Link>
      </article>
    </>
  );
};

export default BeerTeaser;
