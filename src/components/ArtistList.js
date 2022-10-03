import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArtistListContainer = styled.div`
  display: flex-align;
  justify-content: space-evenly;
  font-size: 16px;
	color: white;
  background: yellow;
  text-align: center;
`;

function ArtistList(props) {
	return (
		<ArtistListContainer>
			{props.artistList.map( artist => (
				<Artist whenArtistClicked={props.onArtistSelection}
				name={artist.name}
				about={artist.about}
				donate={artist.donate}
				id={artist.id}
				key={artist.id}
				website={artist.website}
				/>
			))}
		</ArtistListContainer>
	);
}

ArtistList.propTypes = {
	artistList: PropTypes.array,
	onArtistSelection: PropTypes.func
};

export default ArtistList;
