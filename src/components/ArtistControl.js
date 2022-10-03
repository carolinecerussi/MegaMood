import React, { useState } from 'react';import ArtistList from "./ArtistList";
import ArtistAbout from "./ArtistAbout";
import { Link } from 'react-router-dom';
import ArtistList from "./ArtistList";

function ArtistControl() {
	const handleClick = () => {
		if (selectedArtist != null) {
			setFormVisibleOnPage(false);
		} else {
			setFormVisibleOnPage(!setFormVisibleOnPage);
		}
	};

	const handleClickingDonate = async id => {
		
	}

	if (selectedArtist != null) {
		currentlyVisibleState = (
			<ArtistAbout 
			artist={selectedArtist}>
			<Link to='/donate'onClickingDonate={handleClickingDonate}>Donate to Artist</Link>
			</ArtistAbout>
		)
		

		export default ArtistControl;