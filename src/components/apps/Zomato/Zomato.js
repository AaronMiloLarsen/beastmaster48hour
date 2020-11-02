import React from 'react'


const Zomato = (props) => {

let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.long}`
let key = '0225a91cbbaebbc742bf010652efaa27'

fetch(url, {
    method: 'GET',
    headers: new Headers({
        'user-key': key
    })
})
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err => console.log(err));


console.log(url);

    return (
        <div>
             
        </div>
    )
}

export default Zomato;