import React from "react";
import ArtistList from "./ArtistList";
import ArtistAbout from "./ArtistAbout";


function ArtistControl() {
	const handleClick = () => {
		if (selectedArtist != null) {
			setFormVisibleOnPage(false);
		} else {
			setFormVisibleOnPage(!setFormVisibleOnPage);
		}
	}

	const handleClickingDonate = 