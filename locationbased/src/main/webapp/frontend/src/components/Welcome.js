import React from "react";
import {Jumbotron} from "react-bootstrap";

export default class Welcome extends React.Component {
    render() {
        return(
            <Jumbotron className="bg-dark text-white">
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
            </Jumbotron>
        )
    }
}

