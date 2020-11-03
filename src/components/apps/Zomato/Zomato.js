import React, { useState } from 'react'


const Zomato = (props) => {

const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.long}`
const key = '6b80762d3e85e61d6d1283615fcf60e4'


const foodArr = [];

    fetch(url, {
    method: 'GET',
    headers: new Headers({
        'user-key': key
    })
})
   .then(res => res.json())
   .then(json => displayRestaurants(json))
   .catch(err => console.log(err));


   const displayRestaurants = (json) => {
    let food = json.nearby_restaurants

    for (let f of food) {
        let food = (f.restaurant.name)
        foodArr.push(food)
    }
    
   }

 console.log(foodArr);

    return (
        <div>
             <ul>
                <li>Insert Restaurant Here</li>
                <li>Insert Restaurant Here</li>
                <li>Insert Restaurant Here</li>
                <li>Insert Restaurant Here</li>
                <li>Insert Restaurant Here</li>
             </ul>
        </div>
    )
}



export default Zomato;

//  for ( i of foodArr) {
//     (i) => <li>{item}</li>
//  }

//  let item1 = foodArr[0];
//  let place2 = foodArr[1];
//  let place3 = foodArr[2];
//  let place4 = foodArr[3];
//  let place5 = foodArr[4];

//  console.log(item1)

//  let [ place1 , place2, place3, place4, place5] = foodArr
//  foodArr.forEach((item) => <li>{item}</li>,i)
//  console.log(item)
 
//  console.log(places);


//  const handlePlaces = (e) => {
//     e.preventDefault();
//  }
