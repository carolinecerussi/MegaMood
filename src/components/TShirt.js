
import React from 'react';
// import styled from 'styled-components';
import {tShirts} from "../data/index";
 
function TShirt() {

// const tShirts= 
// 	[ {
//     id: 1,
//     name: "First TShirt",
//     price: "$65",
//     img: "tShirtPic",
//     stocked: true,
//     quantity: "howMany",
//     artist: "HasMood"
//   },
//   {
//     id: 2,
//     name: "Second TShirt",
//     img: "tShirtpic",
//     price: "$65",
//     stocked: true,
//     quantity: "howMany",
//     artist: "CarolineC"
//   },
//   {
//     id: 3,
//     name: "Third TShirt",
//     img: "tShirtpic",
//     price: "$65",
//     stocked: true,
//     quantity: "howMany",
//     artist: "Finnley"
//   },
//   {
//     id:4,
//     name: "Fourth TShirt",
//     img: "tShirtpic",
//     price: "$65",
//     stocked: true,
//     quantity: "howMany",
//     artist: "Marco"
//   },
//   {
//     id: 5,
//     name: "Fifth TShirt",
//     img: "tShirtpic",
//     price: "$65",
//     stocked: true,
//     quantity: "howMany",
//     artist: "Us"
// 	},
// 	];
	return (
		<React.Fragment>
			<ul>
				{tShirts}
			</ul>
		</React.Fragment>
	);
	};




// function TShirt(tShirt) {
//   return (
// 		<React.Fragment>
// 		<h1>tShirt.name</h1>
// 		<h1>tShirt.artist</h1>
// 		</React.Fragment>
// 	)
// }

// function selectedTShirt() => {
//   const thisT = {tShirt.id};











// const howMany = //figure out how to write howMany equals quantity selection ...maybe do a number select and change to string ?

// const TShirtObject = styled.div`
// h1{
// 	 margin: .5 rem;
//   background-color: transparent;
//   font-family: karla ;
//   color: black;
//   font-weight: 300;
// }
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
// 	  &:active {
//     cursor: pointer;
//     opacity: 0.4;
//   }
// `;




export default TShirt;
