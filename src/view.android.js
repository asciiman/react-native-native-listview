import React, { Component } from 'react';
import { requireNativeComponent, Dimensions } from 'react-native';
import NativeListviewItem from './item';
const RNNativeListviewView = requireNativeComponent('NativeListviewView', null);

class NativeListview extends Component {
  componentWillUnmount() {
    this.props.renderRow = undefined;
  }

  render() {
    const { rowHeight, renderRow } = this.props;
    const height = Dimensions.get('window').height;
    const rowsToRender = Math.max(9, Math.round(height / rowHeight * 1.6));
    let items = [];
    for (let i = 0; i < rowsToRender; i++) {
      items.push(
        <NativeListviewItem
          rowID={i}
          type={2}
          renderRow={renderRow}
          key={'r_' + i}
        />
      );
    }

    return (
      <RNNativeListviewView {...this.props}>
        {items}
      </RNNativeListviewView>
    );
  }
}

NativeListview.propTypes = {
  numRows: React.PropTypes.number.isRequired,
  rowHeight: React.PropTypes.number.isRequired,
  renderRow: React.PropTypes.func
};

export default NativeListview;
