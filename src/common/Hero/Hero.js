import "./Hero.scss";
import Nav from "../Nav/Nav";
import Intro from "../Intro/Intro";

export default function Hero () {
    return (
        <div className="Hero">
            <Nav />
            <Intro />
        </div>
    );
}