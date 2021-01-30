import { Route, Switch } from "react-router-dom";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import CarouselComp from "../CarouselComp";
import About from "../About";
import Production from "../Production";
import Partners from "../Partners";
import Advantages from "../Advantages";
import Footer from "../Footer";

function Home() {
    return (
        <div>
            <Header />
            <CarouselComp />
            <About />
            <Production />
            <Partners />
            <Advantages />
            <Footer />
        </div>
    );
}
export default Home;
