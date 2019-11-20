import React, {Component} from "react";
// import PropTypes from 'prop-types';
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  }
  
  onSearchChange = (e) => {
    const term = e.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render() {

    const { term } = this.state;

    return (
      <input type="text"
        className="form-control search-input"
        placeholder="Search"
        value={term}
        onChange={this.onSearchChange}
      />
    )
  }
};

// SearchPanel.propTypes = {
//   onSearchChange: PropTypes.function().isRequired,
//   }


