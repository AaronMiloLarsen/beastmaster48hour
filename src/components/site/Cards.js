import React from "react";
import { Card, CardBody, CardDeck, CardFooter, CardText, CardTitle } from 'reactstrap';

import NasaApp from '../apps/Nasa/NasaApp';
import WeatherApp from '../apps/Weather/WeatherApp';

const Cards = (props) => {
    return (
        <div className="carddeck">
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle className="cardTitle">You Are Here</CardTitle>
                        <NasaApp lat={props.lat} long={props.long} />
                    </CardBody>
                    <CardFooter className="cardFooter">
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
                <Card>

                    <CardBody>
                        <CardTitle className="cardTitle">Weather</CardTitle>
                        <CardText>
                            Sarah's weather will go here.
                        </CardText>
                        <WeatherApp lat={props.lat} long={props.long} />
                    </CardBody>
                    <CardFooter className="cardFooter">
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle className="cardTitle">Zomato</CardTitle>
                        <CardText>
                            Aaron's restaraunts will go here.
                        </CardText>
                    </CardBody>
                    <CardFooter className="cardFooter">
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
            </CardDeck>
        </div>
    )
};

export default Cards;