import React from 'react'
import { Jumbotron } from 'reactstrap'

const Banner = (props) => {

    return (
        <div>

            <Jumbotron>
                <h1 className="display-3">Welcome to the <br /> Beastmaster Project!</h1>
                <p className="lead">Once you go beast you never go back!</p>

                <h5>Latitude: {props.lat}</h5>
                <h5>Longitude: {props.long}</h5>
            </Jumbotron>

        </div>
    )
}

export default Banner;