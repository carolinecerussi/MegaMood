import React from 'react';
import Artist from './ArtistAbout';
import PropTypes from 'prop-types';

function ArtistAbout(props) {
	const { artist, onClickingDonate } = props;

return (

  <ArtistAbout>
    <div className='artist-details'>
			<h1>{Artist.name}</h1>
			<p>{Artist.about}</p>
			<p>{Artist.website}</p>
			<p>{Artist.onClickingDonate}</p>
		</div>
  </ArtistAbout>
)};

ArtistAbout.propTypes = {
	artist: PropTypes.object,
	onClickingDonate: PropTypes.func,
};
//href="https://secure.givelively.org/donate/the-artist-co-op" target="_blank" class="Header-nav-item"><big>MAKE A <br> DONATION </big></a>//
export default ArtistAbout;