import "./Nav.scss";

export default function Nav (props) {
    return (
        <div className="Nav Nav-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <a href="#" className="logo">Task Meteor</a>
                        <nav>
                            <a href="#">Sign Up</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}