import React, { useEffect, useState} from "react";
import TShirtList from './TShirtList';
import TShirtDetail from "./TShirtDetail";
import {collection, addDoc, doc, updateDoc, deleteDoc, query, orderBy, QuerySnapshot } from 'firebase/firestore';
import styled from 'styled-components';
import TShirt from "./TShirt";
import ArtistList from "./ArtistList";
import ArtistAbout from "./ArtistAbout";



function TshirtControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
	const [error, setError] = useState(null);
  const [selectedTShirt, setSelectedTShirt] = useState(null);
const handleClick = () => {
	if (selectedTShirt !=null) {
		setFormVisibleOnPage(false);
		setSelectedTShirt(null);
		setLooking(false);
	} else {
	setFormVisibleOnPage(!formVisibleOnPage);
	}
}
	const handleLookClick = () => {
		setLooking(true);
	}
	const handleClickingArtist = id => {
		const artistSelection = ArtistList.filter(artist => artist.id === id)[0];
		setSelectedArtist(artistSelection);
	}
	if(error) {
		currentlyVisibleState = <p>There was an error : {error}</p>
	} else if (looking) {
	currentlyVisibleState = (
		<ArtistAbout onClickingArtist={handleClickingArtist}
		/>
	)
	}
	currentlyVisibleState = (
		tShirt={selectedTShirt}
		onClickingArtist = {handleClickingArtist} />
	)
}
}


return (
<	React.Fragment>
{<button onClick={handleClick}>{tShirt.img}</button>}
{currentlyVisibleForm}

</React.Fragment>
)
}

export default TshirtControl;