import Header from "../../components/Header";
import "./DetailPage.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const [beerData, setBeerData] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setBeerData(data));
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const find = beerData.find((item) => item._id === id);
    setDetails(find);
  }, [beerData]);
  console.log(beerData);
  console.log(details);

  return (
    <>
      <section className="detail-page">
        {details ? (
          <>
            <img src={details.image_url} alt="" className="product-img" />

            <article>
              <h1>{details.name}</h1>
              <span className="tagline">{details.tagline}</span>
              <div className="span-flex">
                <span className="extra-detail">First Brewed:</span>
                <span className="extra-detail"> {details.first_brewed}</span>
              </div>
              <div className="span-flex">
                <span className="extra-detail">Attenuation level:</span>
                <span className="extra-detail">{details.attenuation_level}</span>
              </div>
              <p>{details.description}</p>
              <p>
                <strong>Brewer's Tips</strong> {details.brewers_tips}
              </p>
              <Link to="/allbeers">
                <button type="button" className="back-button">
                  <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36">
                    <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
                  </svg>
                </button>
              </Link>
            </article>
          </>
        ) : (
          "Loading"
        )}
      </section>
      <Header />
    </>
  );
};

export default DetailPage;
