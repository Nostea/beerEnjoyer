import BeerTeaser from "../../components/BeerTeaser";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <section className="teaser-container">
          <BeerTeaser
            imgURL="./public/allBeerImg.jpg"
            title="All Beers"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. "
            routerLink="/allbeers"
            linkText="see all beer"
          />
          <BeerTeaser
            imgURL="./public/randomBeerImg.jpg"
            title="Random Beer"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. "
            routerLink="/allbeers/random"
            linkText="see random beer"
          />
        </section>
      </main>
    </>
  );
};

export default Home;
