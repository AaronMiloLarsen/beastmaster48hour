import React from 'react'
import { Jumbotron } from 'reactstrap'

const Banner = (props) => {

    return (
        <div>

            <Jumbotron>
                <h1 className="display-3">Welcome to the Beastmaster Project!</h1>
                <p className="lead">Once you go beast you never go back!</p>
                <hr className="my-2" />
                <h2>This is a test of props.</h2>
                <h3>The prop of Latitude should be here: {props.lat}</h3>
                <h3>The prop of Longitude should be here: {props.long}</h3>
            </Jumbotron>

        </div>
    )
}

export default Banner;