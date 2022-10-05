
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


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
