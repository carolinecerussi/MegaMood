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

export default ArtistAbout;