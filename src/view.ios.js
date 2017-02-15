import React, { Component } from 'react';
import { requireNativeComponent, Dimensions } from 'react-native';
import NativeListviewItem from './item';
const RNTableViewChildren = requireNativeComponent('RNNativeListview', null);

class NativeListview extends Component {
  constructor(props) {
    super(props);
    const binding = [];
    for (let i = 0; i < 100; i++) binding.push(-1);
    this.state = { binding };
  }

  render() {
    const { rowHeight, renderRow } = this.props;
    const height = Dimensions.get('window').height;
    const rowsToRender = Math.max(9, Math.round(height / rowHeight * 1.6));
    let items = [];
    for (let i = 0; i < rowsToRender; i++) {
      items.push(
        <NativeListviewItem
          rowId={this.state.binding[i]}
          renderRow={renderRow}
          key={'r_' + i}
        />
      );
    }

    return (
      <RNTableViewChildren
        style={{ flex: 1 }}
        onChange={this.onBind.bind(this)}
        rowHeight={this.props.rowHeight}
        numRows={this.props.numRows}
      >
        {items}
      </RNTableViewChildren>
    );
  }

  onBind(event) {
    const { childIndex, rowID } = event.nativeEvent;
    const binding = { ...this.state.binding };
    binding[childIndex] = rowID;
    this.setState({ binding });
  }
}

NativeListview.propTypes = {
  numRows: React.PropTypes.number.isRequired,
  rowHeight: React.PropTypes.number.isRequired,
  renderRow: React.PropTypes.func
};

export default NativeListview;
