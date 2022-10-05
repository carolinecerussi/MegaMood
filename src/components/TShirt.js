
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import data from "../data/index";



const root = ReactDOM.createRoot(document.getElementById('root'));
console.log({root});




const tShirt = [
  {
    id: 1,
    name: "First TShirt",
    price: "$65",
    img: "tShirtPic",
    stocked: true,
    quantity: "howMany",
    artist: "HasMood"
  },
  {
    id: 2,
    name: "Second TShirt",
    img: "tShirtpic",
    price: "$65",
    stocked: true,
    quantity: "howMany",
    artist: "CarolineC"
  },
  {
    id: 3,
    name: "Third TShirt",
    img: "tShirtpic",
    price: "$65",
    stocked: true,
    quantity: "howMany",
    artist: "Finnley"
  },
  {
    id:4,
    name: "Fourth TShirt",
    img: "tShirtpic",
    price: "$65",
    stocked: true,
    quantity: "howMany",
    artist: "Marco"
  },
  {
    id: 5,
    name: "Fifth TShirt",
    img: "tShirtpic",
    price: "$65",
    stocked: true,
    quantity: "howMany",
    artist: "Us"
  },
];


console.log({tShirt});

function TShirtList(tShirt) {
  
  return ( 
    <h1>{tShirt.id}</h1>
    <h1>{tShirt.name}</h1>
  )
  
};

// function selectedTShirt() => {
//   const thisT = {tShirt.id};











// const howMany = //figure out how to write howMany equals quantity selection ...maybe do a number select and change to string ?

const TShirtObject = styled.div`
h1{
	 margin: .5 rem;
  background-color: transparent;
  font-family: karla ;
  color: black;
  font-weight: 300;
}
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
	  &:active {
    cursor: pointer;
    opacity: 0.4;
  }
`;


function TShirt(props) {
	return (
		<TShirtObject onClick={ () => props.whenTShirtClicked(props.id)}>
			<h1><Image>{props.img}</Image></h1>
			<p> Artist :{props.artist}</p>
			<p>Price: {props.price}</p>
			<p></p>
		</TShirtObject>
	);
}

TShirt.propTypes = {
name: PropTypes.string,
id: PropTypes.string,
size: PropTypes.string,
price: PropTypes.string,
color: PropTypes.string,
quantity: PropTypes.string,
artist: PropTypes.string,
whenTShirtClicked: PropTypes.func
};

export default TShirt;
