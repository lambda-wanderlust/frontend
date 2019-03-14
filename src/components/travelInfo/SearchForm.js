import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
color: #247291;
background: #F7D95B;
text-transform: uppercase;
padding: 5px 15px;
border-radius: 10px;
border: none;
text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
margin: 1rem .7rem;
`;

const StyledInput = styled.input`
    font-size: 1.3rem;
    border-radius: 6px;
    border: .5px solid black;
    height: 2.5rem;
    
`;

const StyledDiv = styled.div `


`


class SearchForm extends React.Component {

  render() {
    return (
      <StyledDiv className="search-form">
        <StyledInput type="text" name="search" onChange={this.props.handleChange} onSubmit={this.props.searchHandler} placeholder="Search for a trip" />
        <StyledButton onClick={this.props.searchHandler}>Search</StyledButton>
        <StyledButton onClick={this.props.resetFilter}>Reset</StyledButton>
      </StyledDiv>
    );
  }
}

export default SearchForm;