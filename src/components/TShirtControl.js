import React, { useEffect, useState} from "react";
import TShirtList from './TShirtList';
import TShirtDetail from "./TShirtDetail";
import {collection, addDoc, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import styled from 'styled-components';
import TShirt from "./TShirt";
import PropTypes from "prop-types";

function TshirtControl() {
	// const [formVisibleOnPage, setFormVisibleOnPage]= useState(false);
	// // const [error, setError] = useState(null);
  // const [selectedTShirt, setSelectedTShirt] = useState(null);


const handleClick = () => {
	if ( !=null) {
		setFormVisibleOnPage(false);
		setSelectedTShirt(null);
	} else {
	setFormVisibleOnPage(!formVisibleOnPage);
}
}

return (
<	React.Fragment>
{ error ? null : <button onClick={handleClick}>{tShirt.img}</button>}

</React.Fragment>
)
}

export default TshirtControl;