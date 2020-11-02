import React from "react";
import { Card, CardBody, CardDeck, CardFooter, CardImg, CardText, CardTitle } from 'reactstrap';

import NasaApp from '../apps/Nasa/NasaApp';

const Cards = (props) => {
    return (
        <div classname="carddeck">
            <CardDeck>
                <Card>
                    <CardImg variant="top" src="holder.js/100px160" />
                    <CardBody>
                        <CardTitle>Nasa Location</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis.
                        </CardText>
                        <NasaApp lat={props.lat} long={props.long}/>
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardFooter>
                </Card>
                <Card>
                    <CardImg variant="top" src="holder.js/100px160" />
                    <CardBody>
                        <CardTitle>Weather</CardTitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional content.{' '}
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardFooter>
                </Card>
                <Card>
                    <CardImg variant="top" src="holder.js/100px160" />
                    <CardBody>
                        <CardTitle>Zomato</CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardFooter>
                </Card>
            </CardDeck>
        </div>
    )
};

export default Cards;