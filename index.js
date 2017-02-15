import React, { Component } from 'react';
import { requireNativeComponent, Dimensions } from 'react-native';
import NativeListviewItem from './item';
const RNNativeListviewView = requireNativeComponent('NativeListviewView', null);

class NativeListview extends Component {
  componentWillUnmount() {
    this.props.renderRow = undefined;
  }

  render() {
    const height = Dimensions.get('window').height;
    let rCount = Math.round(height / this.props.rowHeight * 1.6);
    if (rCount < 9) rCount = 9;
    let items = [];
    for (let i = 0; i < rCount; i++) {
      items.push(
        <NativeListviewItem
          rowID={i}
          type={2}
          renderRow={this.props.renderRow}
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
