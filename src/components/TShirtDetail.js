import * as React from "react";
// import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Artist from "./Artist";
import PropTypes from "prop-types";
import styled from "styled-components";
// function TShirtDetail() {
// 		const [color, setColor] = useColor("hex", "#121212");

// 	return (
// 		<React.Fragment>
// 				<p>Choose Color:</p>
// 				<ColorPicker  width={456} height={228} color={color} onChange={setColor} hideHSV dark />
// 			</React.Fragment>
// 	);
// };

// export default TShirtDetail;
// // ReactDOM.render(<TShirtDetail />, document.querySelector("megamood"));




const TShirtObject = styled.div`
  margin: 1rem auto;
  padding: 10pt;
  max-width: 50%;
  background: white;
	border-width: 2pt;
	color: red;
	border-color: pink;
`;

const TShirtName = styled.h2`
  margin-bottom: 1rem;
  font-size: 40pt;
  font-family: karla;
  font-weight: 250;
  background-color: transparent;
`;

const TShirtArtist= styled.h2`
background-color:transparent;
font-weight:250;
margin: 10pt;
font-size: 20pt;
font-family: karla;
`;


function TShirtDetail(props) {
  const { tShirt } = props;
  return (    
  <TShirtObject>
      <TShirtName>Order # {tShirt.name} <br/> {tShirt.price} </TShirtName>
      <TShirtArtist>{tShirt.artist}</TShirtArtist>
      <button onClick={() => onClickingArtist(tShirt.id)}>
				{tShirt.artist} 
				</button>
			</TShirtObject>
  );
}

TShirtDetail.propTypes = {
  tShirt: PropTypes.object,
  onClickingArtist: PropTypes.func,
};

export default TShirtDetail;
