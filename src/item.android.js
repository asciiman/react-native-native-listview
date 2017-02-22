import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
const RNNativeListviewItemView =
  requireNativeComponent('NativeListviewItemView', null);

class NativeListviewItem extends Component {
  constructor(props) {
    super(props);
    this.onUpdateView = this.onUpdateView.bind(this);
    this.state = { innerRowID: this.props.rowID };
  }

  onUpdateView(event) {
    const { rowID } = event.nativeEvent;
    if (this.state.innerRowID !== rowID) {
      this.setState({ innerRowID: rowID });
    }
  }

  render() {
    const innerRowID = this.state.innerRowID;
    return (
      <RNNativeListviewItemView
        {...this.props}
        onUpdateView={this.onUpdateView}
			>
				{this.props.renderRow(innerRowID)}
			</RNNativeListviewItemView>
		);
  }
}

NativeListviewItem.propTypes = {
  rowID: React.PropTypes.number,
  renderRow: React.PropTypes.func.isRequired
};

export default NativeListviewItem;
