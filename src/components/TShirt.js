//shirts? //
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TShirtDetail from "./TShirtDetail";

// const ClickedTShirt = (
//   <ul>
// 		<li><h1>{props.name}</h1></li>
//     <li>Artist: {props.artist}</li>
//     <li>Price: {props.price} </li>
//     <li>Cherries</li>
//   </ul>
// );

function TShirt(props) {
	return (
		<TShirt onClick={() => props.whenTShirtClicked(props.id)}>
		<TShirtDetail />
		</TShirt>

	)
}

TShirt.propTypes = {
name: PropTypes.string,
id: PropTypes.string,
size: PropTypes.string,
price: PropTypes.number,
color: PropTypes.string,
quantity: PropTypes.number,
artist: PropTypes.string
//create whenTShirtClicked: PropTypes.func
}

export default TShirt;
