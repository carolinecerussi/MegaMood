import React, { useState } from 'react';import ArtistList from "./ArtistList";
import ArtistAbout from "./ArtistAbout";
// import { Link } from 'react-router-dom';
function ArtistControl() {
	const [selectedArtist, setSelectedArtist] = useState(null);
  const handleClick = () => {
    if (selectedArtist != null) {
      setFormVisibleOnPage(false);
      setSelectedArtist(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
		}
  };
	if (selectedArtist != null) { 
		return(
			<ArtistAbout />

		)

	}
	}

	export default ArtistControl;