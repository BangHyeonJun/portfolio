import React, { Component } from "react";
import "routes/Home.css";

class Home extends Component {
    render() {
        return (
            <div id="HomeBackGround">
                <aside className="profile-card">
                    <header>
                        {/*<!-- here’s the avatar -->*/}
                        <a>
                            <img
                                src="https://scontent-hkg3-2.cdninstagram.com/vp/e3536444f2349eac62aa124e089ea7e8/5BF3731B/t51.2885-19/s150x150/17438347_1355909897801798_3606481963981996032_a.jpg?_nc_eui2=AeHtXDWP3ivRLTUyN5dwLG5RADdUg3WmfbLD2N6zmZCc2QAPXrAfg18uKY3WmZ60YJOuNKdwJ-qITA19bDYeGx6fyilAHLFER8vIevv6oLFKAQ"
                                className="hoverZoomLink"
                            />
                        </a>

                        {/*<!-- the username -->*/}
                        <h1>David Bang</h1>

                        {/*<!-- and role or location -->*/}
                        <h2>Web developer</h2>
                    </header>

                    {/*<!-- bit of a bio; who are you? -->*/}
                    <div className="profile-bio">
                        <p>
                            Hello, Your guys :) <br /> I'm David Bang.
                            <br /> are you wondering about me? <br />
                            Then you can click{" "}
                            <a href="http://localhost:3000/about">here</a>.
                        </p>
                    </div>

                    {/*<!-- some social links to show off -->*/}
                    <ul className="profile-social-links">
                        <li>
                            <a
                                target="_blank"
                                href="http://junprogramer.tistory.com/"
                            >
                                <i className="fa fa-tumblr" />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/jjunprogrammer"
                            >
                                <i className="fa fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/jjunijjunijjuni"
                            >
                                <i className="fa fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://github.com/BangHyeonJun"
                            >
                                <i className="fa fa-github" />
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default Home;
