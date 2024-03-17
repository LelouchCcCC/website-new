// import Header from "./components/Header/Header";
import css from "./Home.module.scss";
import Hero from "../Hero/Hero";
import Experties from "../Experties/Experties";
import Works from "../Works/Works";
const Home = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      {/* <Header /> */}
      <Hero />
      <Experties />
      <Works />
    </div>
  );
};

export default Home;
