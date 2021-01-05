import { Header } from "../../partials";
import { CardsList } from "../../components";
import "./Home.style.scss";

const HomePage = () => {
  return (
    <div className="home__page">
      <Header />
      <CardsList />
    </div>
  );
};

export default HomePage;
