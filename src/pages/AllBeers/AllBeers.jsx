import BeerCard from "../../components/BeerCard";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import "./AllBeers.css";

const AllBeers = () => {
  const [beerData, setBeerData] = useState([]);
  console.log(beerData);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      // * Bei dem 2 then speichern wir die daten in einem State "setMegaData(data)"
      .then((apiData) => setBeerData(apiData))
      .catch((error) => console.error("Fehler :-(", error));
  }, []); // Hier wird er beim ersten mal rendern die daten gefetcht
  console.log(beerData);
  return (
    <>
      <main>
        <section className="allBeers-container">
          {beerData ? (
            beerData.map((item, index) => (
              <BeerCard
                beerTitle={item.name}
                tagline={item.tagline}
                createdBy={item.contributed_by}
                buttonText="Details"
                beerID={item._id}
                key={index}
                imgURL={item.image_url}
              />
            ))
          ) : (
            <p>Laden...</p>
          )}
        </section>
      </main>
      <Header />
    </>
  );
};

export default AllBeers;
