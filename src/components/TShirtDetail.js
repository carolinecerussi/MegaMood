import * as React from "react";
import { tShirts } from "../data/index";
// import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
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






function TShirtDetail(tShirts) {
  return (    
  <TShirtObject>
      <h1>{tShirts.name.value}</h1> <br/>
      <h1>{tShirts.price.value} </h1><br/>
      {/* <button onClickingArtistName={() => handleClickingArtist(artist)}>{artist}</button> */}
			</TShirtObject>
  );
}

// TShirtDetail.propTypes = {
//   tShirts: PropTypes.object,
//   onClickingArtist: PropTypes.func,
// };

export default TShirtDetail;
