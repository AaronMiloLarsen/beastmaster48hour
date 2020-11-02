import React from "react";
import { Card, CardBody, CardDeck, CardFooter, CardText, CardTitle } from 'reactstrap';

import NasaApp from '../apps/Nasa/NasaApp';

const Cards = (props) => {
    return (
        <div className="carddeck">
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle>You Are Here</CardTitle>
                        <NasaApp lat={props.lat} long={props.long} />
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted"></small>
                    </CardFooter>
                </Card>
                <Card>

                    <CardBody>
                        <CardTitle>Weather</CardTitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional content.
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
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
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