import React from "react";
import { Card, CardBody, CardDeck, CardFooter, CardText, CardTitle } from 'reactstrap';

// import NasaApp from '../apps/Nasa/NasaApp';
import WeatherApp from '../apps/Weather/WeatherApp'



const Cards = (props) => {
    return (
        <div className="carddeck">
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle>Nasa Location</CardTitle>
                       
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
                <Card>

                    <CardBody>
                        <CardTitle>Weather</CardTitle>
                        <WeatherApp lat= {props.lat} long={props.long} />
                        <CardText>
                          
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Zomato</CardTitle>
                        <CardText>
                           
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
            </CardDeck>
        </div>
    )
};

export default Cards;