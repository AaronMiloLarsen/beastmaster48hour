import React from "react";
import { Card, CardBody, CardDeck, CardFooter, CardText, CardTitle } from 'reactstrap';

// import NasaApp from '../apps/Nasa/NasaApp';
import WeatherApp from '../apps/Weather/WeatherApp'
import WeatherDetails from '../apps/Weather/WeatherDetails'



const Cards = (props) => {
    return (
        <div className="carddeck">
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle></CardTitle>
                       
                    </CardBody>
                    <CardFooter>
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
                        <CardTitle></CardTitle>
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