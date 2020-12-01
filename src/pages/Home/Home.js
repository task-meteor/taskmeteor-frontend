import "./Home.scss";
import Nav from "../../common/Nav/Nav";
import Intro from "../../common/Intro/Intro";
import Features from "../../common/Features/Features";

function Home() {
    return (
        <div className="Home">
            <Nav />
            <Intro />
            <Features />
        </div>
    );
}

export default Home;
