import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './toggleButton.css';

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <>
        <p className={`${selected ? 'auto-trading-on' : 'auto-trading-off'}`}>
          Turn {selected ? 'off' : 'on'} Auto Trading
        </p>
        <div className="toggle-container" onClick={toggleSelected}>
          <div
            className={`dialog-button ${selected ? 'activate' : 'disabled'}`}
          >
            {selected ? 'YES' : '.'}
          </div>
        </div>
      </>
    );
  }
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
};
