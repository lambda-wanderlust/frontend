import React from 'react';
import styles from './SearchForm.module.scss';

class SearchForm extends React.Component {

  render() {
    return (
      <div className={styles.SearchForm}>
        <input className={styles.SearchInput} type="text" name="search" onChange={this.props.handleChange} onSubmit={this.props.searchHandler} placeholder="Search for a trip" />
        <button className={styles.SearchBtn} onClick={this.props.searchHandler}>Search</button>
        <button className={styles.SearchBtn} onClick = {this.props.resetFilter}>Reset</button>
      </div>
    );
  }
}

export default SearchForm;