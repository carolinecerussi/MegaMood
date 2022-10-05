import TShirtDetail from "./TShirtDetail";
import React, {  useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  color: red;
  font-family: Gemini moon;
  font-size: 30pt;
  margin: 20pt;
  &: hover {
    color: green;
    cursor: pointer;
  }
`;

function TShirtControl()  {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [selectedTShirt, setSelectedTShirt] = useState(null);
  const handleClick = () => {
    if (selectedTShirt != null) {
      setFormVisibleOnPage(false);
      setSelectedTShirt(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  
  // const handleChangingSelectedTShirt = id => {
  //   const selection = mainTShirtList.filter(tShirts => tShirts.id === id)[0];
  //   setSelectedTShirt(selection);
  // }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h3>HI</h3>
      </React.Fragment>
    )
  }
  else if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>;
    }
    else {
      buttonText = 'T List';
    };
     if (selectedTShirt != null) {
      currentlyVisibleState = (
        
        <TShirtDetail />
      )
      buttonText = 'TSHIRTS';
      }
     else   {
      currentlyVisibleState = (
        <TicketList  />)
      }
      buttonText = 'TEES';
    }
    return (
      <React.Fragment>
      {currentlyVisibleState}
    <StyledButton onClick={handleClick}>{buttonText}</StyledButton>
      </React.Fragment>
    );
}


export default TShirtControl;