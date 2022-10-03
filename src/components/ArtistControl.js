import React, { useState } from 'react';import ArtistList from "./ArtistList";
import ArtistAbout from "./ArtistAbout";
import { Link } from 'react-router-dom';
import ArtistList from "./ArtistList";

function ArtistControl() {
	const [selectedArtist, setSelectedArtist] = useState(null);
  const handleClick = () => {
    if (selectedArtist != null) {
      setFormVisibleOnPage(false);
      setSelectedArtist(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

	const handleClickingDonate = async artistToDonate  => {
		const artistRef = doc(artist, 'artists', artistToDonate.id);
		await 
		return (

		)
	}

	if (selectedArtist != null) {
		currentlyVisibleState = (
			<ArtistAbout 
			artist={selectedArtist}>
			<Link to='/donate'onClickingDonate={handleClickingDonate}>Donate to Artist</Link>
			</ArtistAbout>
		)
		

		export default ArtistControl;