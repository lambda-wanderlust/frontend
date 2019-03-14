import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1.3rem;
`;

const StyledInput = styled.input`
    font-size: 1.3rem;
`;


class SearchForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="search-form">
        <StyledInput type="text" name="search" onChange={this.props.handleChange} onSubmit={this.props.searchHandler} placeholder="Search for a trip" />
        <StyledButton onClick={this.props.searchHandler}>Search</StyledButton>
        <StyledButton onClick={this.props.resetFilter}>Reset</StyledButton>
      </div>
    );
  }
}

export default SearchForm;