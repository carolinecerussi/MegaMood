
import React from 'react';
// import styled from 'styled-components';
import {data}  from "../data/index";
 
 const tShirtShowing = data.name;
function TShirt() {
	return (
		<React.Fragment>
			<h1>{tShirtShowing}</h1>
			</React.Fragment>
	);
	};

export default TShirt;
