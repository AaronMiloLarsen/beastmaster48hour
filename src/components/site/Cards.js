import React from "react";
import { Card, CardBody, CardDeck, CardFooter, CardText, CardTitle } from 'reactstrap';

import WeatherApp from '../apps/Weather/WeatherApp';
import WeatherDetails from '../apps/Weather/WeatherDetails';
import NasaApp from '../apps/Nasa/NasaApp';
import Zomato from '../apps/Zomato/Zomato';

const Cards = (props) => {
    return (
        <div className="carddeck">
            <CardDeck>
                <Card>
                    <CardBody>
                 
                        <CardTitle className="cardTitle">You Are Here</CardTitle>
                        <NasaApp lat={props.lat} long={props.long} />
                    </CardBody>
                    <CardFooter className="cardFooter">\
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
                <Card>

                    <CardBody>

                        <center><CardTitle className="cardTitle">Weather</CardTitle></center>
                        
                        <center><WeatherDetails className="weatherDetails" lat= {props.lat} long={props.long} /></center>
                        <center><WeatherApp lat= {props.lat} long={props.long} /></center>
                        <CardText>
                          
                        </CardText>

                    </CardBody>
                    <CardFooter className="cardFooter">
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
                <Card>
                    <CardBody>

                        <CardTitle className="cardTitle">Zomato</CardTitle>
                        <CardText>
                        <Zomato lat={props.lat} long={props.long} />
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