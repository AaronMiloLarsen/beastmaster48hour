import React from 'react'
import { Jumbotron } from 'reactstrap'
import Location from '../apps/Location'


const Banner = (props) => {

    return (
        <div>

            <Jumbotron>
                <h1 className="display-3">Welcome to the <br /> Beastmaster Project!</h1>
                <p className="lead">Once you go beast you never go back!</p>

                <Location lat={props.lat} long={props.long} />

            </Jumbotron>

        </div>
    )
}

export default Banner;