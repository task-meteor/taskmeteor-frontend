import "./Intro.scss";

export default function Intro () {
    return (
        <div className="Intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Boost Your Productivity</h1>
                        <p>
                            Task Meteor is a simple app that combines a timer and a task manager. It helps reduce distractions, limit interruptions and complete tasks more efficiently.
                        </p>
                        <p>
                            <a className="button button-red" href="#">Button here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}