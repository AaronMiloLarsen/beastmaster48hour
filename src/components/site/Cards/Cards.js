import React from "react";
import { Card, CardBody, CardDeck, CardFooter, CardText, CardTitle } from 'reactstrap';

// import NasaApp from '../apps/Nasa/NasaApp';

import Zomato from '../../apps/Zomato/Zomato'

const Cards = (props) => {
    return (
        <div className="carddeck">
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle>Nasa Location</CardTitle>
                        {/* <NasaApp lat={props.lat} long={props.long} /> */}
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
                <Card>

                    <CardBody>
                        <CardTitle>Weather</CardTitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional content.{' '}
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
                            <Zomato lat={props.lat} long={props.long} />
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
