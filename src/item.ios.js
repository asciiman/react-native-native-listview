import React, { Component } from 'react';

class NativeListviewItem extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.rowId !== this.props.rowId;
  }

  render() {
    return this.props.renderRow(this.props.rowId);
  }
}

NativeListviewItem.propTypes = {
  rowId: React.PropTypes.number.isRequired,
  renderRow: React.PropTypes.func.isRequired
};

export default NativeListviewItem;
