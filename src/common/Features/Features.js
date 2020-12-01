import "./Features.scss";

export default function Features () {
    return (
        <div className="Features">
            <div className="container">
                <div className="row Feature">
                    <div className="col-md-6">
                        <img src="https://picsum.photos/id/210/800/800" alt="sample 1" className="Feature-image" />
                    </div>
                    <div className="col-md-6">
                        <div className="Feature-description">
                            <h2>Easy time & task management</h2>
                            <p>
                                For many people, time is an enemy. The anxiety triggered by “the ticking clock”, especially when it involves a deadline, leads to ineffective work and study habits which in turn lead to procrastination.
                            </p>
                            <p>
                                Time Meteor helps you get rid of the procrastination stress by motivating you to get stuff done, one time period at a time. Each finished time period gives you a feeling of accomplishment that keeps you.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row Feature">
                    <div className="col-md-6">
                        <img src="https://picsum.photos/id/210/800/800" alt="sample 1" className="Feature-image" />
                    </div>
                    <div className="col-md-6">
                        <div className="Feature-description">
                            <h2>Activity monitoring</h2>
                            <p>
                                For many people, time is an enemy. The anxiety triggered by “the ticking clock”, especially when it involves a deadline, leads to ineffective work and study habits which in turn lead to procrastination.
                            </p>
                            <p>
                                Time Meteor helps you get rid of the procrastination stress by motivating you to get stuff done, one time period at a time. Each finished time period gives you a feeling of accomplishment that keeps you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}